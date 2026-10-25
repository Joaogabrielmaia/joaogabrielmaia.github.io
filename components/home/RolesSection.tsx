import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Chip } from "../ui/Chip";
import { roles, projectsForArea } from "@/content";

export function RolesSection() {
  return (
    <section id="areas" aria-labelledby="areas-titulo" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleId="areas-titulo"
          badge="Áreas"
          title="Em que tenho experiência"
          description="Oito competências que apliquei em projetos e no trabalho. Cada uma tem uma página com os projetos e as experiências ligados a ela."
        />
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => {
            const principais = projectsForArea(r.slug).filter((p) => p.nivel === "principal").slice(0, 3);
            return (
              <li key={r.slug}>
                <article className="glass-card group relative flex h-full flex-col gap-3 p-6">
                  <h3 className="font-condensed uppercase font-normal text-3xl leading-none text-[#5b6b3e]">
                    <Link
                      href={`/areas/${r.slug}`}
                      className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:ring-4 focus-visible:after:ring-[#F29A0F] focus-visible:after:rounded-[2rem]"
                    >
                      {r.nome}
                    </Link>
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-700">{r.pitch}</p>
                  {principais.length > 0 && (
                    <div className="flex flex-wrap gap-1.5" aria-label="Projetos">
                      {principais.map((p) => (
                        <Chip key={p.projeto.slug} variant="destaque">{p.projeto.titulo}</Chip>
                      ))}
                    </div>
                  )}
                  <span aria-hidden className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-bold text-[#161616]">
                    Ver detalhes
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
