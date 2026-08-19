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
    accent: "border-[#B8FF2C]/50",
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
    <section id="competencias" className="py-24 relative overflow-hidden bg-neutral-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Competências"
          title="Conhecimentos Técnicos e Engenharia"
          description="Linguagens, frameworks, bancos de dados, ferramentas de inteligência artificial, automação e práticas ágeis aplicadas ao desenvolvimento de software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden group ${cat.accent}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-[#0F0F10] text-[#FAFAFA] shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F0F10]">
                      {cat.category}
                    </h3>
                    <span className="text-xs text-neutral-500 font-mono">
                      {cat.skills.length} Habilidades
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 text-neutral-800 text-xs font-semibold border border-neutral-200/90 shadow-2xs hover:border-[#B8FF2C] hover:bg-[#0F0F10] hover:text-[#FAFAFA] transition-all duration-200 cursor-default group/skill"
                    >
                      <Check className="w-3 h-3 text-[#B8FF2C] group-hover/skill:scale-110 transition-transform" />
                      <span>{skill}</span>
                    </div>
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
