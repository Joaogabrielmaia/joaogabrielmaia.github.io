import { SectionHeader } from "../ui/SectionHeader";
import { Expandable } from "../ui/Expandable";
import { certifications } from "@/content";
import type { Certification } from "@/content/schema";

function Cartao({ c }: { c: Certification }) {
  return (
    <li className="glass-card relative z-10 flex flex-col gap-2 p-6">
      <p className="font-mono text-xs text-neutral-600">{c.data}</p>
      <h3 className="font-display text-lg font-extrabold leading-snug text-[#161616]">{c.titulo}</h3>
      <p className="text-sm text-neutral-700">{c.emissor}</p>
      {c.urlCredencial && c.verificado && (
        <a
          href={c.urlCredencial}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-sm font-bold text-[#5b6b3e] underline underline-offset-2 hover:text-[#F29A0F]"
        >
          Ver credencial
        </a>
      )}
    </li>
  );
}

export function CertificationsSection() {
  const destaque = certifications.filter((c) => c.destaque);
  const demais = certifications.filter((c) => !c.destaque);

  return (
    <section id="certificacoes" aria-labelledby="cert-titulo" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          titleId="cert-titulo"
          badge="Certificações"
          title="Cursos e certificações"
          description={`${certifications.length} certificações concluídas, de 2023 a 2026. Quatro em destaque; as demais em “ver todas”.`}
        />
        <div className="slab slab-green">
          <Expandable
            labelMais={`Ver todas as ${certifications.length}`}
            labelMenos="Mostrar só as 4 em destaque"
            extra={<ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{demais.map((c) => <Cartao key={c.titulo} c={c} />)}</ul>}
          >
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">{destaque.map((c) => <Cartao key={c.titulo} c={c} />)}</ul>
          </Expandable>
        </div>
      </div>
    </section>
  );
}
