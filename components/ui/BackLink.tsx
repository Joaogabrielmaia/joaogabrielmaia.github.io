"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { veioDoSite } from "./NavTracker";

/**
 * Volta para onde a pessoa estava. Se ela já navegou dentro do site, usa o histórico
 * (o navegador restaura a posição de rolagem da home); senão, vai para a âncora de fallback.
 */
export function BackLink({
  fallback,
  children = "Voltar",
}: {
  fallback: string;
  children?: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <a
      href={fallback}
      onClick={(e) => {
        if (veioDoSite()) {
          e.preventDefault();
          router.back();
        }
      }}
      className="inline-flex items-center gap-2 text-sm font-semibold text-(color:--gt) hover:text-[#F29A0F] transition-colors"
    >
      <ArrowLeft className="w-4 h-4" aria-hidden />
      {children}
    </a>
  );
}
