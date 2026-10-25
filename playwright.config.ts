import { defineConfig } from "@playwright/test";

// Usa o Chrome instalado (channel "chrome"); em CI, troque por `npx playwright install chromium`.
export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  retries: 0,
  reporter: [["list"]],
  use: { baseURL: "http://localhost:4173", channel: "chrome", trace: "off" },
  webServer: { command: "node scripts/servir-out.mjs", url: "http://localhost:4173", reuseExistingServer: true, timeout: 30_000 },
  projects: [
    { name: "desktop", use: { viewport: { width: 1440, height: 900 } } },
    { name: "mobile", use: { viewport: { width: 390, height: 844 }, isMobile: false } },
  ],
});
