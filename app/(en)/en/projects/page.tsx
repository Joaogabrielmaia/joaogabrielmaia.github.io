import { ProjectsPage, projectsMetadata } from "@/components/pages/ProjectsPage";

export const metadata = projectsMetadata("en");

export default function Page() {
  return <ProjectsPage lang="en" />;
}
