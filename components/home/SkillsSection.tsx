import { Bot, Code2, Database, Handshake, Kanban, Languages, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Expandable } from "../ui/Expandable";
import { skills } from "@/content";
import type { SkillGroup } from "@/content/schema";

const icones: Record<string, LucideIcon> = {
  Desenvolvimento: Code2,
  "Dados e APIs": Database,
  "IA e automação": Bot,
  "Gestão e requisitos": Kanban,
  "Comunicação e vendas": Handshake,
  Qualidade: ShieldCheck,
  Ferramentas: Wrench,
  Idiomas: Languages,
};

function Grupo({ g }: { g: SkillGroup }) {
  const Icone = icones[g.grupo] ?? Code2;
  return (
    <li className="glass-card relative z-10 flex flex-col p-6">
      <div className="flex items-center gap-3 border-b border-[#7a8c57]/25 pb-4">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#7a8c57] text-[#fbfcf3]">
          <Icone className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="font-condensed text-3xl font-normal uppercase leading-none text-[#4b5a30]">{g.grupo}</h3>
        <span className="ml-auto rounded-full bg-[#7a8c57]/15 px-2.5 py-1 font-mono text-[11px] font-bold text-[#3f4a2b]">
          {g.itens.length}
        </span>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {g.itens.map((i) => (
          <li
            key={i}
            className="rounded-lg border border-[#7a8c57]/30 bg-[#7a8c57]/10 px-3 py-1.5 text-[13px] font-semibold leading-tight text-[#2f3a1c]"
          >
            {i}
          </li>
        ))}
      </ul>
    </li>
  );
}

export function SkillsSection() {
  const destaque = skills.filter((s) => s.destaque);
  const demais = skills.filter((s) => !s.destaque);

  return (
    <section id="competencias" aria-labelledby="competencias-titulo" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleId="competencias-titulo"
          badge="Competências"
          title="O que sei fazer"
          description="Resumo por grupo. Use “ver todas” para a lista completa."
        />

        <div className="slab slab-green">
          <Expandable
            labelMais="Ver todas as competências"
            labelMenos="Ver menos"
            extra={<ul className="grid grid-cols-1 gap-5 md:grid-cols-2">{demais.map((g) => <Grupo key={g.grupo} g={g} />)}</ul>}
          >
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">{destaque.map((g) => <Grupo key={g.grupo} g={g} />)}</ul>
          </Expandable>
        </div>
      </div>
    </section>
  );
}
