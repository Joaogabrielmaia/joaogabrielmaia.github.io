import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { ProjectCard } from "../ProjectCard";
import { featuredProjects } from "@/content";

export function FeaturedProjects() {
  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleId="projetos-titulo"
          badge="Projetos"
          title="Projetos em destaque"
          description="Sistemas completos, do discovery aos testes, com documentação aberta no GitHub. São casos de estudo: empresas e dados fictícios, tudo rodando localmente."
        />
        <ul className="slab grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects().map((p) => (
            <li key={p.slug} className="relative z-10">
              <ProjectCard projeto={p} />
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            href="/projetos"
            className="group inline-flex items-center gap-2 rounded-sm bg-[#F29A0F] px-6 py-3 text-sm font-bold text-[#161616] hover:bg-[#d98200] transition-colors"
          >
            Ver todos os projetos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
