import { AreaPage, areaMetadata } from "@/components/pages/AreaPage";
import { roles } from "@/content";

export function generateStaticParams() {
  return roles.map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return areaMetadata("pt", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <AreaPage lang="pt" slug={slug} />;
}
