/** Detalhes gráficos em verde: pílula com seta longa e selo circular com monograma */

export function ArrowPill({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex h-7 w-20 sm:h-9 sm:w-28 items-center rounded-full border-2 border-[#7a8c57] px-3 text-[#7a8c57] ${className}`}
    >
      <svg viewBox="0 0 80 12" className="h-3 w-full" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M0 6h78M72 1l6 5-6 5" />
      </svg>
    </span>
  );
}

export function MonogramBadge({
  className = "",
  size = 44,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      aria-hidden
      style={{ width: size, height: size }}
      className={`inline-flex shrink-0 items-center justify-center rounded-full border-2 border-[#7a8c57] font-condensed text-[#7a8c57] ${className}`}
    >
      <span style={{ fontSize: size * 0.42 }} className="leading-none tracking-wide">
        JM
      </span>
    </span>
  );
}
