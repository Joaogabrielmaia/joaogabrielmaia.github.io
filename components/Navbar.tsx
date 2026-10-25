"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkle } from "lucide-react";

const navLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Jornada", href: "#jornada" },
  { name: "Projetos", href: "#projetos" },
  { name: "Competências", href: "#competencias" },
  { name: "Experiência", href: "#experiencia" },
  { name: "Certificações", href: "#certificacoes" },
  { name: "Contato", href: "#contato" },
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-1.5 font-display text-xl font-extrabold tracking-tight text-[#161616]">
      João Maia
      <Sparkle className="w-3.5 h-3.5 text-[#F29A0F] fill-[#F29A0F]" />
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-wider text-neutral-700 hover:text-[#F29A0F] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden sm:inline-flex rounded-sm bg-[#F29A0F] px-4 py-2 text-xs font-bold text-[#161616] hover:bg-[#d98200] transition-colors"
          >
            Falar comigo
          </a>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 text-[#161616]"
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#dcdcda] flex flex-col"
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-5">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-[#161616]"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-5 px-6 pt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl font-extrabold tracking-tight text-[#161616] hover:text-[#F29A0F] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
