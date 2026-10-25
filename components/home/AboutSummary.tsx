import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { profile, roles } from "@/content";

export function AboutSummary() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader titleId="sobre-titulo" badge="Sobre" title="Quem sou" />
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
          <div className="glass-card p-7">
            <h3 className="font-display font-bold text-[#5b6b3e]">Competências</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {roles.map((r) => (
                <li key={r.slug}>
                  <Link href={`/areas/${r.slug}`} className="inline-flex rounded-full border border-[#7a8c57]/40 bg-[#7a8c57]/10 px-3 py-1.5 text-xs font-semibold text-[#34401f] hover:bg-[#7a8c57] hover:text-[#fbfcf3] transition-colors">
                    {r.nomeCurto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
