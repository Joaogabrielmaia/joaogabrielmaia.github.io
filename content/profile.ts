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
    subtitulo: "Engenharia de Software · desenvolvimento, automação e atendimento a clientes",
    frase:
      "Desenvolvo sistemas e acompanho o cliente do discovery à entrega e à evolução.",
    disponivel: "Betim, MG · remoto ou híbrido",
  },
  provas: [
    { valor: "7", rotulo: "projetos documentados de ponta a ponta" },
    { valor: "~15", rotulo: "clientes atendidos desde abr/2026" },
    { valor: "9", rotulo: "certificações" },
    { valor: "1º", rotulo: "Melhor Trabalho Interdisciplinar, PUC Minas" },
  ],
  busca: {
    funcoes:
      "Já atuei ou construí projetos em: implantação, automação (com ou sem IA), atendimento e sucesso do cliente, prospecção e consultoria de soluções.",
    empresas:
      "Equipe pequena, com contato direto com clientes.",
    formato: "Localização: Betim, MG. Remoto ou híbrido (BH/Betim).",
  },
  formacao: {
    curso: "Bacharelado em Engenharia de Software",
    instituicao: "PUC Minas",
    periodo: "ago/2023 a dez/2027 (previsão)",
  },
  idiomas: ["Português nativo", "Inglês básico"],
  sobre: [
    "Estudo Engenharia de Software na PUC Minas e, desde abril de 2026, trabalho como desenvolvedor full stack autônomo, junto de uma equipe pequena que assume projetos de clientes. Atuo entre o cliente e a equipe: levanto o que o cliente precisa, traduzo para o time e acompanho a entrega. Também desenvolvo.",
    "Antes disso, fui aprendiz de suporte de TI na Hotmart, onde cuidei de chamados, rollouts de máquinas e de telefonia, salas de reunião e automações simples.",
  ],
  comoTrabalho: [
    "Começo pelo discovery: entrevisto quem usa o processo, separo o que é regra do que é hábito e escrevo o que combinamos.",
    "Explico os trade-offs ao cliente em linguagem simples (por exemplo, mais segurança pode deixar o carregamento um pouco mais lento) e deixo a decisão com ele.",
    "Acompanho a entrega em sprints, mostro protótipos cedo e continuo por perto depois: manutenção e evolução fazem parte do trabalho.",
  ],
  destaqueAcademico:
    "Melhor Trabalho Interdisciplinar de Engenharia de Software (PUC Minas, 2025), com o ERP Vortex, em que fui gestor de um time de 8 pessoas.",
});
