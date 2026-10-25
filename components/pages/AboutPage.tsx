import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/content";
import { ui } from "@/content/ui";
import { routes } from "@/content/routes";
import { alternates } from "@/content/seo";
import type { Lang } from "@/content/lang";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export function aboutMetadata(lang: Lang): Metadata {
  const t = ui[lang].aboutPage;
  return { title: t.title, description: t.metaDescription, alternates: alternates("/sobre", "/en/about", lang) };
}

function Bloco({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section aria-label={titulo} className="py-6">
      <h2 className="font-condensed uppercase font-normal text-4xl sm:text-5xl text-[#7a8c57] mb-4">{titulo}</h2>
      {children}
    </section>
  );
}

const botao = "inline-flex rounded-sm border-2 border-[#7a8c57] px-4 py-2 text-sm font-bold text-(color:--gt) hover:bg-[#5b6b3e] hover:text-[#fbfcf3]";

export function AboutPage({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = ui[lang].aboutPage;
  const r = routes(lang);
  const { profile } = c;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <Breadcrumb
        itens={[{ rotulo: t.home, href: r.home }, { rotulo: t.title }]}
        voltarPara={r.aboutAnchor}
        ariaLabel={ui[lang].project.here}
        voltar={ui[lang].project.back}
      />
      <header className="border-y border-black/20 py-8">
        <h1 className="font-condensed uppercase font-normal text-6xl sm:text-8xl leading-[0.95] text-[#7a8c57]">{t.title}</h1>
        <p className="mt-4 font-display text-xl font-bold text-neutral-800">{profile.nomeCompleto}</p>
      </header>

      <Bloco titulo={t.who}>
        <div className="space-y-4 text-base leading-relaxed text-neutral-800">
          {profile.sobre.map((s) => <p key={s}>{s}</p>)}
          <p>
            {profile.destaqueAcademico}{" "}
            <Link href={r.project("erp-vortex")} className="font-bold text-(color:--gt) underline underline-offset-2 hover:text-[#F29A0F]">{t.seeVortex}</Link>.
          </p>
        </div>
      </Bloco>

      <Bloco titulo={t.skills}>
        <ul className="flex flex-wrap gap-2">
          {c.roles.map((role) => (
            <li key={role.slug}>
              <Link
                href={r.area(role.slug)}
                className="inline-flex rounded-full border border-[#7a8c57]/40 bg-[#7a8c57]/10 px-4 py-2 text-sm font-semibold text-(color:--gt2) hover:bg-[#5b6b3e] hover:text-[#fbfcf3] transition-colors"
              >
                {role.nome}
              </Link>
            </li>
          ))}
        </ul>
      </Bloco>

      <Bloco titulo={t.how}>
        <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-neutral-800">
          {profile.comoTrabalho.map((x) => <li key={x}>{x}</li>)}
        </ul>
      </Bloco>

      <Bloco titulo={t.educationLangs}>
        <ul className="space-y-2 text-base text-neutral-800">
          <li><strong>{profile.formacao.curso}</strong>, {profile.formacao.instituicao} ({profile.formacao.periodo})</li>
          {profile.idiomas.map((i) => <li key={i}>{i}</li>)}
        </ul>
      </Bloco>

      <Bloco titulo={t.find}>
        <ul className="flex flex-wrap gap-3">
          <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={botao}>LinkedIn</a></li>
          <li><a href={profile.github} target="_blank" rel="noopener noreferrer" className={botao}>GitHub</a></li>
          <li><Link href={r.contact} className="inline-flex rounded-sm bg-[#F29A0F] px-4 py-2 text-sm font-bold text-[#161616] hover:bg-[#d98200]">{t.talk}</Link></li>
        </ul>
      </Bloco>
    </div>
  );
}
