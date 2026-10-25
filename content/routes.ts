import type { Lang } from "./lang";

/** Rotas de cada idioma. O português mantém as URLs originais; o inglês fica em /en. */
export function routes(lang: Lang) {
  const p = lang === "pt";
  const base = p ? "" : "/en";
  return {
    home: p ? "/" : "/en",
    areas: `${base}/#areas`,
    experience: `${base}/#experiencia`,
    contact: `${base}/#contato`,
    projectsAnchor: `${base}/#projetos`,
    aboutAnchor: `${base}/#sobre`,
    projects: p ? "/projetos" : "/en/projects",
    project: (slug: string) => (p ? `/projetos/${slug}` : `/en/projects/${slug}`),
    experiencePage: (slug: string) => (p ? `/experiencia/${slug}` : `/en/experience/${slug}`),
    area: (slug: string) => (p ? `/areas/${slug}` : `/en/areas/${slug}`),
    about: p ? "/sobre" : "/en/about",
  };
}

const pares: [string, string][] = [
  ["/projetos", "/projects"],
  ["/experiencia", "/experience"],
  ["/sobre", "/about"],
  ["/areas", "/areas"],
];

/** Caminho equivalente no outro idioma (mantém o slug e a âncora). */
export function switchLangPath(pathname: string, to: Lang): string {
  const limpo = pathname.replace(/\/$/, "") || "/";
  if (to === "en") {
    if (limpo === "/en" || limpo.startsWith("/en/")) return limpo;
    if (limpo === "/") return "/en";
    for (const [pt, en] of pares) if (limpo === pt || limpo.startsWith(pt + "/")) return "/en" + en + limpo.slice(pt.length);
    return "/en";
  }
  if (!(limpo === "/en" || limpo.startsWith("/en/"))) return limpo;
  const resto = limpo.slice(3) || "/";
  if (resto === "/") return "/";
  for (const [pt, en] of pares) if (resto === en || resto.startsWith(en + "/")) return pt + resto.slice(en.length);
  return "/";
}
