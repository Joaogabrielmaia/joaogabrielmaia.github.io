import { SiteShell, shellMetadata } from "@/components/SiteShell";

export const metadata = shellMetadata("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
