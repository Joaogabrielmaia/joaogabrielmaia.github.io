import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";
import { ScrollTopButton } from "./ui/ScrollTopButton";
import { getContent } from "@/content";
import { ui } from "@/content/ui";
import { routes } from "@/content/routes";
import type { Lang } from "@/content/lang";

export function Footer({ lang }: { lang: Lang }) {
  const { profile } = getContent(lang);
  const t = ui[lang];
  const r = routes(lang);
  const links: [string, string][] = [
    [t.nav.areas, r.areas],
    [t.nav.projects, r.projects],
    [t.nav.experience, r.experience],
    [t.nav.about, r.about],
    [t.nav.contact, r.contact],
  ];

  return (
    <footer className="relative z-10 mt-12 rounded-t-[3rem] bg-[#4f5c35] pt-16 pb-10 text-[#f3f3e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-condensed uppercase text-5xl leading-none">{profile.nome}</p>
            <p className="mt-3 max-w-md text-sm text-[#e6ebd2]">{profile.hero.subtitulo}</p>
          </div>

          <nav aria-label={t.footer.nav} className="md:col-span-3">
            <p className="font-display font-bold mb-3">{t.footer.navigate}</p>
            <ul className="space-y-2 text-sm text-[#e6ebd2]">
              {links.map(([n, h]) => (
                <li key={n}>
                  <Link href={h} className="hover:text-[#F29A0F]">{n}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="font-display font-bold mb-3">{t.footer.contact}</p>
            <div className="flex gap-2">
              {[
                { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
                { href: profile.github, label: "GitHub", Icon: GithubIcon },
                { href: `mailto:${profile.email}`, label: t.footer.email, Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/30 p-2.5 hover:bg-[#F29A0F] hover:border-[#F29A0F] hover:text-[#161616] transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-6 text-xs text-[#c9d2ac] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {profile.nomeCompleto}</p>
          <ScrollTopButton label={t.footer.backToTop} />
        </div>
      </div>
    </footer>
  );
}
