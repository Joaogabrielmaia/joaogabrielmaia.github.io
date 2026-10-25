import { SiteShell, shellMetadata } from "@/components/SiteShell";

export const metadata = shellMetadata("pt");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="pt">{children}</SiteShell>;
}
