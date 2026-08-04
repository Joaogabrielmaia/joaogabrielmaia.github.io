"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Compass, Kanban, Bot, Code2, Check } from "lucide-react";

const skillCategories = [
  {
    category: "Discovery & Requisitos",
    icon: Compass,
    accent: "border-[#0F0F10]/20",
    skills: [
      "Discovery",
      "Levantamento de Requisitos",
      "Scrum",
      "Kanban",
      "Mapeamento de Processos",
      "Especificação Funcional",
      "Alinhamento com Stakeholders",
    ],
  },
  {
    category: "Gestão Ágil",
    icon: Kanban,
    accent: "border-blue-500/20",
    skills: [
      "Scrum Framework",
      "Kanban",
      "Planejamento de Sprints",
      "Refinamento de Backlog",
      "Métricas Ágeis (Velocity/Burndown)",
      "Gestão de Entregas",
    ],
  },
  {
    category: "IA & Automação",
    icon: Bot,
    accent: "border-[#B8FF2C]/50",
    skills: [
      "OpenAI API",
      "Claude API",
      "Gemini API",
      "Agentes de IA",
      "Prompt Engineering",
      "Arquitetura RAG",
      "n8n",
      "Automação de Processos",
    ],
  },
  {
    category: "Engenharia & Dados",
    icon: Code2,
    accent: "border-purple-500/20",
    skills: [
      "Next.js 15",
      "React",
      "Node.js",
      "TypeScript",
      "Express",
      "Prisma ORM",
      "PostgreSQL",
      "Power BI",
      "SQL",
      "Microsoft Excel",
      "Git & GitHub",
    ],
  },
];

export function Skills() {
  return (
    <section id="competencias" className="py-24 relative overflow-hidden bg-neutral-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Competências"
          title="Conhecimentos Técnicos e Práticas Ágeis"
          description="Competências aplicadas em desenvolvimento de software, gestão ágil e análise de dados."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card p-8 rounded-3xl relative overflow-hidden group ${cat.accent}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-[#0F0F10] text-[#FAFAFA] shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F0F10]">
                      {cat.category}
                    </h3>
                    <span className="text-xs text-neutral-500 font-mono">
                      {cat.skills.length} Habilidades
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 text-neutral-800 text-xs font-semibold border border-neutral-200/90 shadow-2xs hover:border-[#B8FF2C] hover:bg-[#0F0F10] hover:text-[#FAFAFA] transition-all duration-200 cursor-default group/skill"
                    >
                      <Check className="w-3.5 h-3.5 text-[#B8FF2C] group-hover/skill:scale-110 transition-transform" />
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
