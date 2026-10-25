import type { Metadata } from "next";
import { projects, roles } from "@/content";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProjectsIndex } from "@/components/ProjectsIndex";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Todos os projetos: 7 estudos de caso documentados de ponta a ponta e o ERP Vortex. Filtre por competência.",
  alternates: { canonical: "/projetos" },
};

export default function ProjetosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <Breadcrumb itens={[{ rotulo: "Início", href: "/" }, { rotulo: "Projetos" }]} voltarPara="/#projetos" />
      <header className="border-y border-black/20 py-8">
        <h1 className="font-condensed uppercase font-normal text-6xl sm:text-8xl leading-[0.95] text-[#7a8c57]">Projetos</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-800">
          Cada projeto tem página própria, com telas, decisões, números reais e o que não foi validado. Use o filtro para ver só os projetos ligados a uma competência.
        </p>
      </header>
      <div className="mt-8">
        <ProjectsIndex projetos={projects} areas={roles.map((r) => ({ slug: r.slug, nomeCurto: r.nomeCurto }))} />
      </div>
    </div>
  );
}
