import { ProjectSchema } from "../schema";

const semDiagramas = { diagramas: [], prints: [], numeros: [], documentos: [], roteiroLeitura: [], naoValidado: [], decisoes: [] };

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
    { area: "desenvolvimento-full-stack", nivel: "relacionado", evidencia: "Desenvolvimento no ecossistema JavaScript e TypeScript, além da gestão do projeto." },
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
