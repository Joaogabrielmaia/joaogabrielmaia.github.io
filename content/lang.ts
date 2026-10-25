export type Lang = "pt" | "en";
export const langs: Lang[] = ["pt", "en"];

/**
 * Mescla uma tradução parcial sobre o conteúdo base.
 * Objetos: mescla chave a chave. Arrays: mescla item a item, pelo índice (a tradução só traz os campos de texto).
 * Qualquer outro valor: a tradução substitui.
 */
export function deepMerge<T>(base: T, over: unknown): T {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base)) {
    if (!Array.isArray(over)) return base;
    return base.map((item, i) => (i < over.length ? deepMerge(item, over[i]) : item)) as T;
  }
  if (base && typeof base === "object") {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const [k, v] of Object.entries(over as Record<string, unknown>)) {
      out[k] = k in out ? deepMerge(out[k], v) : v;
    }
    return out as T;
  }
  return over as T;
}
