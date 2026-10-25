import type { Metadata } from "next";
import Link from "next/link";
import { profile, roles } from "@/content";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Quem sou, competências, formação, idiomas e como trabalho.",
  alternates: { canonical: "/sobre" },
};

function Bloco({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section aria-label={titulo} className="py-6">
      <h2 className="font-condensed uppercase font-normal text-4xl sm:text-5xl text-[#7a8c57] mb-4">{titulo}</h2>
      {children}
    </section>
  );
}

export default function SobrePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <Breadcrumb itens={[{ rotulo: "Início", href: "/" }, { rotulo: "Sobre" }]} voltarPara="/#sobre" />
      <header className="border-y border-black/20 py-8">
        <h1 className="font-condensed uppercase font-normal text-6xl sm:text-8xl leading-[0.95] text-[#7a8c57]">Sobre</h1>
        <p className="mt-4 font-display text-xl font-bold text-neutral-800">{profile.nomeCompleto}</p>
      </header>

      <Bloco titulo="Quem sou">
        <div className="space-y-4 text-base leading-relaxed text-neutral-800">
          {profile.sobre.map((s) => <p key={s}>{s}</p>)}
          <p>{profile.destaqueAcademico} <Link href="/projetos/erp-vortex" className="font-bold text-[#5b6b3e] underline underline-offset-2 hover:text-[#F29A0F]">Ver o ERP Vortex</Link>.</p>
        </div>
      </Bloco>

      <Bloco titulo="Competências">
        <ul className="flex flex-wrap gap-2">
          {roles.map((r) => (
            <li key={r.slug}>
              <Link href={`/areas/${r.slug}`} className="inline-flex rounded-full border border-[#7a8c57]/40 bg-[#7a8c57]/10 px-4 py-2 text-sm font-semibold text-[#34401f] hover:bg-[#7a8c57] hover:text-[#fbfcf3] transition-colors">
                {r.nome}
              </Link>
            </li>
          ))}
        </ul>
      </Bloco>

      <Bloco titulo="Como trabalho">
        <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-neutral-800">
          {profile.comoTrabalho.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </Bloco>

      <Bloco titulo="Formação e idiomas">
        <ul className="space-y-2 text-base text-neutral-800">
          <li><strong>{profile.formacao.curso}</strong>, {profile.formacao.instituicao} ({profile.formacao.periodo})</li>
          {profile.idiomas.map((i) => <li key={i}>{i}</li>)}
        </ul>
      </Bloco>

      <Bloco titulo="Onde me encontrar">
        <ul className="flex flex-wrap gap-3">
          <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-sm border-2 border-[#7a8c57] px-4 py-2 text-sm font-bold text-[#5b6b3e] hover:bg-[#5b6b3e] hover:text-[#fbfcf3]">LinkedIn</a></li>
          <li><a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-sm border-2 border-[#7a8c57] px-4 py-2 text-sm font-bold text-[#5b6b3e] hover:bg-[#5b6b3e] hover:text-[#fbfcf3]">GitHub</a></li>
          <li><Link href="/#contato" className="inline-flex rounded-sm bg-[#F29A0F] px-4 py-2 text-sm font-bold text-[#161616] hover:bg-[#d98200]">Falar comigo</Link></li>
        </ul>
      </Bloco>
    </div>
  );
}
