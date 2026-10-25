import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Code2, Download, FlaskConical, Kanban } from "lucide-react";
import { ArrowPill, MonogramBadge } from "./ui/Decor";
import { getContent } from "@/content";
import { ui } from "@/content/ui";
import { routes } from "@/content/routes";
import type { Lang } from "@/content/lang";

const icones = { code: Code2, bot: Bot, teste: FlaskConical, metodo: Kanban } as const;

export function Hero({ lang }: { lang: Lang }) {
  const { profile } = getContent(lang);
  const t = ui[lang].hero;
  const r = routes(lang);

  return (
    <section aria-labelledby="titulo-hero" className="relative pt-28 sm:pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Faixa superior */}
        <div className="flex items-center justify-between border-y border-black/20 py-2.5 font-display text-lg sm:text-3xl text-neutral-500">
          <span lang="en">
            {t.strip}
            <b className="font-bold">{t.stripBold}</b>
          </span>
          <b className="hidden sm:inline font-bold">2026</b>
          <ArrowPill />
        </div>

        {/* Título gigante gravado + script laranja */}
        <div className="relative mt-16 sm:mt-24">
          <span
            aria-hidden
            className="script-in font-script absolute -top-10 sm:-top-20 left-0 z-10 text-5xl sm:text-8xl text-[#F29A0F] pointer-events-none select-none"
          >
            {t.script}
          </span>

          <div className="absolute right-0 -top-2 sm:top-0 hidden sm:flex flex-col items-end gap-3">
            <MonogramBadge size={56} />
          </div>

          <h1
            id="titulo-hero"
            className="deboss font-display font-extrabold uppercase leading-[0.86] tracking-[-0.04em] text-[17vw] sm:text-[15vw] lg:text-[13.5rem]"
          >
            <span aria-hidden>
              João
              <br />
              Maia
            </span>
            <span className="sr-only">{profile.hero.titulo}</span>
          </h1>
        </div>

        {/* Subtítulo, resumo e ações */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="font-display text-xl sm:text-2xl font-bold text-(color:--gt)">{profile.hero.subtitulo}</p>
            <p className="mt-3 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-700">{profile.hero.frase}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={r.projects}
                className="group inline-flex items-center gap-2 rounded-sm bg-[#F29A0F] px-6 py-3 text-sm font-bold text-[#161616] hover:bg-[#d98200] transition-colors"
              >
                {t.viewProjects}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <a
                href="/cv.pdf"
                download="Joao_Gabriel_CV.pdf"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-[#7a8c57] px-5 py-[10px] text-sm font-bold text-(color:--gt) hover:bg-[#5b6b3e] hover:text-[#fbfcf3] transition-colors"
              >
                <Download className="w-4 h-4" aria-hidden />
                {t.downloadCv}
              </a>
            </div>
          </div>
          <p className="inline-flex items-center gap-2 self-start rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-(color:--gt2) lg:justify-self-end">
            <span className="relative flex h-2.5 w-2.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7a8c57] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#7a8c57]" />
            </span>
            {profile.hero.selo}
          </p>
        </div>

        {/* Placa: foto + pontos-chave */}
        <div className="slab mt-12 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <div className="glass-card relative z-10 flex gap-4 p-5">
            <div className="relative aspect-[3/4] w-32 shrink-0">
              <div className="absolute inset-0 bg-[#F29A0F]/70 [clip-path:polygon(0_0,82%_0,100%_14%,100%_100%,0_100%)]" />
              <div className="absolute inset-[2px] overflow-hidden [clip-path:polygon(0_0,82%_0,100%_14%,100%_100%,0_100%)]">
                <Image src="/avatar.jpg" alt="João Gabriel Maia" fill priority sizes="200px" className="object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-display text-xs text-neutral-500">{profile.formacao.instituicao}</p>
              <p className="font-display font-extrabold leading-tight text-(color:--ink)">
                {lang === "pt" ? "Engenharia de Software" : "Software Engineering"}
              </p>
            </div>
          </div>

          <ul className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {profile.pontos.map((p) => {
              const Icone = icones[p.icone];
              return (
                <li key={p.titulo} className="glass-card flex flex-col gap-3 p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#7a8c57]/20 text-(color:--gt2)">
                    <Icone className="h-5 w-5" aria-hidden />
                  </span>
                  <h2 className="font-condensed text-3xl uppercase leading-none text-(color:--gt)">{p.titulo}</h2>
                  <p className="text-sm leading-snug text-neutral-700">{p.texto}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
