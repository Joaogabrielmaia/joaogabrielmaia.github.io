"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Compass, Cpu, Target, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Rocket,
    title: "Engenharia Full Stack",
    description: "Desenvolvimento web moderno de ponta a ponta com JavaScript, TypeScript, React, Next.js e Node.js.",
  },
  {
    icon: Cpu,
    title: "Arquitetura & Dados",
    description: "Modelagem relacional de dados (PostgreSQL/SQLite), desenvolvimento de APIs REST e integrações.",
  },
  {
    icon: Target,
    title: "IA & Automação",
    description: "Integração de APIs de Inteligência Artificial, engenharia de prompts, agentes e automação de processos.",
  },
  {
    icon: Compass,
    title: "Requisitos & Negócio",
    description: "Levantamento de requisitos, regras de negócio, especificações funcionais e metodologias ágeis (Scrum).",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Sobre"
          title="Engenharia de Software e Desenvolvimento Full Stack"
        />

        <div className="slab grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Biography Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F29A0F]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <p className="text-base sm:text-lg font-normal text-[#0F0F10] leading-relaxed">
                Graduando em Engenharia de Software pela{" "}
                <span className="font-semibold text-[#0F0F10]">PUC Minas</span>, construo aplicações web Full Stack unindo arquitetura de software, engenharia de dados e Inteligência Artificial. Minha atuação abrange desde a modelagem de banco de dados e desenvolvimento de APIs REST no backend até a criação de interfaces reativas no frontend, aplicando conhecimentos de requisitos e metodologias ágeis como aceleradores de entregas técnicas.
              </p>

              {/* Visão Técnica & Engenharia Full Stack */}
              <div className="p-5 rounded-2xl bg-[#0F0F10] text-[#FAFAFA] border border-neutral-800 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#F29A0F] text-[#0F0F10] shrink-0 font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#F29A0F] mb-1.5 font-semibold">
                    Visão Técnica & Engenharia Full Stack
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                    Minha trajetória é focada no desenvolvimento de software de ponta a ponta. Atuo na construção de aplicações robustas com JavaScript, TypeScript, React, Next.js, Node.js e banco de dados relacional, integrando modelos de IA e automações para resolver problemas complexos. Compreender requisitos, regras de negócio e dinâmicas ágeis (Scrum/Kanban) amplia minha capacidade de arquitetar soluções completas e alinhadas aos objetivos de produtos reais.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-5 rounded-2xl flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-neutral-100 text-[#0F0F10] border border-neutral-200 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0F0F10] mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {pillar.description}
                    </p>
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
