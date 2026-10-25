"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkle } from "lucide-react";
import { ArrowPill, MonogramBadge } from "./ui/Decor";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";

const stack = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "IA"];

/** Cartão branco de cantos largos com linha-régua e brilhos, como no modelo */
function Frame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.25rem] bg-[#f8f8f7] p-5 shadow-[0_22px_30px_-20px_rgba(0,0,0,0.55),inset_0_1px_0_#fff] ${className}`}
    >
      <div className="rule-dots mb-4 opacity-80" />
      <Sparkle className="absolute right-5 top-14 w-4 h-4 text-neutral-400" />
      {children}
      <div className="wave-bars pointer-events-none absolute inset-x-0 bottom-0 h-14" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Faixa superior */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-y border-black/20 py-2.5 font-display text-lg sm:text-3xl text-neutral-500"
        >
          <span>
            <b className="font-bold">Built</b> to Inspire
          </span>
          <b className="hidden sm:inline font-bold">2026</b>
          <ArrowPill />
        </motion.div>

        {/* Título gigante gravado + script laranja */}
        <div className="relative mt-16 sm:mt-24">
          <motion.span
            initial={{ opacity: 0, x: -30, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-script absolute -top-10 sm:-top-20 left-0 z-10 text-5xl sm:text-8xl text-[#F29A0F] pointer-events-none select-none"
          >
            software engineer
          </motion.span>

          <div className="absolute right-0 -top-2 sm:top-0 flex flex-col items-end gap-3">
            <MonogramBadge size={56} className="hidden sm:inline-flex" />
            <span className="font-display font-bold text-xs sm:text-xl text-[#7a8c57] tracking-wide text-right leading-tight">
              FULL STACK
              <br />· AI ·
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="deboss font-display font-extrabold uppercase leading-[0.86] tracking-[-0.04em] text-[17vw] sm:text-[15vw] lg:text-[13.5rem]"
          >
            João
            <br />
            Maia
          </motion.h1>
        </div>

        {/* Placa com três cartões */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="slab mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {/* Cartão 1: foto em moldura cortada */}
          <Frame className="relative z-10 min-h-[22rem]">
            <div className="flex gap-4">
              <div className="relative w-[46%] aspect-[3/4] shrink-0">
                <div className="absolute inset-0 bg-[#F29A0F]/70 [clip-path:polygon(0_0,82%_0,100%_14%,100%_100%,0_100%)]" />
                <div className="absolute inset-[2px] overflow-hidden [clip-path:polygon(0_0,82%_0,100%_14%,100%_100%,0_100%)]">
                  <Image
                    src="/avatar.jpg"
                    alt="João Gabriel Maia"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="flex min-w-0 flex-col justify-center">
                <span className="font-display text-xs text-neutral-500">
                  PUC Minas
                </span>
                <h3 className="font-display font-extrabold text-xl leading-[1.05] text-[#F29A0F]">
                  Engenharia
                  <br />
                  <span className="text-[#161616]">de Software</span>
                </h3>
                <p className="mt-2 text-[11px] leading-snug text-neutral-600">
                  APIs, dados e Inteligência Artificial.
                </p>
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              <a
                href="#projetos"
                className="rounded-sm bg-[#3b8be8] px-3 py-1.5 text-[11px] font-semibold text-white"
              >
                Ver projetos
              </a>
              <a
                href="#sobre"
                className="rounded-sm border border-neutral-500 px-3 py-1.5 text-[11px] font-semibold text-neutral-700"
              >
                Sobre
              </a>
            </div>
          </Frame>

          {/* Cartão 2: stack */}
          <Frame className="relative z-10 min-h-[22rem] text-center">
            <h3 className="font-display font-extrabold text-3xl leading-[1.05] text-[#F29A0F]">
              Full Stack
              <br />
              <span className="text-[#161616]">Developer</span>
            </h3>
            <p className="mx-auto mt-3 max-w-[16rem] text-[11px] leading-snug text-neutral-600">
              Aplicações web de ponta a ponta, do banco de dados à interface,
              com requisitos e negócio como diferencial.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-[#F29A0F] px-2.5 py-1 text-[11px] font-bold text-[#161616]"
                >
                  {s}
                </span>
              ))}
            </div>
          </Frame>

          {/* Cartão 3: contatos */}
          <Frame className="relative z-10 min-h-[22rem] text-center">
            <h3 className="font-display font-extrabold text-3xl leading-[1.05] text-[#F29A0F]">
              Vamos conversar
              <br />
              <span className="text-[#161616]">sobre ideias?</span>
            </h3>
            <div className="mt-6 flex flex-col items-center gap-3">
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-sm bg-[#F29A0F] px-5 py-2.5 text-xs font-bold text-[#161616] hover:bg-[#d98200] transition-colors"
              >
                Falar comigo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/cv.pdf"
                download="Joao_Gabriel_CV.pdf"
                className="inline-flex items-center gap-2 rounded-sm border border-neutral-500 px-4 py-2 text-xs font-semibold text-neutral-700 hover:border-[#F29A0F] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Baixar CV
              </a>
              <div className="flex items-center gap-2 pt-1">
                {[
                  { href: "https://www.linkedin.com/in/joãogabrielmaia", label: "LinkedIn", Icon: LinkedinIcon },
                  { href: "https://github.com/Joaogabrielmaia", label: "GitHub", Icon: GithubIcon },
                  { href: "mailto:Joaogabrielmaia092@gmail.com", label: "Email", Icon: Mail },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-full border border-neutral-400 p-2.5 text-neutral-700 hover:bg-[#F29A0F] hover:border-[#F29A0F] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </Frame>
        </motion.div>
      </div>
    </section>
  );
}
