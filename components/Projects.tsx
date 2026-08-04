"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { ProjectModal, ProjectData } from "./ProjectModal";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./ui/Icons";

const projectsList: ProjectData[] = [
  {
    id: "gerencie-ja",
    title: "GerêncieJá",
    subtitle: "Sistema de Gestão de Projetos e Métricas Ágeis",
    description:
      "Plataforma para acompanhamento de tarefas, métricas de entregas (Lead Time, Cycle Time, Velocity) e gráficos de burndown em sprints.",
    longDescription:
      "O GerêncieJá foi desenvolvido para facilitar a gestão de tarefas e a visibilidade de métricas ágeis. Permite acompanhar prazos, alocação de equipe, distribuição de tarefas por prioridade e gráficos de desempenho de sprint.",
    image: "/projects/gerencie-ja.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    features: [
      "Indicadores de Performance: Lead Time, Cycle Time, Velocity & Throughput",
      "Quadros de Distribuição de Status e Tarefas por Prioridade",
      "Acompanhamento de Burndown da Sprint Ativa",
      "Gestão de Projetos e Tarefas da Equipe",
    ],
    metrics: [
      "Visualização completa do fluxo de trabalho da equipe",
    ],
    demoUrl: "https://gerencieja.onrender.com/projects",
    githubUrl: "https://github.com/Joaogabrielmaia/GerencieJa",
    isHero: true,
  },
  {
    id: "pm-copilot",
    title: "PM Copilot",
    subtitle: "Assistente de IA para Gestão de Projetos",
    description:
      "Sistema baseado em Inteligência Artificial para auxiliar no planejamento, priorização de backlog, análise de sprints e estruturação de reuniões.",
    longDescription:
      "O PM Copilot oferece templates inteligentes para apoiar a organização de projetos. Auxilia na elaboração de planos de ação, análise de riscos, planejamento de sprints e geração automatizada de atas e requisitos.",
    image: "/projects/pm-copilot.png",
    tags: ["OpenAI API", "Claude API", "Python", "Node.js", "Next.js", "Prompt Engineering"],
    features: [
      "Templates para Análise de Sprint, Plano de Ação e Matriz de Riscos",
      "Ferramentas de Priorização de Backlog (RICE / MoSCoW)",
      "Planejamento de Reuniões e Geração de Atas",
      "Gerador de User Stories e Critérios de Aceitação",
    ],
    metrics: [
      "Apoio prático na documentação e organização de projetos",
    ],
    demoUrl: "https://pmcopilot.onrender.com/",
    githubUrl: "https://github.com/Joaogabrielmaia/PMCopilot",
  },
  {
    id: "power-bi",
    title: "Dashboard Executivo Power BI",
    subtitle: "Analytics de Indicadores de Projetos",
    description:
      "Dashboard executivo para acompanhamento visual de desvio financeiro, budget, custo por projeto, velocidade de sprint e saúde dos projetos.",
    longDescription:
      "Dashboard desenvolvido para acompanhamento visual de projetos. Consolida métricas de orçamento x custo real, evolução de velocidade por sprint, bugs por projeto, alocação de equipe e distribuição de saúde financeira dos projetos.",
    image: "/projects/powerbi-1.png",
    images: [
      "/projects/powerbi-1.png",
      "/projects/powerbi-2.png",
      "/projects/powerbi-3.png",
    ],
    tags: ["Power BI", "DAX", "SQL", "Microsoft Excel", "KPIs Executivos", "Data Modeling"],
    features: [
      "Visão 1: Índice de Satisfação, Lead Time, Custo Total x Budget & Bugs",
      "Visão 2: Gestão de Tarefas, Horas Estimadas x Trabalhadas & Prioridades",
      "Visão 3: Desvio Financeiro por Projeto, Budget & Saúde dos Projetos",
    ],
    metrics: [
      "Visualização consolidada de indicadores de desempenho, recursos e orçamento",
    ],
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const heroProject = projectsList.find((p) => p.isHero) || projectsList[0];
  const gridProjects = projectsList.filter((p) => !p.isHero);

  return (
    <section id="projetos" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Projetos"
          title="Projetos Práticos"
          description="Desenvolvo aplicações web focadas em problemas práticos. Estou estudando Gestão de Projetos para unir esse conhecimento ao desenvolvimento de software e construir soluções mais completas."
        />

        {/* HERO PROJECT CARD (GERÊNCIEJÁ) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl overflow-hidden mb-12 border border-neutral-200/90 shadow-xl group relative"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#B8FF2C]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Info Column */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0F0F10] text-[#FAFAFA] mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#B8FF2C] animate-pulse" />
                  <span>Projeto Principal</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F0F10] tracking-tight mb-2">
                  {heroProject.title}
                </h3>
                <p className="text-sm font-semibold text-neutral-500 mb-4 font-mono">
                  {heroProject.subtitle}
                </p>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                  {heroProject.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {heroProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-neutral-100 text-neutral-800 border border-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-200/80">
                {heroProject.demoUrl && heroProject.demoUrl !== "#" && (
                  <a
                    href={heroProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0F0F10] text-[#FAFAFA] text-xs font-semibold hover:bg-black transition-all shadow-md group/btn"
                  >
                    <span>Acessar Demo</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B8FF2C] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(heroProject)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-neutral-800 text-xs font-semibold hover:bg-neutral-100 transition-all border border-neutral-200 shadow-2xs"
                >
                  <span>Ver Detalhes</span>
                </button>

                {heroProject.githubUrl && (
                  <a
                    href={heroProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white text-neutral-800 text-xs font-semibold hover:bg-neutral-100 transition-all border border-neutral-200 shadow-2xs"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Image Preview Column */}
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full bg-neutral-900 overflow-hidden border-l border-neutral-200/60">
              <Image
                src={heroProject.image}
                alt={heroProject.title}
                fill
                className="object-cover object-left-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white/20 lg:to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* 2 OTHER PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image header */}
                <div className="relative w-full h-56 bg-neutral-900 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10]/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-[#0F0F10] mb-1 group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-500 mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-neutral-100 text-neutral-700 border border-neutral-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer actions */}
              <div className="px-6 sm:px-8 pb-6 pt-2 flex items-center justify-between border-t border-neutral-100">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-[#0F0F10] hover:underline flex items-center gap-1"
                >
                  Ver Detalhes
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0F0F10]" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-neutral-600 hover:text-[#0F0F10] hover:bg-neutral-100 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
