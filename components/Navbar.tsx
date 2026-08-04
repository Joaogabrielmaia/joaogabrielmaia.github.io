"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";

const navLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Jornada", href: "#jornada" },
  { name: "Projetos", href: "#projetos" },
  { name: "Competências", href: "#competencias" },
  { name: "Experiência", href: "#experiencia" },
  { name: "Certificações", href: "#certificacoes" },
  { name: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3 shadow-xs" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0F0F10] text-[#FAFAFA] flex items-center justify-center font-bold text-sm tracking-wider border border-neutral-800 group-hover:border-[#B8FF2C] transition-colors relative overflow-hidden">
              <span className="relative z-10">JG</span>
              <div className="absolute inset-0 bg-[#B8FF2C]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#0F0F10] tracking-tight group-hover:text-black transition-colors">
                João Gabriel
              </span>
              <span className="text-[11px] text-neutral-500 font-mono">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-neutral-200/80 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-neutral-700 hover:text-[#0F0F10] rounded-full hover:bg-neutral-100 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Disponível para Projetos
            </div>

            <a
              href="#contato"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[#0F0F10] text-[#FAFAFA] hover:bg-black hover:shadow-md transition-all border border-neutral-800"
            >
              Falar Comigo
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B8FF2C]" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-neutral-200 px-4 pt-4 pb-6 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg text-xs font-semibold bg-[#0F0F10] text-[#FAFAFA] flex items-center justify-center gap-2"
              >
                Falar Comigo
                <ArrowUpRight className="w-4 h-4 text-[#B8FF2C]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
