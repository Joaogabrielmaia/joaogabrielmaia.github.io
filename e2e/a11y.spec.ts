import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Uma página de cada tipo + as principais.
const paginas = [
  "/", "/projetos", "/sobre",
  "/projetos/trilha", "/projetos/erp-vortex", "/projetos/gerencieja",
  "/areas/implantacao", "/experiencia/hotmart-suporte-ti",
];

for (const rota of paginas) {
  test(`axe (WCAG 2.2 AA): ${rota}`, async ({ page }) => {
    await page.goto(rota);
    await page.waitForLoadState("networkidle");
    // Percorre a página para ativar animações de entrada antes de medir contraste
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(800);
    const resultado = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    const resumo = resultado.violations.map((v) => `${v.id} (${v.impact}): ${v.nodes.length} nó(s) · ${v.nodes[0]?.target.join(" ")}`);
    expect(resumo, resumo.join("\n")).toEqual([]);
  });
}
