"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Calendar, Building2, Laptop, GraduationCap } from "lucide-react";

const experiences = [
  {
    year: "2026",
    period: "2026 — Presente",
    role: "Software Engineer",
    company: "Projetos Independentes",
    icon: Laptop,
    badge: "Atual",
    description:
      "Desenvolvimento de aplicações web utilizando Next.js, TypeScript e Node.js. Levantamento de requisitos, aplicação de práticas ágeis com Scrum e integração de Inteligência Artificial em soluções de software.",
    tags: ["Next.js", "TypeScript", "Scrum", "Discovery", "IA"],
  },
  {
    year: "2025",
    period: "2025 — 2026",
    role: "IT Support Apprentice",
    company: "Hotmart",
    icon: Building2,
    badge: "Corporativo",
    description:
      "Atendimento técnico e suporte a sistemas corporativos internos. Apoio na organização de chamados, suporte a equipes e apoio a processos operacionais de TI.",
    tags: ["Suporte a Sistemas", "Processos de TI", "SaaS"],
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

        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-200 sm:hidden" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center group"
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0F0F10] text-[#FAFAFA] border-4 border-[#FAFAFA] shadow-md flex items-center justify-center z-10 group-hover:bg-[#B8FF2C] group-hover:text-[#0F0F10] transition-colors">
                    <span className="w-2 h-2 rounded-full bg-current" />
                  </div>

                  {/* Content Container */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${isEven ? "sm:mr-auto sm:pr-4" : "sm:ml-auto sm:pl-4"}`}>
                    <div className="glass-card p-6 sm:p-8 rounded-3xl relative">
                      
                      {/* Year Badge & Period */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0F0F10] text-[#FAFAFA]">
                          <Calendar className="w-3.5 h-3.5 text-[#B8FF2C]" />
                          <span>{item.period}</span>
                        </div>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-neutral-100 text-neutral-600 font-semibold">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#0F0F10] mb-1">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 mb-4 font-mono">
                        <Icon className="w-4 h-4 text-neutral-700" />
                        <span>{item.company}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-neutral-100 text-neutral-700 border border-neutral-200/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
