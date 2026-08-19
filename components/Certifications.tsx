"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { ExternalLink, ShieldCheck, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Desenvolvimento Web Moderno com JS & React",
    issuer: "Udemy / Web Development",
    category: "Desenvolvimento Software",
    description: "JavaScript moderno ES6+, React, Node.js, arquitetura web e padrões de desenvolvimento de software.",
    code: "UC-39b7e3e4-3f58",
    url: "https://www.udemy.com/certificate/UC-39b7e3e4-3f58-489e-955a-9ac5601972bb/",
  },
  {
    title: "Arquitetura de Banco de Dados SQL & PostgreSQL",
    issuer: "Udemy / Database",
    category: "Desenvolvimento & Dados",
    description: "Modelagem relacional, queries avançadas, otimização e gerenciamento relacional de dados.",
    code: "UC-8e3e5ec0-4f34",
    url: "https://www.udemy.com/certificate/UC-8e3e5ec0-4f34-4de1-9d5d-42abf8018289/",
  },
  {
    title: "Google AI & Machine Learning Specialization",
    issuer: "Coursera / Google",
    category: "Inteligência Artificial",
    description: "Conceitos fundamentais de IA Generativa, engenharia de prompts e aplicação de LLMs na solução de problemas.",
    code: "KYYB1071VUYT",
    url: "https://www.coursera.org/account/accomplishments/specialization/KYYB1071VUYT",
  },
  {
    title: "IBM Applied AI Foundations",
    issuer: "Credly / IBM",
    category: "Inteligência Artificial",
    description: "Construção de aplicações com IA, redes neurais e processamento de linguagem natural.",
    code: "F49C52E3-4F58",
    url: "https://www.credly.com/badges/f49c52e3-4f58-4c8a-8e11-cf80af175739",
  },
  {
    title: "Power BI & Analytics Executivo",
    issuer: "Udemy / Analytics Executivo",
    category: "Dados & Dashboards",
    description: "Modelagem de dados com DAX, dashboards executivos para tomada de decisão e indicadores estratégicos.",
    code: "UC-fdd87f9d-16c2",
    url: "https://www.udemy.com/certificate/UC-fdd87f9d-16c2-4e1b-807d-e8eb12d7500d/",
  },
  {
    title: "Gestão Ágil de Projetos & Scrum",
    issuer: "Udemy / Agile Management",
    category: "Gestão & Produto",
    description: "Frameworks ágeis Scrum/Kanban, refinamento de backlog, sprint planning e facilitação de discovery.",
    code: "UC-3f824937-d8e3",
    url: "https://www.udemy.com/certificate/UC-3f824937-d8e3-474d-9673-0b2a44650688/",
  },
];

export function Certifications() {
  return (
    <section id="certificacoes" className="py-24 relative overflow-hidden bg-neutral-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Certificações"
          title="Especializações e Certificados Acadêmicos & Técnicos"
          description="Validações de conhecimento em engenharia de software, banco de dados, inteligência artificial, dados e metodologias ágeis."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card p-6 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#B8FF2C]/10 rounded-full blur-xl group-hover:bg-[#B8FF2C]/20 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold uppercase px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 border border-neutral-200">
                    {cert.category}
                  </span>
                  <div className="p-2 rounded-xl bg-[#0F0F10] text-[#B8FF2C]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0F0F10] mb-1 group-hover:text-black transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono font-semibold text-neutral-500 mb-3">
                  {cert.issuer}
                </p>

                <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/80 space-y-3">
                <div className="flex items-center justify-between text-xs text-emerald-700 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Certificado Verificado</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {cert.code}
                  </span>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0F0F10] text-[#FAFAFA] text-xs font-semibold hover:bg-black hover:text-[#B8FF2C] transition-all flex items-center justify-center gap-2 group/btn border border-neutral-800"
                >
                  <span>Verificar Credencial</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#B8FF2C] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
