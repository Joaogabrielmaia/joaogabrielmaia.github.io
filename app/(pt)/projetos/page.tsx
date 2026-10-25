import { ProjectsPage, projectsMetadata } from "@/components/pages/ProjectsPage";

export const metadata = projectsMetadata("pt");

export default function Page() {
  return <ProjectsPage lang="pt" />;
}
