import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Download } from "lucide-react";
import { roles, roleBySlug, projectsForArea, experiencesForArea } from "@/content";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Chip } from "@/components/ui/Chip";

export function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = roleBySlug(slug);
  if (!r) return {};
  return {
    title: `${r.nome}: como me encaixo`,
    description: `${r.pitch} Evidências reais de experiência e projetos documentados para a função de ${r.nome}.`,
    alternates: { canonical: `/areas/${r.slug}` },
  };
}

const fonteRotulo: Record<string, string> = {
  "hotmart-suporte-ti": "Hotmart",
  "desenvolvedor-full-stack-autonomo": "Atuação autônoma",
  "erp-vortex": "ERP Vortex",
  vendas: "Prospecção e vendas",
};
const fonteHref: Record<string, string> = {
  "hotmart-suporte-ti": "/experiencia/hotmart-suporte-ti",
  "desenvolvedor-full-stack-autonomo": "/experiencia/desenvolvedor-full-stack-autonomo",
  "erp-vortex": "/projetos/erp-vortex",
  vendas: "/experiencia/desenvolvedor-full-stack-autonomo",
};

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = roleBySlug(slug);
  if (!r) notFound();

  const ps = projectsForArea(r.slug);
  const es = experiencesForArea(r.slug);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <Breadcrumb itens={[{ rotulo: "Início", href: "/" }, { rotulo: "Áreas", href: "/#areas" }, { rotulo: r.nomeCurto }]} voltarPara="/#areas" />

      <header className="border-y border-black/20 py-8">
        <p className="font-script text-4xl text-[#F29A0F]">como me encaixo</p>
        <h1 className="font-condensed uppercase font-normal text-5xl sm:text-7xl leading-[0.95] text-[#7a8c57]">{r.nome}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-800">{r.oQueFaz}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/#contato" className="inline-flex items-center gap-2 rounded-sm bg-[#F29A0F] px-5 py-2.5 text-sm font-bold text-[#161616] hover:bg-[#d98200]">
            Falar comigo
          </Link>
          <a href="/cv.pdf" download="Joao_Gabriel_CV.pdf" className="inline-flex items-center gap-2 rounded-sm border-2 border-[#7a8c57] px-4 py-2 text-sm font-bold text-[#5b6b3e] hover:bg-[#5b6b3e] hover:text-[#fbfcf3]">
            <Download className="h-4 w-4" aria-hidden /> Baixar CV
          </a>
        </div>
      </header>

      <section aria-labelledby="encaixe" className="py-10">
        <h2 id="encaixe" className="font-condensed uppercase font-normal text-4xl sm:text-5xl text-[#7a8c57] mb-2">Por que me encaixo</h2>
        <p className="mb-6 text-sm text-neutral-700">O que esta função valoriza: {r.oQueValoriza}</p>
        <ul className="space-y-4">
          {r.evidencias.map((ev) => (
            <li key={ev.texto} className="glass-card flex flex-col gap-2 p-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <p className="text-sm leading-relaxed text-neutral-800">{ev.texto}</p>
              <Link href={fonteHref[ev.fonte]} className="shrink-0 text-sm font-bold text-[#5b6b3e] underline-offset-2 hover:text-[#F29A0F] hover:underline">
                {fonteRotulo[ev.fonte]} →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="projetos-da-area" className="py-6">
        <h2 id="projetos-da-area" className="font-condensed uppercase font-normal text-4xl sm:text-5xl text-[#7a8c57] mb-6">Projetos</h2>
        <ul className="space-y-4">
          {ps.map(({ projeto, nivel, evidencia }) => (
            <li key={projeto.slug} className="glass-card p-5">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-condensed uppercase text-3xl leading-none text-[#5b6b3e]">
                  <Link href={`/projetos/${projeto.slug}`} className="hover:text-[#F29A0F]">{projeto.titulo}</Link>
                </h3>
                <Chip variant={nivel === "principal" ? "area" : "area-rel"}>{nivel === "principal" ? "Principal" : "Relacionado"}</Chip>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-800">{evidencia}</p>
              <Link href={`/projetos/${projeto.slug}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#161616] hover:text-[#F29A0F]">
                Ver detalhes <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {es.length > 0 && (
        <section aria-labelledby="experiencias-da-area" className="py-6">
          <h2 id="experiencias-da-area" className="font-condensed uppercase font-normal text-4xl sm:text-5xl text-[#7a8c57] mb-6">Experiências relevantes</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {es.map((e) => (
              <li key={e.slug} className="glass-card p-5">
                <p className="font-mono text-xs text-neutral-600">{e.periodo}</p>
                <h3 className="font-display text-lg font-extrabold leading-snug">{e.cargo}</h3>
                <p className="text-sm text-neutral-700">{e.organizacao}</p>
                <Link href={`/experiencia/${e.slug}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#5b6b3e] hover:text-[#F29A0F]">
                  Ver tudo que eu fazia <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="competencias-da-area" className="py-6">
        <h2 id="competencias-da-area" className="font-condensed uppercase font-normal text-4xl sm:text-5xl text-[#7a8c57] mb-4">Competências ligadas</h2>
        <ul className="flex flex-wrap gap-1.5">
          {r.competencias.map((c) => <li key={c}><Chip variant="destaque">{c}</Chip></li>)}
        </ul>
      </section>
    </div>
  );
}
