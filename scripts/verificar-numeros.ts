// Confere que cada número publicado (campo `confere`) aparece no README do repositório clonado.
// Uso: npx tsx scripts/verificar-numeros.ts <pasta-com-os-clones>
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { projects } from "../content";

const base = process.argv[2];
if (!base) {
  console.error("Informe a pasta com os clones dos repositórios.");
  process.exit(2);
}

let falhas = 0;
for (const p of projects) {
  if (!p.repoNome) continue;
  const caminho = join(base, p.repoNome, "README.md");
  if (!existsSync(caminho)) {
    console.error(`✗ ${p.slug}: README não encontrado em ${caminho}`);
    falhas++;
    continue;
  }
  const readme = readFileSync(caminho, "utf8");
  for (const n of p.numeros) {
    if (!n.confere) continue;
    const ok = readme.includes(n.confere);
    console.log(`${ok ? "✓" : "✗"} ${p.slug} · ${n.rotulo}: "${n.confere}"`);
    if (!ok) falhas++;
  }
}
if (falhas) {
  console.error(`\n${falhas} número(s) sem correspondência no README.`);
  process.exit(1);
}
console.log("\nTodos os números conferem com os READMEs.");
