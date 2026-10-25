import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { profile } from "@/content";

export function FormacaoSection() {
  return (
    <section id="formacao" aria-labelledby="formacao-titulo" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader titleId="formacao-titulo" badge="Formação" title="Onde estudo" />

        <div className="glass-card flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7a8c57]/20 text-[#4b5a30]">
              <GraduationCap className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <p className="font-mono text-xs text-neutral-600">{profile.formacao.periodo}</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold leading-tight text-[#5b6b3e]">{profile.formacao.curso}</h3>
              <p className="text-sm font-semibold text-neutral-700">{profile.formacao.instituicao}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700">{profile.destaqueAcademico}</p>
            </div>
          </div>
          <Link
            href="/projetos/erp-vortex"
            className="group inline-flex shrink-0 items-center gap-2 rounded-sm border-2 border-[#7a8c57] px-4 py-2 text-sm font-bold text-[#5b6b3e] hover:bg-[#5b6b3e] hover:text-[#fbfcf3] transition-colors"
          >
            Ver o ERP Vortex
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
