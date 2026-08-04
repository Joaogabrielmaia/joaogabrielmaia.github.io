"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Compass, Cpu, Target, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Discovery & Requisitos",
    description: "Levantamento de requisitos e entendimento das necessidades do projeto.",
  },
  {
    icon: Target,
    title: "Gestão Ágil",
    description: "Organização e acompanhamento de entregas utilizando Scrum e Kanban.",
  },
  {
    icon: Cpu,
    title: "IA & Automação",
    description: "Uso de APIs de Inteligência Artificial e automação de fluxos.",
  },
  {
    icon: Rocket,
    title: "Engenharia de Software",
    description: "Desenvolvimento de aplicações web com Next.js, Node.js, TypeScript e PostgreSQL.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Sobre"
          title="Engenharia de Software e Gestão de Projetos"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Biography Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#B8FF2C]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <p className="text-base sm:text-lg font-normal text-[#0F0F10] leading-relaxed">
                Graduando em Engenharia de Software pela{" "}
                <span className="font-semibold text-[#0F0F10]">PUC Minas</span>. Atuo no
                desenvolvimento de software, participando do levantamento de requisitos,
                organização de tarefas com metodologias ágeis e implementação de
                aplicações web.
              </p>

              {/* Direcionamento Profissional */}
              <div className="p-5 rounded-2xl bg-[#0F0F10] text-[#FAFAFA] border border-neutral-800 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#B8FF2C] text-[#0F0F10] shrink-0 font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#B8FF2C] mb-1.5 font-semibold">
                    Direcionamento Profissional
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                    Atualmente concentro minha evolução em Gestão de Projetos e Produtos. Após meu primeiro contato com a área na graduação, aprofundei meus estudos em Scrum, PMBOK, Gestão de Produtos, Business Intelligence e Inteligência Artificial aplicada à otimização de processos e apoio à tomada de decisões, direcionando minha carreira para a gestão estratégica de projetos e produtos, conectando tecnologia, pessoas e objetivos de negócio.
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
