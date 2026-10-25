import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Uma página de cada tipo, nos dois idiomas e nos dois temas.
const paginas = [
  "/", "/projetos", "/sobre", "/projetos/trilha", "/projetos/erp-vortex", "/areas/implantacao", "/experiencia/hotmart-suporte-ti",
  "/en", "/en/projects", "/en/about", "/en/projects/ponte", "/en/areas/sdr-bdr", "/en/experience/hotmart-suporte-ti",
];

for (const tema of ["light", "dark"] as const) {
  for (const rota of paginas) {
    test(`axe (WCAG 2.2 AA) · tema ${tema}: ${rota}`, async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem("tema", t), tema);
      await page.goto(rota);
      await page.waitForLoadState("networkidle");
      await expect(page.locator("html")).toHaveAttribute("data-theme", tema);
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
}
