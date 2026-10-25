"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { switchLangPath } from "@/content/routes";
import type { Lang } from "@/content/lang";

/** Leva para a mesma página no outro idioma, mantendo o slug. */
export function LangSwitch({ lang, label, short }: { lang: Lang; label: string; short: string }) {
  const pathname = usePathname() ?? "/";
  const destino = switchLangPath(pathname, lang === "pt" ? "en" : "pt");
  return (
    <Link
      href={destino}
      hrefLang={lang === "pt" ? "en" : "pt-BR"}
      lang={lang === "pt" ? "en" : "pt-BR"}
      aria-label={`${short}: ${label}`}
      className="inline-flex h-9 items-center gap-1.5 rounded-full border-2 border-[#7a8c57] px-3 text-xs font-bold text-(color:--gt) transition-colors hover:bg-[#5b6b3e] hover:text-[#fbfcf3] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F29A0F]"
    >
      <Languages className="h-3.5 w-3.5" aria-hidden />
      {short}
    </Link>
  );
}
