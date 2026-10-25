/** Índice "Nesta página": lateral fixo no desktop, recolhido (details) no celular. */
export function Toc({ itens }: { itens: { id: string; rotulo: string }[] }) {
  const lista = (
    <ol className="space-y-2 text-sm">
      {itens.map((i) => (
        <li key={i.id}>
          <a href={`#${i.id}`} className="text-neutral-700 hover:text-[#F29A0F] hover:underline underline-offset-2">
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
