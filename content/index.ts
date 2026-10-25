// Ponto único de leitura do conteúdo. Cada arquivo valida o próprio dado com Zod ao ser importado:
// se faltar um campo obrigatório, o build falha.
import { profile } from "./profile";
import { roles, roleBySlug } from "./roles";
import { experiences, experienceBySlug } from "./experiences";
import { skills, certifications } from "./skills";
import { trilha } from "./projects/trilha";
import { pulso } from "./projects/pulso";
import { prumo } from "./projects/prumo";
import { fluxo } from "./projects/fluxo";
import { mapa } from "./projects/mapa";
import { termometro } from "./projects/termometro";
import { ponte } from "./projects/ponte";
import { gerencieja, pmCopilot, dashboardPowerBi, erpVortex } from "./projects/anteriores";
import type { AreaSlug, Project } from "./schema";

export { profile, roles, roleBySlug, experiences, experienceBySlug, skills, certifications };

export const projects: Project[] = [
  trilha, pulso, prumo, fluxo, mapa, termometro, ponte,
  gerencieja, pmCopilot, dashboardPowerBi, erpVortex,
].sort((a, b) => a.ordem - b.ordem);

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = () => projects.filter((p) => p.destaqueNaHome);

/** Projetos que ajudam uma área: principais primeiro, depois relacionados. */
export function projectsForArea(area: AreaSlug) {
  const achados = projects.flatMap((p) => {
    const link = p.areas.find((a) => a.area === area);
    return link ? [{ projeto: p, nivel: link.nivel, evidencia: link.evidencia }] : [];
  });
  return achados.sort((a, b) => (a.nivel === b.nivel ? a.projeto.ordem - b.projeto.ordem : a.nivel === "principal" ? -1 : 1));
}

export const experiencesForArea = (area: AreaSlug) => experiences.filter((e) => e.areas.includes(area));

export function projectCoverSrc(p: Project): string | undefined {
  if (!p.capa) return undefined;
  if (p.capa.startsWith("/")) return p.capa;
  return `/projects/${p.slug}/thumbs/${p.capa}.webp`;
}
