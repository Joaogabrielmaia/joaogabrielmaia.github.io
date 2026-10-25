"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Expandable } from "./ui/Expandable";
import type { Project } from "@/content/schema";

type Print = Project["prints"][number];

export function Gallery({ slug, prints }: { slug: string; prints: Print[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [atual, setAtual] = useState(0);

  const abrir = (i: number) => {
    setAtual(i);
    dialogRef.current?.showModal();
  };
  const fechar = () => dialogRef.current?.close();
  const ir = (delta: number) => setAtual((i) => (i + delta + prints.length) % prints.length);

  const destaques = prints.map((p, i) => ({ p, i })).filter(({ p }) => p.destaque);
  const demais = prints.map((p, i) => ({ p, i })).filter(({ p }) => !p.destaque);

  const miniatura = ({ p, i }: { p: Print; i: number }) => (
    <li key={p.arquivo}>
      <button
        type="button"
        onClick={() => abrir(i)}
        className="group block w-full text-left rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F29A0F]"
      >
        <span className="block overflow-hidden rounded-2xl bg-white shadow-[0_14px_24px_-16px_rgba(0,0,0,0.5)]">
          <Image
            src={`/projects/${slug}/thumbs/${p.arquivo}.webp`}
            alt={p.legenda}
            width={640}
            height={Math.round((p.altura / p.largura) * 640)}
            loading="lazy"
            className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </span>
        <span className="mt-2 block text-xs leading-snug text-neutral-700">{p.legenda}</span>
      </button>
    </li>
  );

  const grade = (itens: typeof destaques) => (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{itens.map(miniatura)}</ul>
  );

  const p = prints[atual];

  return (
    <>
      {demais.length > 0 ? (
        <Expandable extra={grade(demais)} labelMais={`Ver todos os ${prints.length} prints`} labelMenos="Mostrar só os destaques">
          {grade(destaques)}
        </Expandable>
      ) : (
        grade(destaques)
      )}

      <dialog
        ref={dialogRef}
        aria-label="Visualização do print"
        className="m-auto max-h-[92vh] w-[min(1100px,94vw)] rounded-3xl border-0 bg-[#f4f4f1] p-0 backdrop:bg-black/70"
        onClick={(e) => e.target === dialogRef.current && fechar()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") ir(1);
          if (e.key === "ArrowLeft") ir(-1);
        }}
      >
        {p && (
          <div className="flex max-h-[92vh] flex-col">
            <div className="flex items-center justify-between gap-3 px-5 py-3">
              <p className="text-sm text-neutral-700">
                {atual + 1} de {prints.length}
              </p>
              <button
                type="button"
                onClick={fechar}
                autoFocus
                aria-label="Fechar"
                className="rounded-full p-2 hover:bg-black/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F29A0F]"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-auto px-5">
              <Image
                src={`/projects/${slug}/${p.arquivo}.webp`}
                alt={p.legenda}
                width={p.largura}
                height={p.altura}
                className="mx-auto h-auto w-full max-w-full rounded-xl"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <button type="button" onClick={() => ir(-1)} aria-label="Print anterior" className="rounded-full border-2 border-[#7a8c57] p-2 text-[#5b6b3e] hover:bg-[#5b6b3e] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F29A0F]">
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <p className="flex-1 text-center text-sm leading-snug text-neutral-800">{p.legenda}</p>
              <button type="button" onClick={() => ir(1)} aria-label="Próximo print" className="rounded-full border-2 border-[#7a8c57] p-2 text-[#5b6b3e] hover:bg-[#5b6b3e] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F29A0F]">
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
