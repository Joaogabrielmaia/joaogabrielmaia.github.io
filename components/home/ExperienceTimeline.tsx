import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Chip } from "../ui/Chip";
import { experiences } from "@/content";

export function ExperienceTimeline() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-titulo" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleId="experiencia-titulo"
          badge="Experiência"
          title="Onde já trabalhei"
          description="Do suporte de TI na Hotmart ao trabalho como desenvolvedor full stack."
        />
        <ol className="relative space-y-10 border-l-2 border-[#7a8c57] pl-6 sm:pl-10">
          {experiences.map((e) => (
            <li key={e.slug} className="relative">
              <span aria-hidden className="absolute -left-[2.2rem] sm:-left-[3.2rem] top-1.5 h-4 w-4 rounded-full border-4 border-[#dcdcda] bg-[#F29A0F]" />
              <p className="font-mono text-xs text-neutral-600">{e.periodo}</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold leading-tight text-[#5b6b3e]">{e.cargo}</h3>
              <p className="text-sm font-semibold text-neutral-700">{e.organizacao}</p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700 line-clamp-2">{e.resumo}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Destaques">
                {e.destaques.slice(0, 3).map((d) => (
                  <li key={d}><Chip variant="destaque">{d}</Chip></li>
                ))}
              </ul>
              <Link
                href={`/experiencia/${e.slug}`}
                className="group mt-4 inline-flex items-center gap-2 rounded-sm border-2 border-[#7a8c57] px-4 py-2 text-sm font-bold text-[#5b6b3e] hover:bg-[#5b6b3e] hover:text-[#fbfcf3] transition-colors"
              >
                Ver tudo que eu fazia
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
