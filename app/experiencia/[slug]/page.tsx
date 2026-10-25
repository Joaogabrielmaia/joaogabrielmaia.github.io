import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { experiences, experienceBySlug, roleBySlug } from "@/content";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Chip } from "@/components/ui/Chip";
import { Toc } from "@/components/ui/Toc";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const e = experienceBySlug(slug);
  if (!e) return {};
  return {
    title: `${e.cargo} · ${e.organizacao}`,
    description: e.resumo,
    alternates: { canonical: `/experiencia/${e.slug}` },
  };
}

function Secao({ id, titulo, children }: { id: string; titulo: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-t`} className="scroll-mt-28 py-8">
      <h2 id={`${id}-t`} className="font-condensed uppercase font-normal text-4xl sm:text-5xl leading-none text-[#7a8c57] mb-6">{titulo}</h2>
      {children}
    </section>
  );
}

export default async function ExperienciaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = experienceBySlug(slug);
  if (!e) notFound();

  const secoes = [
    { id: "fazia", rotulo: e.atual ? "Como eu trabalho" : "O que eu fazia" },
    ...(e.historias.length ? [{ id: "historias", rotulo: e.atual ? "Exemplo de decisão" : "Três histórias" }] : []),
    ...(e.casos.length ? [{ id: "casos", rotulo: "Casos" }] : []),
    { id: "ferramentas", rotulo: "Ferramentas" },
    { id: "aprendi", rotulo: "O que aprendi" },
    { id: "areas", rotulo: "Áreas relacionadas" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <Breadcrumb itens={[{ rotulo: "Início", href: "/" }, { rotulo: "Experiência", href: "/#experiencia" }, { rotulo: e.organizacao }]} voltarPara="/#experiencia" />

      <header className="border-y border-black/20 py-8">
        <p className="font-mono text-sm text-neutral-600">{e.periodo}{e.local ? ` · ${e.local}` : ""}</p>
        <h1 className="mt-2 font-condensed uppercase font-normal text-5xl sm:text-7xl leading-[0.95] text-[#7a8c57]">{e.cargo}</h1>
        <p className="mt-2 font-display text-xl font-bold text-neutral-800">{e.organizacao}</p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-800">{e.resumo}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Destaques">
          {e.destaques.map((d) => <li key={d}><Chip variant="destaque">{d}</Chip></li>)}
        </ul>
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
        <Toc itens={secoes} />
        <div className="min-w-0 max-w-4xl">
          <Secao id="fazia" titulo={e.atual ? "Como eu trabalho" : "O que eu fazia"}>
            <div className="space-y-6">
              {e.secoes.map((s) => (
                <div key={s.titulo} className="glass-card p-6">
                  <h3 className="font-display text-lg font-extrabold text-[#161616]">{s.titulo}</h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-neutral-800">
                    {s.itens.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Secao>

          {e.historias.length > 0 && (
            <Secao id="historias" titulo={e.atual ? "Exemplo de decisão" : "Três histórias"}>
              <ul className="grid gap-5 md:grid-cols-2">
                {e.historias.map((h) => (
                  <li key={h.titulo} className="glass-card p-6">
                    <h3 className="font-display text-lg font-extrabold text-[#161616]">{h.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-800">{h.texto}</p>
                  </li>
                ))}
              </ul>
            </Secao>
          )}

          {e.casos.length > 0 && (
            <Secao id="casos" titulo="Casos">
              <ul className="grid gap-5 md:grid-cols-2">
                {e.casos.map((c) => (
                  <li key={c.titulo} className="glass-card p-6">
                    <h3 className="font-display text-lg font-extrabold text-[#161616]">{c.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-800">{c.texto}</p>
                  </li>
                ))}
              </ul>
              {e.naoPublicar && <p className="mt-4 text-xs text-neutral-600">{e.naoPublicar}</p>}
            </Secao>
          )}

          <Secao id="ferramentas" titulo="Ferramentas">
            <ul className="flex flex-wrap gap-1.5">
              {e.ferramentas.map((f) => <li key={f}><Chip>{f}</Chip></li>)}
            </ul>
            {!e.casos.length && e.naoPublicar && <p className="mt-4 text-xs text-neutral-600">{e.naoPublicar}</p>}
          </Secao>

          <Secao id="aprendi" titulo="O que aprendi">
            <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-neutral-800">
              {e.aprendi.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </Secao>

          <Secao id="areas" titulo="Áreas relacionadas">
            <ul className="flex flex-wrap gap-2">
              {e.areas.map((a) => (
                <li key={a}>
                  <Link href={`/areas/${a}`} className="inline-flex rounded-full border-2 border-[#7a8c57] px-4 py-1.5 text-sm font-bold text-[#5b6b3e] hover:bg-[#5b6b3e] hover:text-[#fbfcf3]">
                    {roleBySlug(a)?.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </Secao>
        </div>
      </div>
    </div>
  );
}
