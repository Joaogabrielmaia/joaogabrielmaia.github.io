import type { MetadataRoute } from "next";
import { getContent } from "@/content";
import { routes } from "@/content/routes";
import type { Lang } from "@/content/lang";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getContent("pt").profile.site;
  const lista: string[] = [];
  for (const lang of ["pt", "en"] as Lang[]) {
    const c = getContent(lang);
    const r = routes(lang);
    lista.push(
      r.home,
      r.projects,
      r.about,
      ...c.projects.map((p) => r.project(p.slug)),
      ...c.roles.map((x) => r.area(x.slug)),
      ...c.experiences.map((e) => r.experiencePage(e.slug)),
    );
  }
  return lista.map((u) => ({ url: `${site}${u === "/" ? "" : u}`, lastModified: new Date("2026-10-25") }));
}
