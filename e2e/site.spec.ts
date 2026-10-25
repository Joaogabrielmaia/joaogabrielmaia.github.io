import { test, expect } from "@playwright/test";

const rotas = [
  "/", "/projetos", "/sobre",
  "/projetos/trilha", "/projetos/ponte", "/projetos/erp-vortex",
  "/areas/implantacao", "/areas/sdr-bdr",
  "/experiencia/hotmart-suporte-ti", "/experiencia/desenvolvedor-full-stack-autonomo",
  "/en", "/en/projects", "/en/about", "/en/projects/trilha", "/en/areas/implantacao", "/en/experience/hotmart-suporte-ti",
];

test.describe("fluxos principais", () => {
  test("home → cartão de projeto → página → Voltar retorna à posição da home", async ({ page }) => {
    await page.goto("/");
    const secao = page.locator("#projetos");
    await secao.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    const antes = await page.evaluate(() => window.scrollY);
    expect(antes).toBeGreaterThan(500);

    await page.getByRole("link", { name: "Trilha", exact: true }).first().click();
    await expect(page.getByRole("heading", { level: 1, name: "Trilha" })).toBeVisible();
    await expect(page.getByText("Sobre este cenário").first()).toBeVisible();

    await page.getByRole("link", { name: "Voltar" }).click();
    await expect(page).toHaveURL(/\/(#projetos)?$/);
    await page.waitForTimeout(800);
    const depois = await page.evaluate(() => window.scrollY);
    expect(depois).toBeGreaterThan(500); // voltou para a região dos projetos, não para o topo
    await expect(page.locator("#projetos")).toBeInViewport();
  });

  test("home → experiência → “Ver tudo que eu fazia”", async ({ page }) => {
    await page.goto("/#experiencia");
    await page.getByRole("link", { name: "Ver tudo que eu fazia" }).first().click();
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Desenvolvedor Full Stack|Aprendiz/);
  });

  test("filtro por área em /projetos", async ({ page }) => {
    await page.goto("/projetos");
    const total = await page.getByRole("status").innerText();
    await page.getByRole("button", { name: "Suporte e adoção" }).click();
    const filtrado = await page.getByRole("status").innerText();
    expect(filtrado).not.toBe(total);
    await expect(page.getByRole("link", { name: "Termômetro" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Fluxo", exact: true })).toHaveCount(0);
  });

  test("“ver todas” de certificações e competências expande no lugar", async ({ page }) => {
    await page.goto("/#certificacoes");
    const botao = page.locator("#certificacoes button[aria-expanded]");
    await expect(botao).toHaveAttribute("aria-expanded", "false");
    await botao.click();
    await expect(botao).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByRole("heading", { name: "Git e GitHub: repositório, commit e versões" })).toBeVisible();

    await page.goto("/#competencias");
    const b2 = page.getByRole("button", { name: "Ver todas as competências" });
    await b2.click();
    await expect(page.getByRole("heading", { name: "Ferramentas" }).first()).toBeVisible();
  });

  test("galeria abre em diálogo e fecha com Esc", async ({ page }) => {
    await page.goto("/projetos/trilha#telas");
    await page.getByRole("button", { name: /Painel: o que está atrasado/ }).click();
    await expect(page.getByRole("dialog", { name: "Visualização do print" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toBeHidden();
  });

  test("navegação só por teclado: pular para o conteúdo e alternar o expandir", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Pular para o conteúdo" });
    await expect(skip).toBeFocused();
    await page.keyboard.press("Enter");
    await page.goto("/#certificacoes");
    const botao = page.locator("#certificacoes button[aria-expanded]");
    await botao.focus();
    await page.keyboard.press("Enter");
    await expect(botao).toHaveAttribute("aria-expanded", "true");
    await expect(botao).toBeFocused();
    await page.keyboard.press("Space");
    await expect(botao).toHaveAttribute("aria-expanded", "false");
  });
});

test.describe("sem rolagem horizontal em 360 px", () => {
  test.use({ viewport: { width: 360, height: 740 } });
  for (const rota of rotas) {
    test(`sem rolagem horizontal: ${rota}`, async ({ page }) => {
      await page.goto(rota);
      await page.waitForLoadState("networkidle");
      const { sw, iw } = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
      expect(sw, `scrollWidth ${sw} > largura ${iw}`).toBeLessThanOrEqual(iw);
      // O body tem overflow-x-hidden, que pode esconder estouros: procura elementos que passam da borda
      const estourando = await page.evaluate(() => {
        const iw = window.innerWidth;
        const fora: string[] = [];
        const contidoEmRolagem = (el: Element) => {
          for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
            const o = getComputedStyle(p).overflowX;
            if (o === "auto" || o === "scroll" || o === "hidden") return true;
          }
          return false;
        };
        document.querySelectorAll("main *, header *, footer *").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.width > 0 && r.right > iw + 1 && !contidoEmRolagem(el) && getComputedStyle(el).position !== "fixed") {
            fora.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 40)} → ${Math.round(r.right)}px`);
          }
        });
        return fora.slice(0, 5);
      });
      expect(estourando, "elementos além da borda").toEqual([]);
    });
  }
});

test("menu do celular abre e navega", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await page.getByRole("dialog", { name: "Menu" }).getByRole("link", { name: "Projetos" }).click();
  await expect(page).toHaveURL(/\/projetos$/);
});

test.describe("idioma e tema", () => {
  test("alternar idioma mantém a página (PT ↔ EN)", async ({ page }) => {
    await page.goto("/projetos/trilha");
    await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
    await page.getByRole("link", { name: /Read this page in English/ }).click();
    await expect(page).toHaveURL(/\/en\/projects\/trilha$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.getByRole("heading", { level: 1, name: "Trilha" })).toBeVisible();
    await expect(page.getByText("About this scenario")).toBeVisible();
    await expect(page.getByText("A platform to track customer onboarding")).toBeVisible();
    await page.getByRole("link", { name: /Ler esta página em português/ }).click();
    await expect(page).toHaveURL(/\/projetos\/trilha$/);
  });

  test("home em inglês mostra os textos traduzidos", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByRole("link", { name: "View projects" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "What I have experience in" })).toBeVisible();
    await expect(page.getByText("Where I study")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Let's talk" })).toBeVisible();
  });

  test("tema escuro: alterna, aplica as cores e lembra a escolha ao recarregar", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await page.getByRole("button", { name: "Mudar para o tema escuro" }).click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    const fundo = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(fundo).toBe("rgb(22, 23, 24)");
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await page.getByRole("button", { name: "Mudar para o tema claro" }).click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  });

  test("sem escolha salva, segue a preferência do sistema", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/en");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  });
});
