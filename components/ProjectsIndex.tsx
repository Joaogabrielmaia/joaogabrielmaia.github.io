"use client";

import { useMemo, useState, type ReactNode } from "react";
import { ui } from "@/content/ui";
import type { Lang } from "@/content/lang";

export type IndexItem = { slug: string; tipo: string; areas: string[]; node: ReactNode };

/** Filtro por competência. Os cartões chegam já renderizados pelo servidor (`node`), então o conteúdo não vai para o JavaScript do navegador. */
export function ProjectsIndex({ lang, itens, areas }: { lang: Lang; itens: IndexItem[]; areas: { slug: string; nomeCurto: string }[] }) {
  const t = ui[lang].projectsPage;
  const [area, setArea] = useState<string>("todas");

  const filtrados = useMemo(() => (area === "todas" ? itens : itens.filter((p) => p.areas.includes(area))), [area, itens]);
  const novos = filtrados.filter((p) => p.tipo === "novo");
  const outros = filtrados.filter((p) => p.tipo !== "novo");

  const botao = (valor: string, texto: string) => (
    <button
      key={valor}
      type="button"
      aria-pressed={area === valor}
      onClick={() => setArea(valor)}
      className={`rounded-full border-2 px-4 py-1.5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F29A0F] ${
        area === valor ? "border-[#5b6b3e] bg-[#5b6b3e] text-[#fbfcf3]" : "border-[#7a8c57] text-(color:--gt) hover:bg-[#7a8c57]/15"
      }`}
    >
      {texto}
    </button>
  );

  return (
    <div>
      <div role="group" aria-label={t.filter} className="flex flex-wrap gap-2">
        {botao("todas", t.all)}
        {areas.map((a) => botao(a.slug, a.nomeCurto))}
      </div>
      <p role="status" className="mt-4 text-sm text-neutral-700">
        {t.count(filtrados.length, area !== "todas" ? areas.find((a) => a.slug === area)?.nomeCurto : undefined)}
      </p>

      {novos.length > 0 && (
        <>
          <h2 className="mt-8 font-condensed uppercase text-4xl text-[#7a8c57]">{t.caseStudies}</h2>
          <p className="mt-1 max-w-2xl text-sm text-neutral-700">{t.caseStudiesDesc}</p>
          <ul className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {novos.map((p) => <li key={p.slug}>{p.node}</li>)}
          </ul>
        </>
      )}

      {outros.length > 0 && (
        <>
          <h2 className="mt-12 font-condensed uppercase text-4xl text-[#7a8c57]">{t.academic}</h2>
          <ul className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {outros.map((p) => <li key={p.slug}>{p.node}</li>)}
          </ul>
        </>
      )}
    </div>
  );
}
