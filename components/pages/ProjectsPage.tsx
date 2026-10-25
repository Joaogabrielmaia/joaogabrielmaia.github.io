import type { Metadata } from "next";
import { getContent } from "@/content";
import { ui } from "@/content/ui";
import { routes } from "@/content/routes";
import type { Lang } from "@/content/lang";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProjectsIndex } from "@/components/ProjectsIndex";
import { ProjectCard } from "@/components/ProjectCard";
import { alternates } from "@/content/seo";

export function projectsMetadata(lang: Lang): Metadata {
  const t = ui[lang].projectsPage;
  return { title: t.title, description: t.metaDescription, alternates: alternates("/projetos", "/en/projects", lang) };
}

export function ProjectsPage({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = ui[lang];
  const r = routes(lang);
  const itens = c.projects.map((p) => ({
    slug: p.slug,
    tipo: p.tipo,
    areas: p.areas.map((a) => a.area as string),
    node: <ProjectCard projeto={p} lang={lang} />,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <Breadcrumb
        itens={[{ rotulo: t.project.home, href: r.home }, { rotulo: t.projectsPage.title }]}
        voltarPara={r.projectsAnchor}
        ariaLabel={t.project.here}
        voltar={t.project.back}
      />
      <header className="border-y border-black/20 py-8">
        <h1 className="font-condensed uppercase font-normal text-6xl sm:text-8xl leading-[0.95] text-[#7a8c57]">{t.projectsPage.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-800">{t.projectsPage.intro}</p>
      </header>
      <div className="mt-8">
        <ProjectsIndex lang={lang} itens={itens} areas={c.roles.map((x) => ({ slug: x.slug, nomeCurto: x.nomeCurto }))} />
      </div>
    </div>
  );
}
