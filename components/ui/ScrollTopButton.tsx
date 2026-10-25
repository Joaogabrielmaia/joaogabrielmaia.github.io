"use client";

import { ArrowUp } from "lucide-react";

export function ScrollTopButton({ label }: { label: string }) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 hover:border-[#F29A0F] hover:text-white"
    >
      {label} <ArrowUp className="h-3.5 w-3.5" aria-hidden />
    </button>
  );
}
