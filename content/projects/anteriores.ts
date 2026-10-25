import { ProjectSchema } from "../schema";

const semDiagramas = { diagramas: [], prints: [], numeros: [], documentos: [], roteiroLeitura: [], naoValidado: [], decisoes: [] };

export const gerencieja = ProjectSchema.parse({
  ...semDiagramas,
  slug: "gerencieja",
  tipo: "anterior",
  titulo: "GerêncieJá",
  frase: "Aplicação full stack para gestão de tarefas e métricas operacionais, com quadros Kanban e métricas de sprint.",
  ordem: 8,
  destaqueNaHome: false,
  // Repositório e demo retornaram 404 em 25/10/2026: links removidos (ver docs/portfolio-v2/lacunas.md).
  status: "projeto anterior · sem link público no momento",
  resumo30s: {
    problema: "Times pequenos acompanham tarefas e prazos sem enxergar métricas simples de fluxo de trabalho.",
    construi: "Quadros Kanban e cálculo de Lead Time, Cycle Time, Velocity e Burndown, com arquitetura MVC.",
    importa: "Mostra que sei traduzir métricas ágeis em telas que um time usa no dia a dia.",
  },
  stack: ["Node.js", "Express", "SQLite3", "EJS", "Arquitetura MVC"],
  areas: [{ area: "analista-projetos", nivel: "principal", evidencia: "Métricas de sprint (Lead Time, Cycle Time, Velocity e Burndown) e quadros Kanban." }],
  destaques: ["Kanban", "Lead Time e Cycle Time", "Velocity e Burndown"],
  capa: "/projects/gerencie-ja.png",
});

export const pmCopilot = ProjectSchema.parse({
  ...semDiagramas,
  slug: "pm-copilot",
  tipo: "anterior",
  titulo: "PM Copilot",
  frase: "Assistente web de IA que gera especificações técnicas, user stories e análises de requisitos.",
  ordem: 9,
  destaqueNaHome: false,
  // Repositório retornou 404 em 25/10/2026: link removido (ver docs/portfolio-v2/lacunas.md).
  status: "projeto anterior · sem link público no momento",
  resumo30s: {
    problema: "Escrever especificações e user stories do zero toma tempo e costuma sair fora de padrão.",
    construi: "Um assistente web que usa IA (API da Groq, Llama 3.1) e engenharia de prompts para gerar especificações técnicas, user stories e análises de requisitos.",
    importa: "Une requisitos e IA: a ferramenta ajuda a escrever o que o discovery levantou.",
  },
  stack: ["Node.js", "Express", "API da Groq (Llama 3.1)", "SQLite", "Prompt engineering"],
  areas: [
    { area: "negocios-requisitos", nivel: "principal", evidencia: "Gera especificações, user stories e análises de requisitos." },
    { area: "consultor-automacao-ia", nivel: "principal", evidencia: "Aplicação de IA generativa com engenharia de prompts." },
  ],
  destaques: ["Especificações técnicas", "User stories", "Engenharia de prompts"],
  capa: "/projects/pm-copilot.jpg",
});

export const dashboardPowerBi = ProjectSchema.parse({
  ...semDiagramas,
  slug: "dashboard-power-bi",
  tipo: "anterior",
  titulo: "Dashboard Executivo Power BI",
  frase: "Business Intelligence com modelagem relacional, medidas em DAX e painéis executivos.",
  ordem: 10,
  destaqueNaHome: false,
  status: "projeto anterior · sem link público",
  resumo30s: {
    problema: "Bases complexas sem tratamento não viram decisão para quem lidera.",
    construi: "Modelagem relacional, tratamento das bases com SQL e Excel, medidas calculadas em DAX e painéis executivos interativos no Power BI.",
    importa: "Mostra o caminho do dado bruto ao painel que um gestor consegue ler.",
  },
  stack: ["Power BI", "DAX", "SQL"],
  areas: [
    { area: "negocios-requisitos", nivel: "relacionado", evidencia: "Modelagem e medidas a partir de perguntas de negócio." },
    { area: "analista-projetos", nivel: "relacionado", evidencia: "Painéis executivos de acompanhamento." },
  ],
  destaques: ["Modelagem relacional", "Medidas em DAX", "Painéis executivos"],
  capa: "/projects/power-bi.jpg",
});

export const erpVortex = ProjectSchema.parse({
  ...semDiagramas,
  slug: "erp-vortex",
  tipo: "academico",
  titulo: "ERP Vortex",
  frase: "ERP para uma empresa parceira do setor de autopeças: projeto interdisciplinar da PUC Minas que recebeu o prêmio de Melhor Trabalho.",
  ordem: 11,
  destaqueNaHome: false,
  status: "projeto acadêmico · 2025",
  selo: "Melhor Trabalho Interdisciplinar de Engenharia de Software, PUC Minas",
  resumo30s: {
    problema: "Uma empresa parceira do setor de autopeças precisava de um ERP, e o projeto reuniu um time de 8 pessoas na PUC Minas.",
    construi: "Fui o gestor do projeto: discovery com o cliente, requisitos funcionais e não funcionais, regras de negócio, estrutura do banco, divisão de tarefas e acompanhamento técnico. Também desenvolvi.",
    importa: "Prova de gestão de um projeto com cliente real do começo ao fim, reconhecida pela coordenação do curso.",
  },
  stack: ["JavaScript", "TypeScript"],
  areas: [
    { area: "analista-projetos", nivel: "principal", evidencia: "Gestor de um time de 8 pessoas, com Scrum em sprints." },
    { area: "negocios-requisitos", nivel: "principal", evidencia: "Discovery, requisitos funcionais e não funcionais e regras de negócio." },
    { area: "implantacao", nivel: "relacionado", evidencia: "Protótipos apresentados ao cliente e feedback contínuo." },
  ],
  destaques: [
    "Melhor Trabalho Interdisciplinar de Engenharia de Software",
    "Time de 8 pessoas",
    "Scrum, protótipos e feedback contínuo",
  ],
  texto: [
    {
      titulo: "O reconhecimento",
      paragrafos: [
        "O ERP Vortex recebeu o prêmio de Melhor Trabalho Interdisciplinar de Engenharia de Software, concedido pela coordenação do curso, que avaliou os projetos e votou neste como o melhor. Um professor que acompanhou o desenvolvimento também o elogiou, em um post no LinkedIn.",
      ],
    },
    {
      titulo: "Meu papel",
      paragrafos: [
        "Fui o gestor do projeto e o principal responsável. Conduzi o discovery com o cliente (entrevistas sobre o negócio e os fluxos), escrevi requisitos funcionais e não funcionais e regras de negócio, estruturei o banco, dividi as tarefas e acompanhei tecnicamente o time de 8 pessoas. Também desenvolvi.",
      ],
    },
    {
      titulo: "Método",
      paragrafos: [
        "Scrum com sprints, protótipos apresentados ao cliente e feedback contínuo. Stack no ecossistema JavaScript e TypeScript.",
      ],
    },
    {
      titulo: "O que não afirmo",
      paragrafos: [
        "A PUC não libera o nome da empresa nem informações sobre o uso real do sistema, então não afirmo que ele entrou em uso. Também não tenho prints nem acesso ao código para mostrar: esta página existe só como texto, com o reconhecimento.",
      ],
    },
  ],
});
