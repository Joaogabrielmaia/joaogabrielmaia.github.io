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
    subtitle: "Aplicação Full Stack para Gestão de Tarefas e Métricas Operacionais",
    description:
      "Aplicação Full Stack desenvolvida em Node.js e Express sob arquitetura MVC, utilizando SQLite3 para persistência relacional de dados e EJS para renderização server-side, oferecendo gerenciamento de tarefas, quadros Kanban e cálculo de métricas de sprint (Lead Time, Cycle Time, Velocity e Burndown).",
    longDescription:
      "O GerêncieJá é uma plataforma web full stack projetada para gerenciamento de fluxo de trabalho. A aplicação possui backend estruturado em Node.js e Express seguindo a arquitetura MVC, banco de dados relacional SQLite3 e renderização server-side com EJS, permitindo o acompanhamento de projetos, alocação de equipes e cálculo automatizado de métricas operacionais.",
    image: "/projects/gerencie-ja.png",
    tags: ["Node.js", "Express", "SQLite3", "EJS", "JavaScript", "Arquitetura MVC"],
    features: [
      "Arquitetura MVC desenvolvida em Node.js, Express e JavaScript",
      "Persistência e modelagem relacional de dados em banco de dados SQLite3",
      "Renderização dinâmica de visões server-side utilizando EJS",
      "Módulos para gestão de tarefas, quadros Kanban, metas e acompanhamento de sprints",
      "Cálculo e exibição de métricas operacionais (Lead Time, Cycle Time, Velocity e Burndown)",
    ],
    metrics: [
      "Visualização estruturada do fluxo de trabalho e métricas operacionais de desempenho",
    ],
    demoUrl: "https://gerencieja.onrender.com/projects",
    githubUrl: "https://github.com/Joaogabrielmaia/GerencieJa",
    isHero: true,
  },
  {
    id: "pm-copilot",
    title: "PM Copilot",
    subtitle: "Assistente Web de IA para Automação de Processos e Documentação Técnica",
    description:
      "Aplicação de Engenharia de Software desenvolvida em Node.js e Express, integrada à API da Groq (modelo Llama 3.1) para processamento de informações, geração automatizada de especificações técnicas, User Stories e análises de requisitos.",
    longDescription:
      "O PM Copilot é uma aplicação de Engenharia de Software + Inteligência Artificial construída para automatizar a geração de documentação e análise de requisitos. A solução conecta backend em Node.js e Express à API da Groq via SDK oficial, utilizando banco de dados SQLite (sql.js) para armazenamento de configurações e histórico, e engenharia de prompts estruturada para extração e síntese de informações.",
    image: "/projects/pm-copilot.png",
    tags: ["Node.js", "Express", "Groq API", "Llama 3.1", "SQLite", "Prompt Engineering"],
    features: [
      "Integração backend com a API da Groq (modelo Llama 3.1) via SDK oficial",
      "Engenharia de Prompt estruturada para geração automatizada de User Stories e especificações técnicas",
      "Persistência de histórico de sessões e configurações via banco de dados SQLite (sql.js)",
      "Endpoints de API REST para comunicação entre cliente e serviços de IA",
      "Interface web responsiva para interação fluida com o assistente inteligente",
    ],
    metrics: [
      "Processamento automatizado de requisições e geração sintética de especificações técnicas",
    ],
    demoUrl: "https://pmcopilot.onrender.com/",
    githubUrl: "https://github.com/Joaogabrielmaia/PMCopilot",
  },
  {
    id: "power-bi",
    title: "Dashboard Executivo Power BI",
    subtitle: "Analytics & Modelagem de Dados para Indicadores Operacionais",
    description:
      "Projeto de Business Intelligence e Data Analytics focado na modelagem relacional de dados, tratamento de bases complexas com SQL/Excel, desenvolvimento de medidas calculadas em DAX e criação de painéis executivos interativos.",
    longDescription:
      "Solução de Data Analytics desenvolvida para estruturar e visualizar indicadores operacionais e financeiros. Envolveu tratamento e higienização de dados, modelagem dimensional em esquema estrela, cálculos avançados em DAX e construção de relatórios executivos interativos no Power BI para apoio à tomada de decisão.",
    image: "/projects/powerbi-1.png",
    images: [
      "/projects/powerbi-1.png",
      "/projects/powerbi-2.png",
      "/projects/powerbi-3.png",
    ],
    tags: ["Power BI", "DAX", "SQL", "Data Modeling", "Business Intelligence", "Analytics"],
    features: [
      "Modelagem dimensional de dados (Esquema Estrela) e estruturação de relacionamentos",
      "Desenvolvimento de medidas e KPIs executivos complexos utilizando linguagem DAX",
      "Tratamento, transformação e higienização de bases de dados relacionais com SQL",
      "Visualizações executivas interativas para análise de custos, recursos e indicadores",
    ],
    metrics: [
      "Painéis consolidados com suporte à tomada de decisão baseada em dados",
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
          title="Projetos de Software & Soluções Técnicas"
          description="Aplicações web full stack, soluções integradas com Inteligência Artificial e projetos de análise de dados desenvolvidos com foco em arquitetura, código funcional e resolução de problemas reais."
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
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#F29A0F]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Info Column */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0F0F10] text-[#FAFAFA] mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#F29A0F] animate-pulse" />
                  <span>Projeto Principal</span>
                </div>

                <h3 className="font-condensed uppercase font-normal text-5xl sm:text-6xl text-[#7a8c57] tracking-tight mb-2">
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
                    <ArrowUpRight className="w-4 h-4 text-[#F29A0F] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
        <div className="slab grid grid-cols-1 md:grid-cols-2 gap-6">
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
