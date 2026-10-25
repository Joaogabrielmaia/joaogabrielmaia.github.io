import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { projects, roles, experiences, certifications, profile, projectsForArea, experiencesForArea, projectBySlug } from "../content";
import { areaSlugs } from "../content/schema";

const publico = (...p: string[]) => join(process.cwd(), "public", ...p);
const tudoEmTexto = JSON.stringify({ projects, roles, experiences, certifications, profile });

describe("modelo de conteúdo", () => {
  it("tem as 8 áreas, 8 projetos e 2 experiências", () => {
    expect(roles.map((r) => r.slug).sort()).toEqual([...areaSlugs].sort());
    expect(projects).toHaveLength(8);
    expect(experiences.map((e) => e.slug).sort()).toEqual(["desenvolvedor-full-stack-autonomo", "hotmart-suporte-ti"]);
    expect(certifications).toHaveLength(9);
  });

  it("slugs de projeto são únicos", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("os 4 projetos em destaque na home são trilha, pulso, prumo e ponte", () => {
    expect(projects.filter((p) => p.destaqueNaHome).map((p) => p.slug).sort()).toEqual(["prumo", "pulso", "ponte", "trilha"].sort());
  });

  it("cada área tem pelo menos um projeto ou experiência como prova", () => {
    for (const r of roles) {
      expect(projectsForArea(r.slug).length + experiencesForArea(r.slug).length, r.slug).toBeGreaterThan(0);
    }
  });
});

describe("mapa de áreas", () => {
  it("projectsForArea põe os principais antes dos relacionados", () => {
    for (const r of roles) {
      const niveis = projectsForArea(r.slug).map((x) => x.nivel);
      const primeiroRel = niveis.indexOf("relacionado");
      if (primeiroRel >= 0) expect(niveis.slice(primeiroRel).every((n) => n === "relacionado"), r.slug).toBe(true);
    }
  });

  it("segue a matriz da base para os principais (Trilha, Pulso, Prumo, Ponte)", () => {
    const principais = (slug: string) => projectBySlug(slug)!.areas.filter((a) => a.nivel === "principal").map((a) => a.area).sort();
    expect(principais("trilha")).toEqual(["analista-projetos", "customer-success", "implantacao", "negocios-requisitos"]);
    expect(principais("pulso")).toEqual(["analista-automacao", "sdr-bdr"]);
    expect(principais("prumo")).toEqual(["consultor-automacao-ia", "customer-success"]);
    expect(principais("ponte")).toEqual(["analista-automacao", "consultor-solucoes", "implantacao"]);
  });
});

describe("regras de integridade", () => {
  it("os 7 projetos novos têm a caixa de cenário, repositório e, ao menos, 5 prints em destaque", () => {
    for (const p of projects.filter((x) => x.tipo === "novo")) {
      expect(p.cenario, p.slug).toBeDefined();
      expect(p.repositorio, p.slug).toBeDefined();
      expect(p.prints.filter((x) => x.destaque).length, p.slug).toBe(5);
      expect(p.roteiroLeitura, p.slug).toHaveLength(7);
    }
  });

  it("todo número de projeto tem fonte e data", () => {
    for (const p of projects) for (const n of p.numeros) {
      expect(n.fonte.length, `${p.slug}/${n.rotulo}`).toBeGreaterThan(3);
      expect(n.data.length, `${p.slug}/${n.rotulo}`).toBeGreaterThan(3);
    }
  });

  it("arquivos de prints, miniaturas, diagramas e capas existem em public/", () => {
    for (const p of projects) {
      for (const pr of p.prints) {
        expect(existsSync(publico("projects", p.slug, `${pr.arquivo}.webp`)), `${p.slug}/${pr.arquivo}`).toBe(true);
        expect(existsSync(publico("projects", p.slug, "thumbs", `${pr.arquivo}.webp`)), `${p.slug}/thumbs/${pr.arquivo}`).toBe(true);
      }
      for (const d of p.diagramas) expect(existsSync(publico("projects", p.slug, "diagrams", d.arquivo)), `${p.slug}/${d.arquivo}`).toBe(true);
      if (p.capa) {
        const caminho = p.capa.startsWith("/") ? publico(p.capa) : publico("projects", p.slug, "thumbs", `${p.capa}.webp`);
        expect(existsSync(caminho), `${p.slug} capa`).toBe(true);
      }
      for (const e of p.arquivosExtras) expect(existsSync(publico(e.url)), e.url).toBe(true);
    }
  });

  it("ERP Vortex: sem imagens e sem afirmar uso real", () => {
    const v = projectBySlug("erp-vortex")!;
    expect(v.prints).toHaveLength(0);
    expect(v.diagramas).toHaveLength(0);
    // a seção "O que não afirmo" cita a frase de propósito, para negá-la
    const semNegacao = JSON.stringify({ ...v, texto: v.texto.filter((t) => t.titulo !== "O que não afirmo") });
    expect(semNegacao).not.toMatch(/entrou em uso|em produção|está em uso|em uso real/i);
    expect(v.texto.find((t) => t.titulo === "O que não afirmo")).toBeDefined();
  });

  it("não publica pretensão salarial, sociedade, telefone nem selo “Verificado” sem credencial", () => {
    expect(tudoEmTexto).not.toMatch(/pretens[ãa]o salarial|s[óo]cio|97577|consultoria pr[óo]pria/i);
    for (const c of certifications) if (c.verificado) expect(c.urlCredencial ?? c.nota, c.titulo).toBeDefined();
  });

  it("Prumo não diz que foi avaliado com o Claude; Termômetro não chama o score de previsão", () => {
    const prumo = JSON.stringify(projectBySlug("prumo"));
    expect(prumo).not.toMatch(/avaliad[oa] com o Claude/i);
    expect(prumo).toMatch(/Nenhuma rodada de avaliação usou o Claude/);
    const termo = JSON.stringify(projectBySlug("termometro"));
    expect(termo).not.toMatch(/é uma previsão|prevê o cancelamento/i);
  });

  it("Fluxo rotula o ganho de tempo como estimativa", () => {
    const f = projectBySlug("fluxo")!;
    expect(f.numeros.find((n) => n.rotulo.includes("211") || n.valor.includes("211"))?.rotulo).toMatch(/ESTIMATIVA/);
  });

  it("LinkedIn usa o endereço com acento codificado", () => {
    expect(profile.linkedin).toBe("https://www.linkedin.com/in/jo%C3%A3ogabrielmaia");
  });
});
