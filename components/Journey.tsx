"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Briefcase, GraduationCap, Crosshair, CheckCircle2 } from "lucide-react";

export function Journey() {
  return (
    <section id="jornada" className="py-24 relative overflow-hidden bg-neutral-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Minha Jornada"
          title="Trajetória e Formação"
          description="Desenvolvimento de software e estudo contínuo em gestão de entregas."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Atualmente */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#B8FF2C]/10 rounded-full blur-xl group-hover:bg-[#B8FF2C]/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-semibold uppercase px-3 py-1 rounded-full bg-[#0F0F10] text-[#FAFAFA] tracking-wider">
                  Atualmente
                </span>
                <div className="p-2 rounded-xl bg-neutral-100 text-[#0F0F10]">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0F0F10] mb-2">
                Software Engineer Full Stack
              </h3>

              <ul className="space-y-3 mt-4">
                {[
                  "Desenvolvimento Full Stack",
                  "Scrum",
                  "Discovery",
                  "Levantamento de Requisitos",
                  "Inteligência Artificial",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs text-neutral-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0F0F10] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-neutral-500">Status</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Ativo
              </span>
            </div>
          </motion.div>

          {/* Card 2: Formação */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-semibold uppercase px-3 py-1 rounded-full bg-[#0F0F10] text-[#FAFAFA] tracking-wider">
                  Formação
                </span>
                <div className="p-2 rounded-xl bg-neutral-100 text-[#0F0F10]">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0F0F10] mb-1">
                PUC Minas
              </h3>
              <p className="text-sm font-semibold text-neutral-800 mb-2">
                Engenharia de Software
              </p>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 text-xs font-mono mb-6">
                <span>2023 — 2027</span>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed">
                Graduação focada em desenvolvimento de software, estruturas de dados,
                arquitetura de sistemas e projetos práticos.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-neutral-500">Instituição</span>
              <span className="text-xs font-bold text-[#0F0F10]">PUC Minas</span>
            </div>
          </motion.div>

          {/* Card 3: Foco */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#B8FF2C]/20 rounded-full blur-xl group-hover:bg-[#B8FF2C]/30 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-semibold uppercase px-3 py-1 rounded-full bg-[#0F0F10] text-[#FAFAFA] tracking-wider">
                  Foco
                </span>
                <div className="p-2 rounded-xl bg-neutral-100 text-[#0F0F10]">
                  <Crosshair className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0F0F10] mb-4">
                Áreas de Estudo
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {[
                  "Estudos em Gestão de Projetos",
                  "Software Engineering",
                  "Agile Frameworks",
                  "Artificial Intelligence",
                  "Process Automation",
                  "Data Analytics",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#0F0F10] text-[#FAFAFA] hover:bg-[#B8FF2C] hover:text-[#0F0F10] transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-neutral-500">Objetivo</span>
              <span className="text-xs font-bold text-[#0F0F10]">Evolução em Gestão de Projetos</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
