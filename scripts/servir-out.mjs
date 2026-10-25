// Servidor estático mínimo para a pasta out/ (imita o GitHub Pages: /rota -> rota.html).
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, normalize } from "node:path";

const raiz = join(process.cwd(), "out");
const porta = Number(process.env.PORT ?? 4173);
const tipos = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml", ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".ico": "image/x-icon", ".pdf": "application/pdf", ".txt": "text/plain", ".xml": "application/xml", ".woff2": "font/woff2" };

async function achar(caminho) {
  for (const c of [caminho, `${caminho}.html`, join(caminho, "index.html")]) {
    try { if ((await stat(c)).isFile()) return c; } catch {}
  }
  return null;
}

createServer(async (req, res) => {
  const url = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const alvo = await achar(normalize(join(raiz, url)));
  if (!alvo || !alvo.startsWith(raiz)) {
    const nf = await achar(join(raiz, "404"));
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    return res.end(nf ? await readFile(nf) : "404");
  }
  res.writeHead(200, { "content-type": tipos[extname(alvo)] ?? "application/octet-stream" });
  res.end(await readFile(alvo));
}).listen(porta, () => console.log(`http://localhost:${porta}`));
