import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import { ui } from "@/content/ui";
import { routes } from "@/content/routes";
import { alternates } from "@/content/seo";
import type { Lang } from "@/content/lang";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Chip } from "@/components/ui/Chip";
import { Toc } from "@/components/ui/Toc";

export function experienceMetadata(lang: Lang, slug: string): Metadata {
  const e = getContent(lang).experienceBySlug(slug);
  if (!e) return {};
  return {
    title: `${e.cargo} · ${e.organizacao}`,
    description: e.resumo,
    alternates: alternates(`/experiencia/${slug}`, `/en/experience/${slug}`, lang),
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

export function ExperiencePage({ lang, slug }: { lang: Lang; slug: string }) {
  const c = getContent(lang);
  const t = ui[lang].experiencePage;
  const r = routes(lang);
  const e = c.experienceBySlug(slug);
  if (!e) notFound();

  const faziaTitulo = e.atual ? t.how : t.did;
  const histTitulo = e.atual ? t.decisionExample : t.stories;
  const secoes = [
    { id: "fazia", rotulo: faziaTitulo },
    ...(e.historias.length ? [{ id: "historias", rotulo: histTitulo }] : []),
    ...(e.casos.length ? [{ id: "casos", rotulo: t.cases }] : []),
    { id: "ferramentas", rotulo: t.tools },
    { id: "aprendi", rotulo: t.learned },
    { id: "areas", rotulo: t.relatedAreas },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <Breadcrumb
        itens={[{ rotulo: t.home, href: r.home }, { rotulo: t.experience, href: r.experience }, { rotulo: e.organizacao }]}
        voltarPara={r.experience}
        ariaLabel={ui[lang].project.here}
        voltar={ui[lang].project.back}
      />

      <header className="border-y border-black/20 py-8">
        <p className="font-mono text-sm text-neutral-600">{e.periodo}{e.local ? ` · ${e.local}` : ""}</p>
        <h1 className="mt-2 font-condensed uppercase font-normal text-5xl sm:text-7xl leading-[0.95] text-[#7a8c57]">{e.cargo}</h1>
        <p className="mt-2 font-display text-xl font-bold text-neutral-800">{e.organizacao}</p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-800">{e.resumo}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={t.highlights}>
          {e.destaques.map((d) => <li key={d}><Chip variant="destaque">{d}</Chip></li>)}
        </ul>
      </header>

      <div className="mt-8 lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
        <Toc itens={secoes} titulo={ui[lang].project.onThisPage} />
        <div className="min-w-0 max-w-4xl">
          <Secao id="fazia" titulo={faziaTitulo}>
            <div className="space-y-6">
              {e.secoes.map((s) => (
                <div key={s.titulo} className="glass-card p-6">
                  <h3 className="font-display text-lg font-extrabold text-(color:--ink)">{s.titulo}</h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-neutral-800">
                    {s.itens.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Secao>

          {e.historias.length > 0 && (
            <Secao id="historias" titulo={histTitulo}>
              <ul className="grid gap-5 md:grid-cols-2">
                {e.historias.map((h) => (
                  <li key={h.titulo} className="glass-card p-6">
                    <h3 className="font-display text-lg font-extrabold text-(color:--ink)">{h.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-800">{h.texto}</p>
                  </li>
                ))}
              </ul>
            </Secao>
          )}

          {e.casos.length > 0 && (
            <Secao id="casos" titulo={t.cases}>
              <ul className="grid gap-5 md:grid-cols-2">
                {e.casos.map((cs) => (
                  <li key={cs.titulo} className="glass-card p-6">
                    <h3 className="font-display text-lg font-extrabold text-(color:--ink)">{cs.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-800">{cs.texto}</p>
                  </li>
                ))}
              </ul>
              {e.naoPublicar && <p className="mt-4 text-xs text-neutral-600">{e.naoPublicar}</p>}
            </Secao>
          )}

          <Secao id="ferramentas" titulo={t.tools}>
            <ul className="flex flex-wrap gap-1.5">
              {e.ferramentas.map((f) => <li key={f}><Chip>{f}</Chip></li>)}
            </ul>
            {!e.casos.length && e.naoPublicar && <p className="mt-4 text-xs text-neutral-600">{e.naoPublicar}</p>}
          </Secao>

          <Secao id="aprendi" titulo={t.learned}>
            <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-neutral-800">
              {e.aprendi.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </Secao>

          <Secao id="areas" titulo={t.relatedAreas}>
            <ul className="flex flex-wrap gap-2">
              {e.areas.map((a) => (
                <li key={a}>
                  <Link href={r.area(a)} className="inline-flex rounded-full border-2 border-[#7a8c57] px-4 py-1.5 text-sm font-bold text-(color:--gt) hover:bg-[#5b6b3e] hover:text-[#fbfcf3]">
                    {c.roleBySlug(a)?.nome}
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
