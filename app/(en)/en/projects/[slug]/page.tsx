import { ProjectPage, projectMetadata } from "@/components/pages/ProjectPage";
import { projects } from "@/content";

export function generateStaticParams() {
  return projects.map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return projectMetadata("en", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectPage lang="en" slug={slug} />;
}
