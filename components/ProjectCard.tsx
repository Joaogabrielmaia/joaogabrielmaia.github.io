import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Chip } from "./ui/Chip";
import { getContent, projectCoverSrc } from "@/content";
import { ui } from "@/content/ui";
import { routes } from "@/content/routes";
import type { Lang } from "@/content/lang";
import type { Project } from "@/content/schema";

/** Cartão-resumo: um único link (o título), com a área inteira clicável via ::after. */
export function ProjectCard({ projeto, lang }: { projeto: Project; lang: Lang }) {
  const c = getContent(lang);
  const capa = projectCoverSrc(projeto);
  const principais = projeto.areas.filter((a) => a.nivel === "principal").slice(0, 2);

  return (
    <article className="glass-card group relative flex h-full flex-col overflow-hidden">
      <div className="relative aspect-video overflow-hidden bg-neutral-200">
        {capa ? (
          <Image
            src={capa}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center font-condensed text-5xl text-(color:--gt2)">{projeto.titulo}</div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-condensed uppercase font-normal text-3xl leading-none text-(color:--gt)">
          <Link
            href={routes(lang).project(projeto.slug)}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:ring-4 focus-visible:after:ring-[#F29A0F] focus-visible:after:rounded-[2rem]"
          >
            {projeto.titulo}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-neutral-700">{projeto.frase}</p>
        <div className="flex flex-wrap gap-1.5">
          {projeto.stack.slice(0, 4).map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {principais.map((a) => (
            <Chip key={a.area} variant="area">
              {c.roleBySlug(a.area)?.nomeCurto}
            </Chip>
          ))}
        </div>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-bold text-(color:--ink)" aria-hidden>
          {ui[lang].card.seeDetails}
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  );
}
