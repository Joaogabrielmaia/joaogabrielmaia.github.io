import type { Lang } from "./lang";

/** Canonical do idioma atual e hreflang para o outro. Caminhos absolutos a partir da raiz do site. */
export function alternates(pt: string, en: string, lang: Lang) {
  return {
    canonical: lang === "pt" ? pt : en,
    languages: { "pt-BR": pt, en, "x-default": pt },
  };
}
