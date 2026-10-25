import { ProfileSchema } from "./schema";

export const profile = ProfileSchema.parse({
  nome: "João Gabriel Maia",
  nomeCompleto: "João Gabriel Maia da Costa",
  cidade: "Betim, MG (região de Belo Horizonte)",
  email: "joaogabrielmaia092@gmail.com",
  linkedin: "https://www.linkedin.com/in/jo%C3%A3ogabrielmaia",
  github: "https://github.com/Joaogabrielmaia",
  site: "https://joaogabrielmaia.github.io",
  hero: {
    titulo: "João Gabriel Maia",
    subtitulo: "Engenharia de Software · implantação, automação e relacionamento com clientes",
    frase:
      "Desenvolvo sistemas e conduzo a conversa com o cliente: do discovery à entrega e à evolução.",
    disponivel: "Disponível para oportunidades",
  },
  provas: [
    { valor: "7", rotulo: "projetos documentados de ponta a ponta" },
    { valor: "~15", rotulo: "clientes atendidos desde abr/2026" },
    { valor: "9", rotulo: "certificações" },
    { valor: "1º", rotulo: "Melhor Trabalho Interdisciplinar, PUC Minas" },
  ],
  busca: {
    funcoes:
      "Implantação, automação (com ou sem IA), customer success, pré-vendas/SDR em SaaS B2B e consultoria de soluções.",
    empresas:
      "Empresas pequenas (software houses, SaaS, consultorias de automação), onde o contato com fundadores e clientes é próximo.",
    formato: "Remoto ou híbrido (BH/Betim), PJ ou CLT.",
  },
  formacao: {
    curso: "Bacharelado em Engenharia de Software",
    instituicao: "PUC Minas",
    periodo: "ago/2023 a dez/2027 (previsão)",
  },
  idiomas: ["Português nativo", "Inglês básico"],
  sobre: [
    "Estudo Engenharia de Software na PUC Minas e, desde abril de 2026, trabalho como desenvolvedor full stack autônomo, junto de uma equipe pequena que assume projetos de clientes. Minha função principal é entender o que o cliente quer, traduzir para a equipe e acompanhar a entrega. Também desenvolvo.",
    "Antes disso, fui aprendiz de suporte de TI na Hotmart, onde cuidei de chamados, rollouts de máquinas e de telefonia, salas de reunião e automações simples. Procuro meu primeiro emprego formal em uma função que una tecnologia, clientes e negócio.",
  ],
  comoTrabalho: [
    "Começo pelo discovery: entrevisto quem usa o processo, separo o que é regra do que é hábito e escrevo o que combinamos.",
    "Explico os trade-offs ao cliente em linguagem simples (por exemplo, mais segurança pode deixar o carregamento um pouco mais lento) e deixo a decisão com ele.",
    "Acompanho a entrega em sprints, mostro protótipos cedo e continuo por perto depois: manutenção e evolução fazem parte do trabalho.",
  ],
  destaqueAcademico:
    "Melhor Trabalho Interdisciplinar de Engenharia de Software (PUC Minas, 2025), com o ERP Vortex, em que fui gestor de um time de 8 pessoas.",
});
