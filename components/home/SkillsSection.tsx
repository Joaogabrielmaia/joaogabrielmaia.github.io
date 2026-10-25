import { SectionHeader } from "../ui/SectionHeader";
import { Expandable } from "../ui/Expandable";
import { Chip } from "../ui/Chip";
import { skills } from "@/content";
import type { SkillGroup } from "@/content/schema";

function Grupo({ g }: { g: SkillGroup }) {
  return (
    <li className="glass-card relative z-10 p-6">
      <h3 className="font-condensed uppercase font-normal text-2xl leading-none text-[#5b6b3e]">{g.grupo}</h3>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {g.itens.map((i) => (
          <li key={i}><Chip>{i}</Chip></li>
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
