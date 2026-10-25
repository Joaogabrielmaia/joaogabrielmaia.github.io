"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkle } from "lucide-react";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Áreas", href: "/#areas" },
  { name: "Projetos", href: "/projetos" },
  { name: "Experiência", href: "/#experiencia" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/#contato" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1.5 font-display text-xl font-extrabold tracking-tight text-[#161616]">
      João Maia
      <Sparkle className="w-3.5 h-3.5 text-[#F29A0F] fill-[#F29A0F]" aria-hidden />
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav py-3" : "bg-[#dcdcda]/60 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Logo />

          <nav aria-label="Principal" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] font-semibold uppercase tracking-wider text-neutral-800 hover:text-[#F29A0F] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contato"
            className="hidden sm:inline-flex rounded-sm bg-[#F29A0F] px-4 py-2 text-xs font-bold text-[#161616] hover:bg-[#d98200] transition-colors"
          >
            Falar comigo
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 text-[#161616]"
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <Menu className="w-6 h-6" aria-hidden />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[60] bg-[#dcdcda] flex flex-col"
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-5">
              <Logo />
              <button onClick={() => setOpen(false)} className="p-2 text-[#161616]" aria-label="Fechar menu" autoFocus>
                <X className="w-6 h-6" aria-hidden />
              </button>
            </div>
            <nav aria-label="Principal (celular)" className="flex flex-col gap-5 px-6 pt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl font-extrabold tracking-tight text-[#161616] hover:text-[#F29A0F] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
