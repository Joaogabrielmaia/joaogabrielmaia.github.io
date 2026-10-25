// Captura prints de página inteira (desktop 1440 e mobile 390).
// Uso: node scripts/capturar.mjs <url-base> <pasta-de-saida> [rota1,rota2,...]
import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";

const [base, saida, rotasArg] = process.argv.slice(2);
const rotas = (rotasArg ?? "/").split(",");
mkdirSync(saida, { recursive: true });

const browser = await chromium.launch({ channel: "chrome" });
for (const [nome, viewport] of [["desktop", { width: 1440, height: 900 }], ["mobile", { width: 390, height: 844 }]]) {
  const ctx = await browser.newContext({ viewport });
  const page = await ctx.newPage();
  for (const rota of rotas) {
    await page.goto(base + rota, { waitUntil: "networkidle" });
    // percorre a página para disparar animações de entrada (whileInView)
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 160)); }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(600);
    const slug = rota === "/" ? "home" : rota.replace(/^\//, "").replace(/\//g, "-");
    await page.screenshot({ path: `${saida}/${slug}-${nome}.png`, fullPage: true });
    console.log("ok", nome, slug);
  }
  await ctx.close();
}
await browser.close();
