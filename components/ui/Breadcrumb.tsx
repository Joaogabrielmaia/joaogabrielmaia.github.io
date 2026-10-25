import Link from "next/link";
import { BackLink } from "./BackLink";

export type Crumb = { rotulo: string; href?: string };

export function Breadcrumb({ itens, voltarPara, ariaLabel, voltar }: { itens: Crumb[]; voltarPara: string; ariaLabel: string; voltar: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 pb-6">
      <nav aria-label={ariaLabel} className="text-sm text-neutral-600">
        <ol className="flex flex-wrap items-center gap-2">
          {itens.map((c, i) => (
            <li key={c.rotulo} className="flex items-center gap-2">
              {c.href ? (
                <Link href={c.href} className="hover:text-[#F29A0F] underline-offset-2 hover:underline">
                  {c.rotulo}
                </Link>
              ) : (
                <span aria-current="page" className="font-semibold text-(color:--ink)">
                  {c.rotulo}
                </span>
              )}
              {i < itens.length - 1 && <span aria-hidden>/</span>}
            </li>
          ))}
        </ol>
      </nav>
      <BackLink fallback={voltarPara}>{voltar}</BackLink>
    </div>
  );
}
