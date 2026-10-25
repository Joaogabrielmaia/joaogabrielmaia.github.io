"use client";

import { useEffect, useState } from "react";

type Item = { id: string; rotulo: string };

/** Índice "Nesta página": lateral fixo no desktop, recolhido (details) no celular. Destaca a seção visível. */
export function Toc({ itens }: { itens: Item[] }) {
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
                  ? "border-[#7a8c57]/40 bg-[#fbfcf3] font-bold text-[#161616] shadow-[0_8px_16px_-12px_rgba(0,0,0,0.45)]"
                  : "border-transparent text-neutral-700 hover:border-[#7a8c57]/30 hover:bg-white/60 hover:text-[#161616]"
              }`}
            >
              <span
                aria-hidden
                className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold transition-colors ${
                  atual ? "bg-[#F29A0F] text-[#161616]" : "bg-[#7a8c57]/20 text-[#3f4a2b] group-hover:bg-[#7a8c57] group-hover:text-[#fbfcf3]"
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
        <summary className="cursor-pointer font-display font-bold text-[#5b6b3e]">Nesta página</summary>
        <nav aria-label="Nesta página" className="pt-3">{lista}</nav>
      </details>
      <nav aria-label="Nesta página" className="sticky top-28 hidden self-start lg:block">
        <p className="mb-3 font-display font-bold text-[#5b6b3e]">Nesta página</p>
        {lista}
      </nav>
    </>
  );
}
