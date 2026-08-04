"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient Glow Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B8FF2C]/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#0F0F10]/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0F0F10] text-[#FAFAFA] border border-neutral-800 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#B8FF2C] animate-pulse" />
              <span>Software Engineer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F0F10] leading-[1.1] mb-4">
              João Gabriel <br className="hidden sm:inline" />
              <span className="text-neutral-500 font-normal">Maia</span>
            </h1>

            {/* Sub-headline Pill / Role */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold px-3.5 py-1.5 rounded-md bg-[#B8FF2C] text-[#0F0F10] mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Software Engineer • Gestão de Produtos e Projetos • AI</span>
            </div>

            {/* Bio Text */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mb-8 font-normal">
              Graduando em Engenharia de Software pela PUC Minas, estudando Gestão de Projetos e Inteligência Artificial, e desenvolvendo aplicações web.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              {/* Ver Projetos */}
              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F0F10] text-[#FAFAFA] font-semibold text-sm hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all border border-neutral-800 shadow-md group"
              >
                <span>Ver Projetos</span>
                <ArrowRight className="w-4 h-4 text-[#B8FF2C] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download CV */}
              <a
                href="/cv.pdf"
                download="Joao_Gabriel_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-[#0F0F10] font-semibold text-sm hover:bg-neutral-50 transition-all border border-neutral-200/90 shadow-2xs hover:border-neutral-400"
              >
                <Download className="w-4 h-4 text-neutral-600" />
                <span>Download CV</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-2 ml-0 sm:ml-2 pt-2 sm:pt-0">
                <a
                  href="https://www.linkedin.com/in/joãogabrielmaia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-xl bg-white text-neutral-700 hover:text-[#0F0F10] hover:bg-neutral-100 border border-neutral-200/90 transition-all shadow-2xs"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/Joaogabrielmaia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-xl bg-white text-neutral-700 hover:text-[#0F0F10] hover:bg-neutral-100 border border-neutral-200/90 transition-all shadow-2xs"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="mailto:Joaogabrielmaia092@gmail.com"
                  aria-label="Email"
                  className="p-3 rounded-xl bg-white text-neutral-700 hover:text-[#0F0F10] hover:bg-neutral-100 border border-neutral-200/90 transition-all shadow-2xs"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Circular Profile Photo with Animated Spaced Contour Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center py-6"
          >
            <div className="relative flex items-center justify-center">
              
              {/* Outer Animated Circular Contour Ring 1 (Dashed Lime & Dark Accent) */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [0.98, 1.03, 0.98],
                }}
                transition={{
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute w-[122%] h-[122%] rounded-full border-2 border-dashed border-[#B8FF2C] opacity-80 pointer-events-none"
              />

              {/* Outer Animated Circular Contour Ring 2 (Subtle Pulse Border with Margin) */}
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1.03, 0.97, 1.03],
                }}
                transition={{
                  rotate: { duration: 45, repeat: Infinity, ease: "linear" },
                  scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute w-[132%] h-[132%] rounded-full border border-neutral-300/60 opacity-60 pointer-events-none"
              />

              {/* Glowing Aura Behind Avatar */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#B8FF2C]/30 via-emerald-400/20 to-transparent rounded-full blur-2xl transform scale-90" />

              {/* Circular Photo Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2.5 bg-white/70 backdrop-blur-md border border-white/90 shadow-2xl overflow-hidden flex items-center justify-center group z-10">
                <div className="relative w-full h-full rounded-full overflow-hidden border border-neutral-200/80 shadow-inner">
                  <Image
                    src="/avatar.jpg"
                    alt="João Gabriel Maia"
                    fill
                    priority
                    className="object-cover object-center rotate-[6.5deg] scale-[1.12] group-hover:scale-[1.16] transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
