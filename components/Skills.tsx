"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Compass, Kanban, Bot, Code2, Database, Wrench, Check } from "lucide-react";

const skillCategories = [
  {
    category: "Desenvolvimento Full Stack",
    icon: Code2,
    accent: "border-[#0F0F10]/30",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "HTML5 / CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Banco de Dados & APIs",
    icon: Database,
    accent: "border-blue-500/20",
    skills: [
      "PostgreSQL",
      "SQLite",
      "SQL",
      "Prisma ORM",
      "APIs REST",
      "Integrações HTTP",
      "Modelagem Relacional",
    ],
  },
  {
    category: "IA & Automação",
    icon: Bot,
    accent: "border-[#F29A0F]/50",
    skills: [
      "Groq API",
      "OpenAI API",
      "IA Generativa",
      "Agentes de IA",
      "Prompt Engineering",
      "n8n",
      "Automação de Processos",
    ],
  },
  {
    category: "Engenharia & Ferramentas",
    icon: Wrench,
    accent: "border-purple-500/20",
    skills: [
      "Git",
      "GitHub",
      "Power BI",
      "DAX",
      "Jira",
      "VS Code",
      "Data Modeling",
    ],
  },
  {
    category: "Metodologias Ágeis",
    icon: Kanban,
    accent: "border-emerald-500/20",
    skills: [
      "Scrum Framework",
      "Kanban",
      "Planejamento de Sprints",
      "Refinamento de Backlog",
      "Métricas Ágeis (Velocity/Burndown)",
    ],
  },
  {
    category: "Requisitos & Negócio",
    icon: Compass,
    accent: "border-amber-500/20",
    skills: [
      "Discovery",
      "Levantamento de Requisitos",
      "Regras de Negócio",
      "Especificação Funcional",
      "Alinhamento com Stakeholders",
    ],
  },
];

export function Skills() {
  return (
    <section id="competencias" className="py-24 relative overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Competências"
          title="Conhecimentos Técnicos e Engenharia"
          description="Linguagens, frameworks, bancos de dados, ferramentas de inteligência artificial, automação e práticas ágeis aplicadas ao desenvolvimento de software."
        />

        <div className="slab slab-green flex flex-col gap-4">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="grid grid-cols-1 md:grid-cols-[18rem_1fr] gap-4"
              >
                <div className="glass-card flex items-center gap-3 px-6 py-5 rounded-[1.75rem]">
                  <div className="p-2.5 rounded-xl bg-[#7a8c57] text-[#fbfcf3] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-condensed uppercase font-normal text-2xl leading-none text-[#5b6b3e]">
                      {cat.category}
                    </h3>
                    <span className="text-[11px] text-neutral-500 font-mono">
                      {cat.skills.length} habilidades
                    </span>
                  </div>
                </div>

                <div className="glass-card flex flex-wrap items-center gap-2 px-6 py-5 rounded-[1.75rem]">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-neutral-800 text-xs font-semibold border border-neutral-200 hover:border-[#F29A0F] hover:bg-[#F29A0F]/10 transition-colors cursor-default"
                    >
                      <Check className="w-3 h-3 text-[#7a8c57]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
