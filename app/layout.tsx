import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "João Gabriel Maia | Software Engineer • Gestão de Produtos e Projetos • AI",
  description:
    "Portfólio profissional de João Gabriel Maia. Graduando em Engenharia de Software pela PUC Minas, atuando em Gestão de Projetos, Produtos e Inteligência Artificial.",
  keywords: [
    "João Gabriel Maia",
    "Software Engineer",
    "Gestão de Projetos",
    "Gestão de Produtos",
    "Inteligência Artificial",
    "PUC Minas",
    "Scrum",
    "Discovery",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "João Gabriel Maia" }],
  openGraph: {
    title: "João Gabriel Maia | Software Engineer",
    description:
      "Graduando em Engenharia de Software pela PUC Minas, estudando Gestão de Projetos, Produtos e Inteligência Artificial.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased selection:bg-[#B8FF2C] selection:text-[#0F0F10]`}
    >
      <body className="min-h-full bg-[#FAFAFA] text-[#0F0F10] bg-grid-pattern relative overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
