"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import type { Project, Role } from "@/content/schema";

export function ProjectsIndex({ projetos, areas }: { projetos: Project[]; areas: Pick<Role, "slug" | "nomeCurto">[] }) {
  const [area, setArea] = useState<string>("todas");

  const filtrados = useMemo(
    () => (area === "todas" ? projetos : projetos.filter((p) => p.areas.some((a) => a.area === area))),
    [area, projetos],
  );
  const novos = filtrados.filter((p) => p.tipo === "novo");
  const outros = filtrados.filter((p) => p.tipo !== "novo");

  const botao = (valor: string, rotulo: string) => (
    <button
      key={valor}
      type="button"
      aria-pressed={area === valor}
      onClick={() => setArea(valor)}
      className={`rounded-full border-2 px-4 py-1.5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F29A0F] ${
        area === valor
          ? "border-[#5b6b3e] bg-[#5b6b3e] text-[#fbfcf3]"
          : "border-[#7a8c57] text-[#5b6b3e] hover:bg-[#7a8c57]/15"
      }`}
    >
      {rotulo}
    </button>
  );

  return (
    <div>
      <div role="group" aria-label="Filtrar por competência" className="flex flex-wrap gap-2">
        {botao("todas", "Todas")}
        {areas.map((a) => botao(a.slug, a.nomeCurto))}
      </div>
      <p role="status" className="mt-4 text-sm text-neutral-700">
        {filtrados.length} {filtrados.length === 1 ? "projeto" : "projetos"}
        {area !== "todas" && ` em ${areas.find((a) => a.slug === area)?.nomeCurto}`}
      </p>

      {novos.length > 0 && (
        <>
          <h2 className="mt-8 font-condensed uppercase text-4xl text-[#7a8c57]">Projetos de estudo de caso</h2>
          <p className="mt-1 max-w-2xl text-sm text-neutral-700">
            Empresas e dados fictícios, com documentação de ponta a ponta. Tudo roda localmente.
          </p>
          <ul className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {novos.map((p) => <li key={p.slug}><ProjectCard projeto={p} /></li>)}
          </ul>
        </>
      )}

      {outros.length > 0 && (
        <>
          <h2 className="mt-12 font-condensed uppercase text-4xl text-[#7a8c57]">Projeto acadêmico</h2>
          <ul className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {outros.map((p) => <li key={p.slug}><ProjectCard projeto={p} /></li>)}
          </ul>
        </>
      )}
    </div>
  );
}
