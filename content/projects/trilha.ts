import { ProjectSchema } from "../schema";
import { repo, prints, AVISO_CENARIO } from "./_util";

const r = repo("Customer-onboarding-platform");

export const trilha = ProjectSchema.parse({
  slug: "trilha",
  tipo: "novo",
  titulo: "Trilha",
  frase: "Plataforma para acompanhar a implantação de clientes e mostrar, cedo, o que está atrasado e de quem.",
  ordem: 1,
  destaqueNaHome: true,
  cenario: { empresa: "Rota Fácil Software", descricao: AVISO_CENARIO },
  repositorio: r.url,
  repoNome: r.nome,
  status: "v1.1.0 · roda localmente",
  resumo30s: {
    problema:
      "Uma software house pequena controlava implantações em planilha e WhatsApp: o atraso aparecia tarde, o combinado com o cliente se perdia e cada implantação seguia um roteiro diferente.",
    construi:
      "Uma plataforma web com modelos de implantação (etapas e tarefas com prazo relativo D+n), implantação por cliente com datas calculadas, painel de atrasos, pendências por implantador, histórico de alterações e portal do cliente por link.",
    importa:
      "Separa o atraso da equipe da espera do cliente e deixa o cliente acompanhar o progresso sem cadastro, que é o que um analista de implantação precisa para conduzir o go-live.",
  },
  stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Zod", "Vitest", "Playwright", "Docker Compose"],
  areas: [
    { area: "implantacao", nivel: "principal", evidencia: "Modela o roteiro de implantação com prazos relativos e mostra o que está atrasado, de quem e há quanto tempo." },
    { area: "customer-success", nivel: "principal", evidencia: "O cliente acompanha o progresso por um link, sem cadastro." },
    { area: "analista-projetos", nivel: "principal", evidencia: "Backlog organizado em sprints, rastreabilidade e riscos documentados." },
    { area: "negocios-requisitos", nivel: "principal", evidencia: "Contradições levantadas no discovery viraram regras de negócio e testes." },
    { area: "consultor-solucoes", nivel: "relacionado", evidencia: "Cada decisão de arquitetura tem alternativas e custo registrados em ADR." },
    { area: "desenvolvimento-full-stack", nivel: "principal", evidencia: "Aplicação Next.js com TypeScript, Prisma e PostgreSQL: autenticação própria, camada de serviços, portal público e 156 testes." },
  ],
  destaques: [
    "Atraso da equipe separado da espera do cliente",
    "Prazos relativos ao kickoff: editar o modelo não altera o que já foi combinado",
    "Histórico gravado na mesma transação da mudança",
    "Portal por link com token: só o hash fica no banco, expira e pode ser revogado",
    "Um defeito real achado nos testes e corrigido: rolagem horizontal no celular em /clientes",
  ],
  decisoes: [
    {
      decisao: "Sessão própria no banco, com scrypt, em vez de Auth.js",
      ganhei: "Sair e desativar um usuário valem na hora, com pouco código e fácil de explicar.",
      paguei: "Mais código meu para manter e revisar.",
      quandoMudaria: "Se o produto precisasse de login social ou de vários provedores.",
      adr: r.doc("docs/03-arquitetura/adr/002-autenticacao.md"),
    },
    {
      decisao: "Copiar o modelo para a implantação, com prazo D+n",
      ganhei: "Mudar o modelo não mexe no que já foi combinado com clientes em andamento.",
      paguei: "Implantações antigas não recebem melhorias do modelo sozinhas.",
      quandoMudaria: "Se a empresa quisesse propagar mudanças do modelo para as implantações abertas.",
      adr: r.doc("docs/03-arquitetura/adr/004-tarefas-e-prazos-relativos.md"),
    },
    {
      decisao: "Auditoria na mesma transação da mudança",
      ganhei: "Não existe mudança sem histórico, nem histórico de mudança que não aconteceu.",
      paguei: "Cada escrita faz um pouco mais de trabalho.",
      quandoMudaria: "Com volume alto de escrita, eu moveria o histórico para uma fila assíncrona.",
      adr: r.doc("docs/03-arquitetura/adr/005-auditoria.md"),
    },
    {
      decisao: "Portal do cliente por token opaco, somente leitura",
      ganhei: "O cliente acompanha sem criar conta; o dado que o fundador usa para decidir fica preservado porque o portal recusa escrita.",
      paguei: "O cliente não consegue responder pelo portal.",
      quandoMudaria: "Se o cliente precisasse confirmar tarefas pelo próprio portal.",
      adr: r.doc("docs/03-arquitetura/adr/007-portal-por-token.md"),
    },
  ],
  numeros: [
    { rotulo: "Testes automatizados passando", valor: "156 (52 unitários, 70 de integração com PostgreSQL real e 34 E2E, 6 de acessibilidade)", fonte: "README do repositório, execução na CI", data: "24/10/2026", confere: "156" },
  ],
  naoValidado: [
    "Firefox, Safari e celular físico.",
    "Acessibilidade manual completa (só a automatizada, com axe).",
    "Desempenho e carga.",
    "Cobertura de código (não foi medida).",
    "Uso por pessoas reais.",
  ],
  documentos: [
    { rotulo: "README", url: r.url },
    { rotulo: "Guia da série (INDEX)", url: r.doc("docs/INDEX.md") },
    { rotulo: "Discovery (3 reuniões simuladas)", url: r.tree("docs/01-discovery") },
    { rotulo: "Requisitos", url: r.doc("docs/02-definicao/02-requisitos.md") },
    { rotulo: "Regras de negócio", url: r.doc("docs/02-definicao/03-regras-de-negocio.md") },
    { rotulo: "ADRs", url: r.tree("docs/03-arquitetura/adr") },
    { rotulo: "Modelo de dados", url: r.doc("docs/03-arquitetura/modelo-de-dados.md") },
    { rotulo: "Estratégia de testes", url: r.doc("docs/05-qualidade/01-estrategia-de-testes.md") },
    { rotulo: "Retrospectiva final", url: r.doc("docs/07-pos-go-live/retrospectiva-final.md") },
  ],
  roteiroLeitura: [
    { rotulo: "1. README: o que é e como rodar", url: r.url },
    { rotulo: "2. Discovery: o problema com as pessoas reais do cenário", url: r.tree("docs/01-discovery") },
    { rotulo: "3. Requisitos e regras de negócio", url: r.doc("docs/02-definicao/03-regras-de-negocio.md") },
    { rotulo: "4. Decisões de arquitetura (ADRs)", url: r.tree("docs/03-arquitetura/adr") },
    { rotulo: "5. Modelo de dados", url: r.doc("docs/03-arquitetura/modelo-de-dados.md") },
    { rotulo: "6. Qualidade: estratégia e resultados", url: r.doc("docs/05-qualidade/02-resultado-da-ultima-execucao.md") },
    { rotulo: "7. Plano de rollout e retrospectiva", url: r.doc("docs/06-treinamento-e-rollout/01-plano-de-rollout.md") },
  ],
  prints: prints("trilha", {
    "02-painel": "Painel: o que está atrasado, de quem e há quanto tempo. O “47 dias” é a média do seed de demonstração, não uma medição.",
    "03-minhas-pendencias": "Cada implantador vê só o que é dele, em ordem de prazo.",
    "05-detalhe-implantacao": "Detalhe de uma implantação, com datas calculadas a partir do kickoff (D+n).",
    "07-modelo": "Modelo de implantação: etapas e tarefas com prazo D+n, responsável padrão e a marca “Visível ao cliente”. Mudar o modelo não altera o que já foi combinado.",
    "09-portal-cliente": "Portal do cliente por link: somente leitura, expira e pode ser revogado.",
  }),
  diagramas: [
    { arquivo: "containers.webp", legenda: "Containers da aplicação" },
    { arquivo: "portal-do-cliente.webp", legenda: "Como o portal do cliente funciona" },
    { arquivo: "estados-da-implantacao.webp", legenda: "Estados da implantação e do link do cliente" },
  ],
  capa: "02-painel",
});
