// Converte os prints dos repositórios clonados em WebP (1280 px + miniatura de 640 px).
// Uso: node scripts/preparar-imagens.mjs <pasta-com-os-clones>
import { readdirSync, mkdirSync, existsSync, copyFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const base = process.argv[2];
if (!base) throw new Error("Informe a pasta com os clones dos repositórios.");

const projetos = {
  trilha: ["Customer-onboarding-platform", "imagens"],
  pulso: ["Automated-CRM-follow-up-on-WhatsApp", "imagens"],
  prumo: ["AI-agent-for-support-triage", "screenshots"],
  fluxo: ["End-to-end-process-automation", "screenshots"],
  mapa: ["Process-diagnostic-tool", "screenshots"],
  termometro: ["Customer-Health", "screenshots"],
  ponte: ["API-and-webhook-integration", "screenshots"],
};

const manifesto = {};
for (const [slug, [repo, pasta]] of Object.entries(projetos)) {
  const origem = join(base, repo, "docs", pasta);
  const destino = join("public", "projects", slug);
  mkdirSync(join(destino, "thumbs"), { recursive: true });
  const arquivos = readdirSync(origem).filter((f) => f.endsWith(".png")).sort();
  manifesto[slug] = [];
  for (const arq of arquivos) {
    const nome = arq.replace(/\.png$/, "");
    const img = sharp(join(origem, arq));
    const meta = await img.metadata();
    await img.clone().resize({ width: 1280, withoutEnlargement: true }).webp({ quality: 74 }).toFile(join(destino, `${nome}.webp`));
    await img.clone().resize({ width: 640, withoutEnlargement: true }).webp({ quality: 70 }).toFile(join(destino, "thumbs", `${nome}.webp`));
    manifesto[slug].push({ arquivo: nome, largura: Math.min(meta.width ?? 1280, 1280), altura: Math.round(((meta.height ?? 800) / (meta.width ?? 1280)) * Math.min(meta.width ?? 1280, 1280)) });
  }
}

// PDF de exemplo do Mapa
const pdf = join(base, "Process-diagnostic-tool", "docs", "exemplo-de-relatorio", "diagnostico-clinica-vida-plena-v2.pdf");
if (existsSync(pdf)) copyFileSync(pdf, join("public", "projects", "mapa", "diagnostico-clinica-vida-plena-v2.pdf"));

writeFileSync(join("content", "projects", "_prints.json"), JSON.stringify(manifesto, null, 1));
console.log(Object.entries(manifesto).map(([k, v]) => `${k}: ${v.length}`).join(" · "));
