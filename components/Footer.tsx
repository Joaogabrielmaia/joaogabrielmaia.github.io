"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#4f5c35] text-[#f3f3f1] rounded-t-[3rem] pt-16 pb-12 border-t border-white/15 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/15">
          
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F29A0F] text-[#0F0F10] font-extrabold flex items-center justify-center text-sm tracking-wider">
                JG
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  João Gabriel Maia da Costa
                </h3>
                <p className="text-xs text-[#F29A0F] font-mono font-medium">
                  Software Engineer
                </p>
              </div>
            </div>

            <p className="text-xs text-[#e6ebd2] leading-relaxed max-w-md font-normal">
              Desenvolvimento de aplicações web Full Stack, arquitetura de sistemas e Inteligência Artificial para a construção de soluções escaláveis.
            </p>
          </div>

          {/* Column 2: Pillars */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#e6ebd2]">
              Áreas de Atuação
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300 font-medium">
              <li>Software Engineering</li>
              <li>Full Stack Web Development</li>
              <li>Artificial Intelligence & Automation</li>
              <li>Requisitos & Metodologias Ágeis</li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#e6ebd2]">
              Redes & Contato
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Joaogabrielmaia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-white/15 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/joãogabrielmaia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-white/15 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:Joaogabrielmaia092@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-xl bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-white/15 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#e6ebd2] font-mono">
            © {new Date().getFullYear()} João Gabriel Maia da Costa. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 text-xs text-neutral-300 hover:text-white hover:bg-neutral-800 border border-white/15 transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#F29A0F]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
