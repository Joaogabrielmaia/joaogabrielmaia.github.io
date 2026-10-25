"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Lista de links em cartões que entram com fade e deslize, em sequência, conforme aparecem na tela
 * (IntersectionObserver). Sem JavaScript, os itens já aparecem no HTML.
 */
export function RevealList({
  itens,
  numerada = false,
  colunas = 1,
  novaAba,
}: {
  itens: { rotulo: string; url: string }[];
  numerada?: boolean;
  colunas?: 1 | 2;
  novaAba: string;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [pronto, setPronto] = useState(false);
  const [visiveis, setVisiveis] = useState<Set<number>>(new Set());

  useEffect(() => {
    const lista = ref.current;
    if (!lista) return;
    setPronto(true);
    let lote = 0;
    const obs = new IntersectionObserver(
      (entradas) => {
        lote = 0;
        entradas.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = Number((e.target as HTMLElement).dataset.i);
          const atraso = lote++ * 70;
          setTimeout(() => setVisiveis((v) => new Set(v).add(i)), atraso);
          obs.unobserve(e.target);
        });
      },
      { threshold: 0.15 },
    );
    lista.querySelectorAll("li").forEach((li) => obs.observe(li));
    return () => obs.disconnect();
  }, []);

  const Lista = numerada ? "ol" : "ul";

  return (
    <Lista ref={ref as React.RefObject<never>} className={`grid gap-3 ${colunas === 2 ? "sm:grid-cols-2" : ""}`}>
      {itens.map((it, i) => (
        <li
          key={it.url + it.rotulo}
          data-i={i}
          className={`transition-[opacity,transform] duration-500 ease-out ${
            pronto && !visiveis.has(i) ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <a
            href={it.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-[#7a8c57]/25 bg-(color:--card) px-4 py-3 text-sm font-semibold leading-snug text-(color:--gt2) no-underline shadow-[0_8px_16px_-12px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-0.5 hover:border-[#F29A0F] hover:shadow-[0_12px_20px_-12px_rgba(0,0,0,0.5)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F29A0F]"
          >
            {numerada && (
              <span aria-hidden className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7a8c57] font-mono text-[11px] font-bold text-[#fbfcf3]">
                {String(i + 1).padStart(2, "0")}
              </span>
            )}
            <span className="flex-1">{it.rotulo.replace(/^\d+\.\s*/, "")}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-[#7a8c57] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F29A0F]" aria-hidden />
            <span className="sr-only">{novaAba}</span>
          </a>
        </li>
      ))}
    </Lista>
  );
}
