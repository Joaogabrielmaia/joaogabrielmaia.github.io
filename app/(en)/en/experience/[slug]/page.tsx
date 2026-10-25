import { ExperiencePage, experienceMetadata } from "@/components/pages/ExperiencePage";
import { experiences } from "@/content";

export function generateStaticParams() {
  return experiences.map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return experienceMetadata("en", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ExperiencePage lang="en" slug={slug} />;
}
