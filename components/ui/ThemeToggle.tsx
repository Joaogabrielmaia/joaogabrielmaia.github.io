"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Tema = "light" | "dark";

/** Alterna entre o tema claro e o escuro e lembra a escolha (localStorage). O script inicial do layout aplica o tema antes da pintura. */
const ouvintes = new Set<() => void>();
const assinar = (fn: () => void) => {
  ouvintes.add(fn);
  return () => ouvintes.delete(fn);
};
const avisar = () => ouvintes.forEach((fn) => fn());
const lerTema = (): Tema => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

export function ThemeToggle({ labelToDark, labelToLight }: { labelToDark: string; labelToLight: string }) {
  // O atributo data-theme do <html> é a fonte da verdade (definido pelo script inicial e por este botão).
  const tema = useSyncExternalStore(assinar, lerTema, () => "light" as Tema);

  const alternar = () => {
    const novo: Tema = tema === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = novo;
    try {
      localStorage.setItem("tema", novo);
    } catch {
      /* navegação privada: segue sem lembrar */
    }
    avisar();
  };

  const escuro = tema === "dark";
  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={escuro ? labelToLight : labelToDark}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#7a8c57] text-(color:--gt) transition-colors hover:bg-[#5b6b3e] hover:text-[#fbfcf3] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F29A0F]"
    >
      {escuro ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />}
    </button>
  );
}
