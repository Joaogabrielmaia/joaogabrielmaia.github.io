import type { ReactNode } from "react";

type Variant = "tech" | "area" | "area-rel" | "destaque";

const styles: Record<Variant, string> = {
  tech: "bg-white/80 text-neutral-700 border border-white font-mono",
  area: "bg-[#F29A0F] text-[#161616] font-bold",
  "area-rel": "border border-[#7a8c57] text-[#5b6b3e] font-semibold",
  destaque: "bg-[#7a8c57]/15 text-[#4b5a30] font-semibold",
};

export function Chip({ children, variant = "tech" }: { children: ReactNode; variant?: Variant }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] leading-none ${styles[variant]}`}>
      {children}
    </span>
  );
}
