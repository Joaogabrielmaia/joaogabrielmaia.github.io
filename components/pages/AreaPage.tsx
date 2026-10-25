import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Download } from "lucide-react";
import { getContent } from "@/content";
import { ui } from "@/content/ui";
import { routes } from "@/content/routes";
import { alternates } from "@/content/seo";
import type { Lang } from "@/content/lang";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Chip } from "@/components/ui/Chip";

export function areaMetadata(lang: Lang, slug: string): Metadata {
  const role = getContent(lang).roleBySlug(slug);
  if (!role) return {};
  return {
    title: `${role.nome}: ${ui[lang].areaPage.metaSuffix}`,
    description: role.pitch,
    alternates: alternates(`/areas/${slug}`, `/en/areas/${slug}`, lang),
  };
}

const fonteHref = (lang: Lang) => {
  const r = routes(lang);
  return {
    "hotmart-suporte-ti": r.experiencePage("hotmart-suporte-ti"),
    "desenvolvedor-full-stack-autonomo": r.experiencePage("desenvolvedor-full-stack-autonomo"),
    "erp-vortex": r.project("erp-vortex"),
    vendas: r.experiencePage("desenvolvedor-full-stack-autonomo"),
  } as Record<string, string>;
};

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="font-condensed uppercase font-normal text-4xl sm:text-5xl text-[#7a8c57] mb-6">{children}</h2>;
}

export function AreaPage({ lang, slug }: { lang: Lang; slug: string }) {
  const c = getContent(lang);
  const t = ui[lang].areaPage;
  const r = routes(lang);
  const role = c.roleBySlug(slug);
  if (!role) notFound();

  const ps = c.projectsForArea(role.slug);
  const es = c.experiencesForArea(role.slug);
  const fonteRotulo: Record<string, string> = { "hotmart-suporte-ti": t.hotmart, "desenvolvedor-full-stack-autonomo": t.autonomous, "erp-vortex": t.vortex, vendas: t.sales };
  const hrefs = fonteHref(lang);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <Breadcrumb
        itens={[{ rotulo: t.home, href: r.home }, { rotulo: t.areas, href: r.areas }, { rotulo: role.nomeCurto }]}
        voltarPara={r.areas}
        ariaLabel={ui[lang].project.here}
        voltar={ui[lang].project.back}
      />

      <header className="border-y border-black/20 py-8">
        <p className="font-script text-4xl text-[#F29A0F]">{t.kicker}</p>
        <h1 className="font-condensed uppercase font-normal text-5xl sm:text-7xl leading-[0.95] text-[#7a8c57]">{role.nome}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-800">{role.oQueFaz}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={r.contact} className="inline-flex items-center gap-2 rounded-sm bg-[#F29A0F] px-5 py-2.5 text-sm font-bold text-[#161616] hover:bg-[#d98200]">
            {t.talk}
          </Link>
          <a href="/cv.pdf" download="Joao_Gabriel_CV.pdf" className="inline-flex items-center gap-2 rounded-sm border-2 border-[#7a8c57] px-4 py-2 text-sm font-bold text-(color:--gt) hover:bg-[#5b6b3e] hover:text-[#fbfcf3]">
            <Download className="h-4 w-4" aria-hidden /> {t.cv}
          </a>
        </div>
      </header>

      <section aria-labelledby="experiencia-na-area" className="py-10">
        <H2 id="experiencia-na-area">{t.experienceIn}</H2>
        <p className="mb-6 -mt-4 text-sm text-neutral-700">{t.involves} {role.oQueValoriza}</p>
        <ul className="space-y-4">
          {role.evidencias.map((ev) => (
            <li key={ev.texto} className="glass-card flex flex-col gap-2 p-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <p className="text-sm leading-relaxed text-neutral-800">{ev.texto}</p>
              <Link href={hrefs[ev.fonte]} className="shrink-0 text-sm font-bold text-(color:--gt) underline-offset-2 hover:text-[#F29A0F] hover:underline">
                {fonteRotulo[ev.fonte]} →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="projetos-da-area" className="py-6">
        <H2 id="projetos-da-area">{t.projects}</H2>
        <ul className="space-y-4">
          {ps.map(({ projeto, nivel, evidencia }) => (
            <li key={projeto.slug} className="glass-card p-5">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-condensed uppercase text-3xl leading-none text-(color:--gt)">
                  <Link href={r.project(projeto.slug)} className="hover:text-[#F29A0F]">{projeto.titulo}</Link>
                </h3>
                <Chip variant={nivel === "principal" ? "area" : "area-rel"}>{nivel === "principal" ? t.main : t.related}</Chip>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-800">{evidencia}</p>
              <Link href={r.project(projeto.slug)} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-(color:--ink) hover:text-[#F29A0F]">
                {t.seeDetails} <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {es.length > 0 && (
        <section aria-labelledby="experiencias-da-area" className="py-6">
          <H2 id="experiencias-da-area">{t.experiences}</H2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {es.map((e) => (
              <li key={e.slug} className="glass-card p-5">
                <p className="font-mono text-xs text-neutral-600">{e.periodo}</p>
                <h3 className="font-display text-lg font-extrabold leading-snug">{e.cargo}</h3>
                <p className="text-sm text-neutral-700">{e.organizacao}</p>
                <Link href={r.experiencePage(e.slug)} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-(color:--gt) hover:text-[#F29A0F]">
                  {t.seeAll} <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="competencias-da-area" className="py-6">
        <H2 id="competencias-da-area">{t.skills}</H2>
        <ul className="flex flex-wrap gap-1.5">
          {role.competencias.map((x) => <li key={x}><Chip variant="destaque">{x}</Chip></li>)}
        </ul>
      </section>
    </div>
  );
}
