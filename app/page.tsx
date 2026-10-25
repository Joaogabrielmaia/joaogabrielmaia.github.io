import { Hero } from "@/components/Hero";
import { RolesSection } from "@/components/home/RolesSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { FormacaoSection } from "@/components/home/FormacaoSection";
import { AboutSummary } from "@/components/home/AboutSummary";
import { SkillsSection } from "@/components/home/SkillsSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { Contact } from "@/components/Contact";
import { profile } from "@/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.nomeCompleto,
  alternateName: profile.nome,
  url: profile.site,
  email: profile.email,
  jobTitle: "Estudante de Engenharia de Software",
  alumniOf: { "@type": "CollegeOrUniversity", name: profile.formacao.instituicao },
  sameAs: [profile.linkedin, profile.github],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <RolesSection />
      <FeaturedProjects />
      <ExperienceTimeline />
      <FormacaoSection />
      <AboutSummary />
      <SkillsSection />
      <CertificationsSection />
      <Contact />
    </>
  );
}
