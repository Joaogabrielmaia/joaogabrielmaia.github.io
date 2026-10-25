import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Pinyon_Script, Anton } from "next/font/google";
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

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "João Gabriel Maia | Software Engineer • Full Stack Developer • AI",
  description:
    "Portfólio profissional de João Gabriel Maia. Graduando em Engenharia de Software pela PUC Minas, atuando no desenvolvimento de aplicações web Full Stack, APIs, banco de dados e Inteligência Artificial.",
  keywords: [
    "João Gabriel Maia",
    "Software Engineer",
    "Full Stack Developer",
    "Software Development",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "SQL",
    "Prisma",
    "REST API",
    "Git",
    "GitHub",
    "Artificial Intelligence",
    "Generative AI",
    "Automation",
    "Agile",
    "Scrum",
    "PUC Minas",
  ],
  authors: [{ name: "João Gabriel Maia" }],
  openGraph: {
    title: "João Gabriel Maia | Software Engineer • Full Stack Developer • AI",
    description:
      "Graduando em Engenharia de Software pela PUC Minas, desenvolvendo aplicações web Full Stack com React, Next.js, Node.js, PostgreSQL e Inteligência Artificial.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${pinyon.variable} ${anton.variable} h-full antialiased selection:bg-[#F29A0F] selection:text-[#161616]`}
    >
      <body className="min-h-full text-[#161616] relative overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
