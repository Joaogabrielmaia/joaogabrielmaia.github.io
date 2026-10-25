import { ArrowPill } from "./Decor";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  centered?: boolean;
  titleId?: string;
}

// Palavra em script laranja que "assina" o título de cada seção
const scriptWords: Record<string, string> = {
  Sobre: "about",
  Jornada: "journey",
  Projetos: "craft",
  Competências: "skills",
  Experiência: "path",
  "Formação": "study",
  Certificações: "proof",
  Contato: "hello",
  "Áreas": "áreas",
  Perfil: "me",
};

export function SectionHeader({
  badge,
  title,
  description,
  centered = false,
  titleId,
}: SectionHeaderProps) {
  const script = scriptWords[badge] ?? badge.toLowerCase();

  return (
    <div
      className={`mb-12 ${centered ? "text-center max-w-3xl mx-auto" : ""}`}
    >
      {/* Faixa entre duas linhas, como no cabeçalho do modelo */}
      <div className="flex items-center justify-between border-y border-black/20 py-2.5 mb-10 font-display text-lg sm:text-2xl text-neutral-500">
        <span>
          <b className="font-bold">{badge}</b>
        </span>
        <span className="hidden sm:inline font-bold">2026</span>
        <ArrowPill />
      </div>

      <div className="relative">
        <span
          aria-hidden
          className="font-script absolute -top-11 sm:-top-16 left-0 text-5xl sm:text-7xl text-[#F29A0F] -rotate-6 pointer-events-none select-none"
        >
          {script}
        </span>
        <h2 id={titleId} className="relative max-w-5xl font-condensed uppercase font-normal text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight text-[#7a8c57]">
          {title}
        </h2>
      </div>

      {description && (
        <p
          className={`mt-6 max-w-2xl text-base sm:text-lg text-neutral-600 leading-relaxed ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
