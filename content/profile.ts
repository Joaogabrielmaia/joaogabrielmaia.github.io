import { ProfileSchema } from "./schema";

export const profile = ProfileSchema.parse({
  nome: "João Gabriel Maia",
  nomeCompleto: "João Gabriel Maia da Costa",
  email: "joaogabrielmaia092@gmail.com",
  linkedin: "https://www.linkedin.com/in/jo%C3%A3ogabrielmaia",
  github: "https://github.com/Joaogabrielmaia",
  site: "https://joaogabrielmaia.github.io",
  hero: {
    titulo: "João Gabriel Maia",
    subtitulo: "Software Engineer · Automação com IA · Gestão de projetos",
    frase:
      "Full stack com TypeScript, React, Next.js, Node.js e PostgreSQL. Construo automações, agentes de IA e integrações por API, com testes automatizados e decisões documentadas.",
    selo: "Engenharia de Software · PUC Minas",
  },
  pontos: [
    { icone: "code", titulo: "Full stack", texto: "TypeScript, React, Next.js, Node.js, Express, PostgreSQL e Prisma." },
    { icone: "bot", titulo: "Automação e IA", texto: "n8n, agentes de IA, RAG, integrações por API e webhooks." },
    { icone: "teste", titulo: "Qualidade", texto: "Testes unitários, de integração e E2E, ADRs e rastreabilidade." },
    { icone: "metodo", titulo: "Gestão e métodos", texto: "Scrum, Kanban e requisitos. Gestor do ERP Vortex, Melhor Trabalho Interdisciplinar da PUC Minas." },
  ],
  formacao: {
    curso: "Bacharelado em Engenharia de Software",
    instituicao: "PUC Minas",
    periodo: "ago/2023 a dez/2027 (previsão)",
  },
  idiomas: ["Português nativo", "Inglês básico"],
  sobre: [
    "Estudante de Engenharia de Software na PUC Minas (conclusão prevista para dez/2027) e desenvolvedor full stack desde abril de 2026. Trabalho com TypeScript, React, Next.js, Node.js e PostgreSQL, e construo automações, agentes de IA e integrações por API, com testes automatizados e decisões registradas em ADRs.",
    "Antes disso, fui aprendiz de suporte de TI na Hotmart, onde cuidei de chamados, rollouts de máquinas e de telefonia, salas de reunião e automações simples.",
  ],
  comoTrabalho: [
    "Começo pelo levantamento de requisitos e regras de negócio e escrevo o que foi combinado.",
    "Registro as decisões de arquitetura em ADRs, com as alternativas e o custo de cada uma.",
    "Entrego em sprints, com testes automatizados e documentação, e continuo mantendo o que entrego.",
  ],
  destaqueAcademico:
    "Melhor Trabalho Interdisciplinar de Engenharia de Software (PUC Minas, 2025), com o ERP Vortex, em que fui gestor de um time de 8 pessoas.",
});
