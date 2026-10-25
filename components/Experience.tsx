"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Building2, Laptop, GraduationCap } from "lucide-react";

const experiences = [
  {
    year: "2026",
    period: "2026 — Presente",
    role: "Desenvolvedor Full Stack — Projetos de Software",
    company: "Atuação Autônoma / Projetos em Equipe",
    icon: Laptop,
    badge: "Atual",
    description:
      "Desenvolvimento de aplicações web Full Stack (Node.js, Express, Next.js, TypeScript, React). Atuação em decisões técnicas, arquitetura de software, levantamento de requisitos, regras de negócio, modelagem de banco de dados relacional (PostgreSQL/SQLite), APIs REST, integrações de IA, automações, testes e facilitação com Scrum em projetos para clientes.",
    tags: ["Desenvolvimento Full Stack", "Arquitetura Web", "APIs REST", "Banco de Dados", "IA & Automação", "Scrum"],
  },
  {
    year: "2025",
    period: "jul/2025 — mar/2026",
    role: "Aprendiz de Suporte de TI",
    company: "Hotmart",
    icon: Building2,
    badge: "Corporativo",
    description:
      "Gerenciamento de chamados via Jira, suporte técnico a usuários internos, participação em rollouts corporativos, automações de suporte, administração de MDM (Workspace ONE) e infraestrutura de TI.",
    tags: ["Jira", "Suporte a Sistemas", "Workspace ONE (MDM)", "Processos de TI"],
  },
  {
    year: "2023",
    period: "2023 — 2027",
    role: "Início da Graduação em Engenharia de Software",
    company: "PUC Minas",
    icon: GraduationCap,
    badge: "Formação",
    description:
      "Ingresso no bacharelado em Engenharia de Software. Estudo de algoritmos, arquitetura de software, bancos de dados e participação em projetos práticos interdisciplinares.",
    tags: ["Engenharia de Software", "Projetos Práticos", "Algoritmos"],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Experiência"
          title="Linha do Tempo Profissional"
          description="Histórico de atuação técnica e acadêmica."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mt-4">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative border-t-2 border-[#7a8c57] pt-6"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-condensed text-6xl leading-none text-[#F29A0F]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#7a8c57] px-3 py-1 text-[11px] font-bold text-[#5b6b3e]">
                    <Icon className="w-3.5 h-3.5" />
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-tight text-[#5b6b3e] mb-1">
                  {item.role}
                </h3>
                <p className="text-sm font-semibold text-neutral-700">{item.company}</p>
                <p className="text-sm text-neutral-500 mb-4">{item.period}</p>

                <p className="text-sm italic text-[#5b6b3e]/90 leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/70 text-neutral-700 border border-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
