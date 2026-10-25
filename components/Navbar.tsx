"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkle } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";
import { LangSwitch } from "./ui/LangSwitch";
import { ui } from "@/content/ui";
import { routes } from "@/content/routes";
import type { Lang } from "@/content/lang";

export function Navbar({ lang }: { lang: Lang }) {
  const t = ui[lang].nav;
  const r = routes(lang);
  const navLinks = [
    { name: t.home, href: r.home },
    { name: t.areas, href: r.areas },
    { name: t.projects, href: r.projects },
    { name: t.experience, href: r.experience },
    { name: t.about, href: r.about },
    { name: t.contact, href: r.contact },
  ];

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

  const logo = (
    <Link href={r.home} className="flex items-center gap-1.5 font-display text-xl font-extrabold tracking-tight text-(color:--ink)">
      João Maia
      <Sparkle className="w-3.5 h-3.5 text-[#F29A0F] fill-[#F29A0F]" aria-hidden />
    </Link>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav py-3" : "bg-(color:--paper)/60 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {logo}

          <nav aria-label={t.main} className="hidden lg:flex items-center gap-7">
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

          <div className="flex items-center gap-2">
            <LangSwitch lang={lang} label={t.otherLang} short={t.otherLangShort} />
            <ThemeToggle labelToDark={t.toDark} labelToLight={t.toLight} />
            <Link
              href={r.contact}
              className="hidden sm:inline-flex rounded-sm bg-[#F29A0F] px-4 py-2 text-xs font-bold text-[#161616] hover:bg-[#d98200] transition-colors"
            >
              {t.cta}
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-(color:--ink)"
              aria-label={t.openMenu}
              aria-expanded={open}
            >
              <Menu className="w-6 h-6" aria-hidden />
            </button>
          </div>
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
            aria-label={t.menu}
            className="fixed inset-0 z-[60] bg-(color:--paper) flex flex-col"
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-5">
              {logo}
              <button onClick={() => setOpen(false)} className="p-2 text-(color:--ink)" aria-label={t.closeMenu} autoFocus>
                <X className="w-6 h-6" aria-hidden />
              </button>
            </div>
            <nav aria-label={t.mainMobile} className="flex flex-col gap-5 px-6 pt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl font-extrabold tracking-tight text-(color:--ink) hover:text-[#F29A0F] transition-colors"
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
