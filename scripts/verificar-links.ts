// Confere que todo link externo publicado responde 200 (GitHub, demos, credenciais).
// Uso: npx tsx scripts/verificar-links.ts
import { projects, profile, certifications } from "../content";

const urls = new Set<string>([profile.github, profile.linkedin]);
for (const p of projects) {
  if (p.repositorio) urls.add(p.repositorio);
  if (p.demo) urls.add(p.demo);
  for (const d of p.documentos) urls.add(d.url);
  for (const r of p.roteiroLeitura) urls.add(r.url);
  for (const d of p.decisoes) if (d.adr) urls.add(d.adr);
}
for (const c of certifications) if (c.urlCredencial) urls.add(c.urlCredencial);

// LinkedIn bloqueia robôs (999/403): é conferido à mão e só avisado.
// Udemy bloqueia robôs (403) e o Coursera responde 200 a qualquer código: também são conferidos à mão.
const aviso = (u: string) => /linkedin\.com|udemy\.com|coursera\.org/.test(u);

async function checar(url: string) {
  for (const metodo of ["HEAD", "GET"] as const) {
    try {
      const r = await fetch(url, { method: metodo, redirect: "follow", signal: AbortSignal.timeout(20000), headers: { "user-agent": "verificar-links/1.0" } });
      if (r.ok) return { url, status: r.status };
      if (metodo === "GET") return { url, status: r.status };
    } catch (e) {
      if (metodo === "GET") return { url, status: 0, erro: String(e) };
    }
  }
  return { url, status: 0 };
}

async function main() {
  const lista = [...urls];
  const resultados: { url: string; status: number; erro?: string }[] = [];
  for (let i = 0; i < lista.length; i += 8) {
    resultados.push(...(await Promise.all(lista.slice(i, i + 8).map(checar))));
  }

  let falhas = 0;
  for (const r of resultados) {
    const ok = r.status === 200;
    if (!ok && aviso(r.url)) { console.log(`! ${r.status} ${r.url} (conferir à mão)`); continue; }
    if (!ok) falhas++;
    console.log(`${ok ? "✓" : "✗"} ${r.status} ${r.url}${r.erro ? ` · ${r.erro}` : ""}`);
  }
  console.log(`\n${resultados.length} links verificados, ${falhas} com problema.`);
  process.exit(falhas ? 1 : 0);

}

main();
