import { ProjectSchema } from "../schema";
import { repo, prints, AVISO_CENARIO } from "./_util";

const r = repo("AI-agent-for-support-triage");

export const prumo = ProjectSchema.parse({
  slug: "prumo",
  tipo: "novo",
  titulo: "Prumo",
  frase: "Agente de IA que responde com fontes, recusa quando não sabe e passa para uma pessoa o que precisa de gente.",
  ordem: 3,
  destaqueNaHome: true,
  cenario: { empresa: "Agenda Bela", descricao: AVISO_CENARIO },
  repositorio: r.url,
  repoNome: r.nome,
  status: "v1.1 · roda localmente",
  resumo30s: {
    problema:
      "O suporte de um SaaS de agendamento para salões estava afogado em perguntas repetidas e com medo de o robô dar informação errada.",
    construi:
      "Busca em 31 artigos (93 trechos) com fontes citadas, recusa honesta, escalonamento para humano com resumo e prioridade, proteção contra injeção de prompt, fila do atendente, avaliação de cada resposta, painel e lacunas da base.",
    importa:
      "Trata IA como um sistema que precisa ser medido: tem avaliação separada em desenvolvimento e validação, resultados por rodada e limites declarados.",
  },
  stack: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL com pgvector", "Zod", "Vitest", "Playwright", "Docker Compose"],
  areas: [
    { area: "consultor-automacao-ia", nivel: "principal", evidencia: "Mede o agente com 50 + 20 perguntas em 3 rodadas, com guardrails e limites declarados." },
    { area: "customer-success", nivel: "principal", evidencia: "Escalona o que precisa de pessoa e entrega o contexto organizado para o atendente." },
    { area: "analista-automacao", nivel: "relacionado", evidencia: "Pipeline do agente com guardrails, fila e avaliação contínua." },
    { area: "implantacao", nivel: "relacionado", evidencia: "O agente entra em “modo sugestão” antes de responder sozinho (plano de rollout)." },
    { area: "consultor-solucoes", nivel: "relacionado", evidencia: "Cada escolha (RAG em vez de ajuste fino, limiar de confiança) tem ADR com alternativas." },
    { area: "negocios-requisitos", nivel: "relacionado", evidencia: "Regras de negócio explícitas para assuntos sensíveis, como reembolso." },
    { area: "desenvolvimento-full-stack", nivel: "principal", evidencia: "Aplicação Next.js com busca em PostgreSQL (pgvector), fila do atendente e painel, com 83 testes Vitest e 14 E2E." },
  ],
  destaques: [
    "Recusa honesta quando não tem a informação",
    "Reembolso e cobrança contestada sempre vão para uma pessoa, por regra explícita",
    "Avaliação com perguntas de desenvolvimento e de validação separadas",
    "Limites registrados: a busca é lexical, não semântica",
  ],
  decisoes: [
    {
      decisao: "RAG em vez de ajuste fino",
      ganhei: "As respostas citam de onde vieram e a base pode ser atualizada sem retreinar.",
      paguei: "A qualidade depende da busca nos artigos.",
      quandoMudaria: "Se a base crescesse a ponto de a busca lexical não bastar.",
      adr: r.doc("docs/03-arquitetura/decisoes.md"),
    },
    {
      decisao: "Confiança = similaridade + cobertura das palavras da pergunta",
      ganhei: "Subir só o limiar não separava os grupos; a cobertura separou.",
      paguei: "Mais uma regra ajustada pelo autor com os dados de desenvolvimento.",
      quandoMudaria: "Com busca semântica e mais dados de validação.",
      adr: r.doc("docs/03-arquitetura/decisoes.md"),
    },
    {
      decisao: "Assuntos sensíveis sempre escalam, por regra explícita",
      ganhei: "Reembolso e cobrança contestada nunca ficam na mão do modelo.",
      paguei: "Algumas perguntas simples escalam sem necessidade.",
      quandoMudaria: "Se o time de suporte aceitasse automatizar casos específicos, com revisão.",
      adr: r.doc("docs/02-definicao/regras-de-negocio.md"),
    },
    {
      decisao: "Conjunto de validação separado",
      ganhei: "Revelou sobreajuste: +20 pontos onde ajustei e +10 onde não ajustei.",
      paguei: "Menos perguntas para ajustar o agente.",
      quandoMudaria: "Nunca: é o que impede uma nota inflada.",
      adr: r.doc("docs/04-avaliacao/metodologia.md"),
    },
  ],
  numeros: [
    { rotulo: "Testes Vitest", valor: "83 de 83", fonte: "README do repositório (commit 2cb000d)", data: "24/10/2026", confere: "83 de 83" },
    { rotulo: "Testes E2E", valor: "14 de 14", fonte: "README do repositório (commit fb6b3bc)", data: "24/10/2026", confere: "14 de 14" },
    { rotulo: "Avaliação: desenvolvimento (50 perguntas)", valor: "66% → 86% → 86% (rodadas 1, 2 e 3)", fonte: "README do repositório", data: "23/10/2026", confere: "66% na rodada 1" },
    { rotulo: "Avaliação: validação (20 perguntas)", valor: "70% → 80% → 80%", fonte: "README do repositório", data: "23/10/2026", confere: "70% na rodada 1" },
    { rotulo: "Recusa correta de perguntas fora da base", valor: "de 20% para 80% (desenvolvimento)", fonte: "README do repositório", data: "23/10/2026", confere: "A recusa correta foi de 20% a 80%" },
    { rotulo: "Testes adversariais", valor: "100% (é um piso, porque as regras foram escritas antes pelo autor)", fonte: "README do repositório", data: "23/10/2026", confere: "adversariais ficaram em 100%" },
  ],
  naoValidado: [
    "Nenhuma rodada de avaliação usou o Claude: a rodada com o Claude real não foi executada e custo e latência não foram medidos.",
    "A busca é lexical (embedding local por hashing), não semântica: é a maior limitação.",
    "Houve uma execução com modelo aberto (Groq, gpt-oss-120b), gravada sem commit: não é reproduzível a partir de um commit.",
    "O provedor da Anthropic existe na interface, mas não foi exercitado.",
  ],
  documentos: [
    { rotulo: "README", url: r.url },
    { rotulo: "Guia da série (INDEX)", url: r.doc("docs/INDEX.md") },
    { rotulo: "Metodologia da avaliação", url: r.doc("docs/04-avaliacao/metodologia.md") },
    { rotulo: "Comparativo das rodadas", url: r.doc("docs/04-avaliacao/comparativo-rodadas.md") },
    { rotulo: "Análise de erros", url: r.doc("docs/04-avaliacao/analise-de-erros.md") },
    { rotulo: "Decisões (ADRs)", url: r.doc("docs/03-arquitetura/decisoes.md") },
    { rotulo: "Reunião de aceitação", url: r.doc("docs/05-qualidade/reuniao-de-aceitacao.md") },
    { rotulo: "Retrospectiva e roadmap", url: r.doc("docs/06-pos-lancamento/retrospectiva.md") },
  ],
  roteiroLeitura: [
    { rotulo: "1. README", url: r.url },
    { rotulo: "2. Discovery: a dor do suporte", url: r.tree("docs/01-discovery") },
    { rotulo: "3. Regras de negócio", url: r.doc("docs/02-definicao/regras-de-negocio.md") },
    { rotulo: "4. Decisões de arquitetura", url: r.doc("docs/03-arquitetura/decisoes.md") },
    { rotulo: "5. Metodologia de avaliação", url: r.doc("docs/04-avaliacao/metodologia.md") },
    { rotulo: "6. Análise de erros e comparativo das rodadas", url: r.doc("docs/04-avaliacao/analise-de-erros.md") },
    { rotulo: "7. Retrospectiva e roadmap", url: r.doc("docs/06-pos-lancamento/retrospectiva.md") },
  ],
  prints: prints("prumo", {
    "01-chat-resposta-com-fontes": "Cada resposta mostra de onde veio, com no máximo 2 fontes por artigo.",
    "02-recusa-honesta": "Sem a informação, o agente diz que não tem e oferece falar com uma pessoa: o medo do negócio é a resposta errada.",
    "03-escalonamento-para-humano": "Pedido de reembolso vai para a equipe com resumo; o agente não confirma valores, reembolsos nem prazos.",
    "09-injecao-de-prompt-bloqueada": "O pedido para ignorar as instruções é barrado antes de chamar o modelo (primeira das quatro camadas de proteção).",
    "10-relatorio-de-avaliacao": "Relatório de avaliação: o resultado de cada rodada, por tipo de pergunta.",
  }),
  diagramas: [{ arquivo: "pipeline-do-agente.svg", legenda: "Pipeline do agente: cliente, guardrails, busca, provedor de IA e painel da equipe" }],
  capa: "01-chat-resposta-com-fontes",
});
