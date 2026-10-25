/** Índice "Nesta página": lateral fixo no desktop, recolhido (details) no celular. */
export function Toc({ itens }: { itens: { id: string; rotulo: string }[] }) {
  const lista = (
    <ol className="space-y-1 border-l-2 border-[#7a8c57]/30 text-sm">
      {itens.map((i, k) => (
        <li key={i.id}>
          <a
            href={`#${i.id}`}
            className="-ml-[2px] flex items-center gap-3 border-l-2 border-transparent py-1.5 pl-3 text-neutral-700 no-underline transition-colors hover:border-[#F29A0F] hover:text-[#161616] focus-visible:border-[#F29A0F] focus-visible:outline-none focus-visible:text-[#161616]"
          >
            <span aria-hidden className="font-mono text-[11px] text-[#7a8c57]">{String(k + 1).padStart(2, "0")}</span>
            {i.rotulo}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <details className="lg:hidden mb-8 rounded-2xl bg-white/70 px-5 py-3 border border-white">
        <summary className="cursor-pointer font-display font-bold text-[#5b6b3e]">Nesta página</summary>
        <nav aria-label="Nesta página" className="pt-3">{lista}</nav>
      </details>
      <nav aria-label="Nesta página" className="hidden lg:block sticky top-28 self-start">
        <p className="font-display font-bold text-[#5b6b3e] mb-3">Nesta página</p>
        {lista}
      </nav>
    </>
  );
}
