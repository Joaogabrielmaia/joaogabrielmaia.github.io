import type { Metadata } from "next";
import "../app/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NavTracker } from "@/components/ui/NavTracker";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { ParticleWaveCanvas } from "@/components/ui/ParticleWaveCanvas";
import { fontClasses } from "@/components/fonts";
import { getContent } from "@/content";
import { ui } from "@/content/ui";
import type { Lang } from "@/content/lang";

// Aplica o tema salvo (ou a preferência do sistema) antes da primeira pintura, para não piscar.
const temaInicial = `(function(){try{var t=localStorage.getItem('tema');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})();`;

export function shellMetadata(lang: Lang): Metadata {
  const { profile } = getContent(lang);
  const m = ui[lang].meta;
  return {
    metadataBase: new URL(profile.site),
    title: { default: m.title, template: "%s | João Gabriel Maia" },
    description: m.description,
    authors: [{ name: profile.nome }],
    openGraph: { title: m.title, description: m.description, type: "website", locale: lang === "pt" ? "pt_BR" : "en_US", siteName: "João Gabriel Maia" },
    twitter: { card: "summary_large_image" },
  };
}

export function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang === "pt" ? "pt-BR" : "en"} className={`${fontClasses} h-full antialiased selection:bg-[#F29A0F] selection:text-[#161616]`} suppressHydrationWarning>
      <body className="min-h-full text-(color:--ink) relative overflow-x-hidden font-sans flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: temaInicial }} />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[#161616] focus:px-4 focus:py-2 focus:text-white"
        >
          {ui[lang].skip}
        </a>
        <MotionProvider>
          <NavTracker />
          <ParticleWaveCanvas />
          <Navbar lang={lang} />
          <main id="conteudo" className="relative flex-1">
            {children}
          </main>
          <Footer lang={lang} />
        </MotionProvider>
      </body>
    </html>
  );
}
