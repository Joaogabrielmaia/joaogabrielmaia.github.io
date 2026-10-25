// Ponto único de leitura do conteúdo. Cada arquivo valida o próprio dado com Zod ao ser importado:
// se faltar um campo obrigatório, o build falha. O inglês é uma tradução parcial mesclada sobre o português
// (ver `lang.ts`) e também é validado com os mesmos schemas.
import { profile as profilePt } from "./profile";
import { roles as rolesPt } from "./roles";
import { experiences as experiencesPt } from "./experiences";
import { skills as skillsPt, certifications as certificationsPt } from "./skills";
import { trilha } from "./projects/trilha";
import { pulso } from "./projects/pulso";
import { prumo } from "./projects/prumo";
import { fluxo } from "./projects/fluxo";
import { mapa } from "./projects/mapa";
import { termometro } from "./projects/termometro";
import { ponte } from "./projects/ponte";
import { erpVortex } from "./projects/anteriores";
import { profileEn, rolesEn, experiencesEn, skillsEn, certificationsEn } from "./en/base";
import { projectsEn } from "./en/projects";
import { deepMerge, type Lang } from "./lang";
import {
  ProfileSchema, RoleSchema, ExperienceSchema, SkillGroupSchema, CertificationSchema, ProjectSchema,
  type AreaSlug, type Project,
} from "./schema";
import { z } from "zod";

export { profilePt as profile, rolesPt as roles, experiencesPt as experiences, skillsPt as skills, certificationsPt as certifications };

export const projects: Project[] = [trilha, pulso, prumo, fluxo, mapa, termometro, ponte, erpVortex].sort((a, b) => a.ordem - b.ordem);
export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

function build(lang: Lang) {
  const isEn = lang === "en";
  const profile = isEn ? ProfileSchema.parse(deepMerge(profilePt, profileEn)) : profilePt;
  const roles = isEn ? z.array(RoleSchema).parse(deepMerge(rolesPt, rolesEn)) : rolesPt;
  const experiences = isEn ? z.array(ExperienceSchema).parse(deepMerge(experiencesPt, experiencesEn)) : experiencesPt;
  const skills = isEn ? z.array(SkillGroupSchema).parse(deepMerge(skillsPt, skillsEn)) : skillsPt;
  const certifications = isEn ? z.array(CertificationSchema).parse(deepMerge(certificationsPt, certificationsEn)) : certificationsPt;
  const projs = isEn
    ? projects.map((p) => {
        const { printLegendas, ...resto } = (projectsEn[p.slug] ?? {}) as { printLegendas?: Record<string, string> } & Record<string, unknown>;
        const merged = deepMerge(p, resto) as Project;
        const prints = merged.prints.map((pr) => (printLegendas?.[pr.arquivo] ? { ...pr, legenda: printLegendas[pr.arquivo] } : pr));
        return ProjectSchema.parse({ ...merged, prints });
      })
    : projects;

  const roleBySlug = (slug: string) => roles.find((r) => r.slug === slug);
  const experienceBySlug = (slug: string) => experiences.find((e) => e.slug === slug);
  const projectBySlugL = (slug: string) => projs.find((p) => p.slug === slug);
  const featuredProjects = () => projs.filter((p) => p.destaqueNaHome);

  /** Projetos que ajudam uma área: principais primeiro, depois relacionados. */
  function projectsForArea(area: AreaSlug) {
    const achados = projs.flatMap((p) => {
      const link = p.areas.find((a) => a.area === area);
      return link ? [{ projeto: p, nivel: link.nivel, evidencia: link.evidencia }] : [];
    });
    return achados.sort((a, b) => (a.nivel === b.nivel ? a.projeto.ordem - b.projeto.ordem : a.nivel === "principal" ? -1 : 1));
  }
  const experiencesForArea = (area: AreaSlug) => experiences.filter((e) => e.areas.includes(area));

  return {
    lang, profile, roles, experiences, skills, certifications, projects: projs,
    roleBySlug, experienceBySlug, projectBySlug: projectBySlugL, featuredProjects, projectsForArea, experiencesForArea,
  };
}

export type Content = ReturnType<typeof build>;
const cache: Partial<Record<Lang, Content>> = {};
export function getContent(lang: Lang): Content {
  return (cache[lang] ??= build(lang));
}

export const featuredProjects = () => getContent("pt").featuredProjects();
export const roleBySlug = (slug: string) => getContent("pt").roleBySlug(slug);
export const experienceBySlug = (slug: string) => getContent("pt").experienceBySlug(slug);
export const projectsForArea = (area: AreaSlug) => getContent("pt").projectsForArea(area);
export const experiencesForArea = (area: AreaSlug) => getContent("pt").experiencesForArea(area);

export function projectCoverSrc(p: Project): string | undefined {
  if (!p.capa) return undefined;
  if (p.capa.startsWith("/")) return p.capa;
  return `/projects/${p.slug}/thumbs/${p.capa}.webp`;
}
