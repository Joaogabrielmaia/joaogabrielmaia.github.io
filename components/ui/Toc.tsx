"use client";

import { useEffect, useState } from "react";

type Item = { id: string; rotulo: string };

/** Índice lateral (desktop) ou recolhido (celular). Destaca a seção que está na tela. */
export function Toc({ itens, titulo }: { itens: Item[]; titulo: string }) {
  const [ativo, setAtivo] = useState(itens[0]?.id);

  useEffect(() => {
    const secoes = itens.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entradas) => {
        const visivel = entradas.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visivel) setAtivo(visivel.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    secoes.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [itens]);

  const lista = (
    <ol className="space-y-1">
      {itens.map((i, k) => {
        const atual = ativo === i.id;
        return (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              aria-current={atual ? "location" : undefined}
              className={`group flex items-center gap-3 rounded-xl border px-3 py-2 text-sm no-underline transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F29A0F] ${
                atual
                  ? "border-[#7a8c57]/40 bg-(color:--card) font-bold text-(color:--ink) shadow-[0_8px_16px_-12px_rgba(0,0,0,0.45)]"
                  : "border-transparent text-neutral-700 hover:border-[#7a8c57]/30 hover:bg-white/60 hover:text-(color:--ink)"
              }`}
            >
              <span
                aria-hidden
                className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold transition-colors ${
                  atual ? "bg-[#F29A0F] text-[#161616]" : "bg-[#7a8c57]/20 text-(color:--gt2) group-hover:bg-[#7a8c57] group-hover:text-[#fbfcf3]"
                }`}
              >
                {String(k + 1).padStart(2, "0")}
              </span>
              {i.rotulo}
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      <details className="lg:hidden mb-8 rounded-2xl border border-white bg-white/70 px-5 py-3">
        <summary className="cursor-pointer font-display font-bold text-(color:--gt)">{titulo}</summary>
        <nav aria-label={titulo} className="pt-3">{lista}</nav>
      </details>
      <nav aria-label={titulo} className="sticky top-28 hidden self-start lg:block">
        <p className="mb-3 font-display font-bold text-(color:--gt)">{titulo}</p>
        {lista}
      </nav>
    </>
  );
}
