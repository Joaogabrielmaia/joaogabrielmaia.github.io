import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { profile } from "@/content";

export function AboutSummary() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader titleId="sobre-titulo" badge="Sobre" title="Quem sou e o que busco" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-card p-7">
            <p className="text-base leading-relaxed text-neutral-800">{profile.sobre[0]}</p>
            <Link
              href="/sobre"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#5b6b3e] hover:text-[#F29A0F]"
            >
              Ler mais
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
          <dl className="glass-card space-y-4 p-7 text-sm">
            <div>
              <dt className="font-display font-bold text-[#5b6b3e]">Funções</dt>
              <dd className="mt-1 text-neutral-700">{profile.busca.funcoes}</dd>
            </div>
            <div>
              <dt className="font-display font-bold text-[#5b6b3e]">Formato</dt>
              <dd className="mt-1 text-neutral-700">{profile.busca.formato}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
