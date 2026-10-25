import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import {
  RolesSection, FeaturedProjects, ExperienceTimeline, FormacaoSection, AboutSummary, SkillsSection, CertificationsSection,
} from "@/components/home/Sections";
import { getContent } from "@/content";
import type { Lang } from "@/content/lang";

export function HomePage({ lang }: { lang: Lang }) {
  const { profile } = getContent(lang);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.nomeCompleto,
    alternateName: profile.nome,
    url: profile.site,
    email: profile.email,
    jobTitle: lang === "pt" ? "Estudante de Engenharia de Software" : "Software Engineering student",
    alumniOf: { "@type": "CollegeOrUniversity", name: profile.formacao.instituicao },
    sameAs: [profile.linkedin, profile.github],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero lang={lang} />
      <RolesSection lang={lang} />
      <FeaturedProjects lang={lang} />
      <ExperienceTimeline lang={lang} />
      <FormacaoSection lang={lang} />
      <AboutSummary lang={lang} />
      <SkillsSection lang={lang} />
      <CertificationsSection lang={lang} />
      <Contact lang={lang} email={profile.email} linkedin={profile.linkedin} github={profile.github} />
    </>
  );
}
