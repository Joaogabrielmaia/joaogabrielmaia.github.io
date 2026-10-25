import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Pinyon_Script, Anton } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { NavTracker } from "@/components/ui/NavTracker";
import { ParticleWaveCanvas } from "@/components/ui/ParticleWaveCanvas";
import { profile } from "@/content";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const syne = Syne({ variable: "--font-display", subsets: ["latin"], weight: ["500", "700", "800"], display: "swap" });
const anton = Anton({ variable: "--font-condensed", subsets: ["latin"], weight: "400", display: "swap" });
const pinyon = Pinyon_Script({ variable: "--font-script", subsets: ["latin"], weight: "400", display: "swap" });

const descricao =
  "Engenharia de Software (PUC Minas) com foco em implantação, automação, customer success e consultoria de soluções. 7 projetos documentados de ponta a ponta, experiência com clientes e prêmio de Melhor Trabalho Interdisciplinar.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: {
    default: "João Gabriel Maia | Implantação, automação e clientes",
    template: "%s | João Gabriel Maia",
  },
  description: descricao,
  authors: [{ name: profile.nome }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "João Gabriel Maia | Implantação, automação e clientes",
    description: descricao,
    type: "website",
    locale: "pt_BR",
    siteName: "João Gabriel Maia",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${pinyon.variable} ${anton.variable} h-full antialiased selection:bg-[#F29A0F] selection:text-[#161616]`}
    >
      <body className="min-h-full text-[#161616] relative overflow-x-hidden font-sans flex flex-col">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[#161616] focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <MotionProvider>
          <NavTracker />
          <ParticleWaveCanvas />
          <Navbar />
          <main id="conteudo" className="relative flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
