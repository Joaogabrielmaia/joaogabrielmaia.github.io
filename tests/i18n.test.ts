import { describe, it, expect } from "vitest";
import { getContent, projects } from "../content";
import { projectsEn } from "../content/en/projects";
import { rolesEn, experiencesEn, skillsEn, certificationsEn } from "../content/en/base";
import { switchLangPath, routes } from "../content/routes";
import { ui } from "../content/ui";

const pt = getContent("pt");
const en = getContent("en");

/** Compara a forma de duas estruturas: o inglês não pode ter listas maiores nem chaves que o português não tem. */
function forma(base: unknown, trad: unknown, caminho: string, erros: string[]) {
  if (Array.isArray(trad)) {
    if (!Array.isArray(base)) return erros.push(`${caminho}: esperado array`);
    if (trad.length !== base.length) erros.push(`${caminho}: ${trad.length} itens no inglês e ${base.length} no português`);
    trad.forEach((t, i) => forma(base[i], t, `${caminho}[${i}]`, erros));
  } else if (trad && typeof trad === "object") {
    for (const [k, v] of Object.entries(trad)) {
      if (!base || typeof base !== "object" || !(k in (base as object))) erros.push(`${caminho}.${k}: chave inexistente no português`);
      else forma((base as Record<string, unknown>)[k], v, `${caminho}.${k}`, erros);
    }
  }
}

describe("traduções (inglês)", () => {
  it("projetos: mesma forma do português (listas do mesmo tamanho, sem chaves soltas)", () => {
    const erros: string[] = [];
    for (const p of projects) {
      const { printLegendas, ...resto } = (projectsEn[p.slug] ?? {}) as Record<string, unknown>;
      expect(projectsEn[p.slug], `falta tradução de ${p.slug}`).toBeDefined();
      forma(p, resto, p.slug, erros);
      for (const arq of Object.keys((printLegendas as object) ?? {})) {
        if (!p.prints.some((x) => x.arquivo === arq)) erros.push(`${p.slug}: print ${arq} não existe`);
      }
    }
    expect(erros).toEqual([]);
  });

  it("áreas, experiências, competências e certificações têm a mesma forma", () => {
    const erros: string[] = [];
    forma(pt.roles, rolesEn, "roles", erros);
    forma(pt.experiences, experiencesEn, "experiences", erros);
    forma(pt.skills, skillsEn, "skills", erros);
    forma(pt.certifications, certificationsEn, "certifications", erros);
    expect(erros).toEqual([]);
  });

  it("o texto principal mudou de verdade (não sobrou português nos campos traduzidos)", () => {
    for (const [i, p] of pt.projects.entries()) {
      const e = en.projects[i];
      expect(e.frase, p.slug).not.toBe(p.frase);
      expect(e.resumo30s.problema, p.slug).not.toBe(p.resumo30s.problema);
      e.decisoes.forEach((d, k) => expect(d.decisao, `${p.slug} decisão ${k}`).not.toBe(p.decisoes[k].decisao));
      e.naoValidado.forEach((n, k) => expect(n, `${p.slug} não validado ${k}`).not.toBe(p.naoValidado[k]));
    }
    pt.roles.forEach((r, i) => expect(en.roles[i].pitch).not.toBe(r.pitch));
    expect(en.profile.hero.frase).not.toBe(pt.profile.hero.frase);
  });

  it("slugs, URLs, números e datas são os mesmos nos dois idiomas", () => {
    pt.projects.forEach((p, i) => {
      const e = en.projects[i];
      expect(e.slug).toBe(p.slug);
      expect(e.repositorio).toBe(p.repositorio);
      expect(e.documentos.map((d) => d.url)).toEqual(p.documentos.map((d) => d.url));
      expect(e.numeros.map((n) => n.data)).toEqual(p.numeros.map((n) => n.data));
      expect(e.prints.map((x) => x.arquivo)).toEqual(p.prints.map((x) => x.arquivo));
    });
    expect(en.certifications.map((c) => c.urlCredencial)).toEqual(pt.certifications.map((c) => c.urlCredencial));
  });

  it("o dicionário de interface tem as mesmas chaves nos dois idiomas", () => {
    const chaves = (o: object, p = ""): string[] =>
      Object.entries(o).flatMap(([k, v]) => (v && typeof v === "object" ? chaves(v, `${p}${k}.`) : [`${p}${k}`]));
    expect(chaves(ui.en).sort()).toEqual(chaves(ui.pt).sort());
  });
});

describe("rotas de idioma", () => {
  it("troca o idioma mantendo a página", () => {
    expect(switchLangPath("/", "en")).toBe("/en");
    expect(switchLangPath("/projetos", "en")).toBe("/en/projects");
    expect(switchLangPath("/projetos/trilha", "en")).toBe("/en/projects/trilha");
    expect(switchLangPath("/experiencia/hotmart-suporte-ti", "en")).toBe("/en/experience/hotmart-suporte-ti");
    expect(switchLangPath("/areas/implantacao", "en")).toBe("/en/areas/implantacao");
    expect(switchLangPath("/sobre", "en")).toBe("/en/about");
    expect(switchLangPath("/en", "pt")).toBe("/");
    expect(switchLangPath("/en/projects/ponte", "pt")).toBe("/projetos/ponte");
    expect(switchLangPath("/en/about", "pt")).toBe("/sobre");
    expect(switchLangPath("/en/areas/sdr-bdr/", "pt")).toBe("/areas/sdr-bdr");
  });

  it("ida e volta devolve o caminho original", () => {
    for (const lang of ["pt", "en"] as const) {
      const r = routes(lang);
      const outro = lang === "pt" ? "en" : "pt";
      for (const caminho of [r.projects, r.about, r.project("trilha"), r.area("sdr-bdr"), r.experiencePage("hotmart-suporte-ti")]) {
        expect(switchLangPath(switchLangPath(caminho, outro), lang)).toBe(caminho);
      }
    }
  });
});
