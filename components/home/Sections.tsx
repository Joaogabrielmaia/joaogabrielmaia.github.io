import Link from "next/link";
import { ArrowRight, Bot, Code2, Database, GraduationCap, Handshake, Kanban, Languages, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Expandable } from "../ui/Expandable";
import { Chip } from "../ui/Chip";
import { ProjectCard } from "../ProjectCard";
import { getContent } from "@/content";
import { ui } from "@/content/ui";
import { routes } from "@/content/routes";
import type { Lang } from "@/content/lang";
import type { Certification, SkillGroup } from "@/content/schema";

/* ───────────── Áreas (competências com prova) ───────────── */
export function RolesSection({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = ui[lang].roles;
  const r = routes(lang);
  return (
    <section id="areas" aria-labelledby="areas-titulo" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader titleId="areas-titulo" badge={t.badge} script={t.script} title={t.title} description={t.description} />
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.roles.map((role) => {
            const principais = c.projectsForArea(role.slug).filter((p) => p.nivel === "principal").slice(0, 3);
            return (
              <li key={role.slug}>
                <article className="glass-card group relative flex h-full flex-col gap-3 p-6">
                  <h3 className="font-condensed uppercase font-normal text-3xl leading-none text-(color:--gt)">
                    <Link
                      href={r.area(role.slug)}
                      className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:ring-4 focus-visible:after:ring-[#F29A0F] focus-visible:after:rounded-[2rem]"
                    >
                      {role.nome}
                    </Link>
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-700">{role.pitch}</p>
                  {principais.length > 0 && (
                    <div className="flex flex-wrap gap-1.5" aria-label={t.projects}>
                      {principais.map((p) => (
                        <Chip key={p.projeto.slug} variant="destaque">{p.projeto.titulo}</Chip>
                      ))}
                    </div>
                  )}
                  <span aria-hidden className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-bold text-(color:--ink)">
                    {t.seeDetails}
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

/* ───────────── Projetos em destaque ───────────── */
export function FeaturedProjects({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = ui[lang].featured;
  const r = routes(lang);
  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader titleId="projetos-titulo" badge={t.badge} script={t.script} title={t.title} description={t.description} />
        <ul className="slab grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.featuredProjects().map((p) => (
            <li key={p.slug} className="relative z-10">
              <ProjectCard projeto={p} lang={lang} />
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link
            href={r.projects}
            className="group inline-flex items-center gap-2 rounded-sm bg-[#F29A0F] px-6 py-3 text-sm font-bold text-[#161616] hover:bg-[#d98200] transition-colors"
          >
            {t.seeAll}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Experiência ───────────── */
export function ExperienceTimeline({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = ui[lang].experience;
  const r = routes(lang);
  return (
    <section id="experiencia" aria-labelledby="experiencia-titulo" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader titleId="experiencia-titulo" badge={t.badge} script={t.script} title={t.title} description={t.description} />
        <ol className="relative space-y-10 border-l-2 border-[#7a8c57] pl-6 sm:pl-10">
          {c.experiences.map((e) => (
            <li key={e.slug} className="relative">
              <span aria-hidden className="absolute -left-[2.2rem] sm:-left-[3.2rem] top-1.5 h-4 w-4 rounded-full border-4 border-(color:--paper) bg-[#F29A0F]" />
              <p className="font-mono text-xs text-neutral-600">{e.periodo}</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold leading-tight text-(color:--gt)">{e.cargo}</h3>
              <p className="text-sm font-semibold text-neutral-700">{e.organizacao}</p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700 line-clamp-2">{e.resumo}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={t.highlights}>
                {e.destaques.slice(0, 3).map((d) => (
                  <li key={d}><Chip variant="destaque">{d}</Chip></li>
                ))}
              </ul>
              <Link
                href={r.experiencePage(e.slug)}
                className="group mt-4 inline-flex items-center gap-2 rounded-sm border-2 border-[#7a8c57] px-4 py-2 text-sm font-bold text-(color:--gt) hover:bg-[#5b6b3e] hover:text-[#fbfcf3] transition-colors"
              >
                {t.seeAll}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────────── Formação ───────────── */
export function FormacaoSection({ lang }: { lang: Lang }) {
  const { profile } = getContent(lang);
  const t = ui[lang].education;
  const r = routes(lang);
  return (
    <section id="formacao" aria-labelledby="formacao-titulo" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader titleId="formacao-titulo" badge={t.badge} script={t.script} title={t.title} />
        <div className="glass-card flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7a8c57]/20 text-(color:--gt2)">
              <GraduationCap className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <p className="font-mono text-xs text-neutral-600">{profile.formacao.periodo}</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold leading-tight text-(color:--gt)">{profile.formacao.curso}</h3>
              <p className="text-sm font-semibold text-neutral-700">{profile.formacao.instituicao}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700">{profile.destaqueAcademico}</p>
            </div>
          </div>
          <Link
            href={r.project("erp-vortex")}
            className="group inline-flex shrink-0 items-center gap-2 rounded-sm border-2 border-[#7a8c57] px-4 py-2 text-sm font-bold text-(color:--gt) hover:bg-[#5b6b3e] hover:text-[#fbfcf3] transition-colors"
          >
            {t.seeVortex}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Sobre (resumo) ───────────── */
export function AboutSummary({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = ui[lang].about;
  const r = routes(lang);
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader titleId="sobre-titulo" badge={t.badge} script={t.script} title={t.title} />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-card p-7">
            <p className="text-base leading-relaxed text-neutral-800">{c.profile.sobre[0]}</p>
            <Link href={r.about} className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-(color:--gt) hover:text-[#F29A0F]">
              {t.readMore}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
          <div className="glass-card p-7">
            <h3 className="font-display font-bold text-(color:--gt)">{t.skills}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {c.roles.map((role) => (
                <li key={role.slug}>
                  <Link
                    href={r.area(role.slug)}
                    className="inline-flex rounded-full border border-[#7a8c57]/40 bg-[#7a8c57]/10 px-3 py-1.5 text-xs font-semibold text-(color:--gt2) hover:bg-[#5b6b3e] hover:text-[#fbfcf3] transition-colors"
                  >
                    {role.nomeCurto}
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

/* ───────────── Competências ───────────── */
const icones: Record<string, LucideIcon> = {
  Desenvolvimento: Code2, Development: Code2,
  "Dados e APIs": Database, "Data and APIs": Database,
  "IA e automação": Bot, "AI and automation": Bot,
  "Gestão e requisitos": Kanban, "Management and requirements": Kanban,
  "Comunicação e vendas": Handshake, "Communication and sales": Handshake,
  Qualidade: ShieldCheck, Quality: ShieldCheck,
  Ferramentas: Wrench, Tools: Wrench,
  Idiomas: Languages, Languages,
};

function Grupo({ g }: { g: SkillGroup }) {
  const Icone = icones[g.grupo] ?? Code2;
  return (
    <li className="glass-card relative z-10 flex flex-col p-6">
      <div className="flex items-center gap-3 border-b border-[#7a8c57]/25 pb-4">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#7a8c57] text-[#fbfcf3]">
          <Icone className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="font-condensed text-3xl font-normal uppercase leading-none text-(color:--gt2)">{g.grupo}</h3>
        <span className="ml-auto rounded-full bg-[#7a8c57]/15 px-2.5 py-1 font-mono text-[11px] font-bold text-(color:--gt2)">{g.itens.length}</span>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {g.itens.map((i) => (
          <li key={i} className="rounded-lg border border-[#7a8c57]/30 bg-[#7a8c57]/10 px-3 py-1.5 text-[13px] font-semibold leading-tight text-(color:--gt2)">
            {i}
          </li>
        ))}
      </ul>
    </li>
  );
}

export function SkillsSection({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = ui[lang].skills;
  const destaque = c.skills.filter((s) => s.destaque);
  const demais = c.skills.filter((s) => !s.destaque);
  return (
    <section id="competencias" aria-labelledby="competencias-titulo" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader titleId="competencias-titulo" badge={t.badge} script={t.script} title={t.title} description={t.description} />
        <div className="slab slab-green">
          <Expandable
            labelMais={t.seeAll}
            labelMenos={t.seeLess}
            extra={<ul className="grid grid-cols-1 gap-5 md:grid-cols-2">{demais.map((g) => <Grupo key={g.grupo} g={g} />)}</ul>}
          >
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">{destaque.map((g) => <Grupo key={g.grupo} g={g} />)}</ul>
          </Expandable>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Certificações ───────────── */
function Cartao({ c, lang }: { c: Certification; lang: Lang }) {
  const t = ui[lang].certs;
  return (
    <li className="glass-card relative z-10 flex flex-col gap-2 p-6">
      <p className="font-mono text-xs text-neutral-600">{c.data}</p>
      <h3 className="font-display text-lg font-extrabold leading-snug text-(color:--ink)">{c.titulo}</h3>
      <p className="text-sm text-neutral-700">{c.emissor}</p>
      <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-1">
        {c.urlCredencial ? (
          <a
            href={c.urlCredencial}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-(color:--gt) underline underline-offset-2 hover:text-(color:--ink)"
          >
            {t.viewCredential}
            <span className="sr-only"> {t.ofTitle} {c.titulo} {t.newTab}</span>
          </a>
        ) : (
          c.nota && <span className="text-sm text-neutral-700">{c.nota}</span>
        )}
        {c.verificado && <span className="rounded-full bg-[#7a8c57]/20 px-2 py-0.5 text-[11px] font-bold text-(color:--gt2)">{t.verified}</span>}
      </div>
    </li>
  );
}

export function CertificationsSection({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = ui[lang].certs;
  const destaque = c.certifications.filter((x) => x.destaque);
  const demais = c.certifications.filter((x) => !x.destaque);
  const n = c.certifications.length;
  return (
    <section id="certificacoes" aria-labelledby="cert-titulo" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader titleId="cert-titulo" badge={t.badge} script={t.script} title={t.title} description={t.description(n)} />
        <div className="slab slab-green">
          <Expandable
            labelMais={t.seeAll(n)}
            labelMenos={t.onlyFeatured}
            extra={<ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{demais.map((x) => <Cartao key={x.titulo} c={x} lang={lang} />)}</ul>}
          >
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">{destaque.map((x) => <Cartao key={x.titulo} c={x} lang={lang} />)}</ul>
          </Expandable>
        </div>
      </div>
    </section>
  );
}
