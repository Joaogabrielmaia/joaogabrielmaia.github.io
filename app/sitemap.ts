import type { MetadataRoute } from "next";
import { projects, roles, experiences, profile } from "@/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const rotas = [
    "/",
    "/projetos",
    "/sobre",
    ...projects.map((p) => `/projetos/${p.slug}`),
    ...roles.map((r) => `/areas/${r.slug}`),
    ...experiences.map((e) => `/experiencia/${e.slug}`),
  ];
  return rotas.map((r) => ({ url: `${profile.site}${r === "/" ? "" : r}`, lastModified: new Date("2026-10-25") }));
}
