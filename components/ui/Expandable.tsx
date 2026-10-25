"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * "Ver todas": expande no próprio lugar. O conteúdo extra fica no DOM (oculto), então não há salto
 * de layout nem perda de foco: o botão continua no mesmo lugar e o foco permanece nele.
 */
export function Expandable({
  children,
  extra,
  labelMais,
  labelMenos = "Ver menos",
}: {
  children: React.ReactNode;
  extra: React.ReactNode;
  labelMais: string;
  labelMenos?: string;
}) {
  const [aberto, setAberto] = useState(false);
  const id = useId();

  return (
    <div>
      {children}
      <div id={id} hidden={!aberto} className="mt-4">
        {extra}
      </div>
      <button
        type="button"
        aria-expanded={aberto}
        aria-controls={id}
        onClick={() => setAberto((v) => !v)}
        className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[#5b6b3e] bg-(color:--card) px-5 py-2 text-sm font-bold text-(color:--gt2) shadow-sm hover:bg-[#5b6b3e] hover:text-[#fbfcf3] transition-colors"
      >
        {aberto ? labelMenos : labelMais}
        <ChevronDown className={`w-4 h-4 transition-transform ${aberto ? "rotate-180" : ""}`} aria-hidden />
      </button>
    </div>
  );
}
