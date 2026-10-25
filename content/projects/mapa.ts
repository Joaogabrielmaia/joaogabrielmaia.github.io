import { ProjectSchema } from "../schema";
import { repo, prints, AVISO_CENARIO } from "./_util";

const r = repo("Process-diagnostic-tool");

export const mapa = ProjectSchema.parse({
  slug: "mapa",
  tipo: "novo",
  titulo: "Mapa",
  frase: "Diagnóstico de processos para pré-venda consultiva: ranking, matriz e faixa de retorno em vez de um número só.",
  ordem: 5,
  destaqueNaHome: false,
  cenario: { empresa: "Atalho Automação (consultoria) e Clínica Vida Plena (cliente)", descricao: AVISO_CENARIO },
  repositorio: r.url,
  repoNome: r.nome,
  status: "v1.1.0 · roda localmente",
  resumo30s: {
    problema:
      "Uma consultoria de automação precisa descobrir, na primeira reunião, onde vale automatizar e quanto isso pode render, sem prometer um número que não sabe sustentar.",
    construi:
      "Um roteiro por área e um motor de pontuação determinístico (sem IA) que dá a cada processo um potencial e um esforço, e gera ranking, matriz esforço × retorno, roteiro de 30/60/90 dias, retorno em três cenários, riscos de LGPD e pré-escopo, em relatório web e PDF.",
    importa:
      "Mostra a conta e a incerteza em vez de um número pronto, que é como se ganha a confiança do cliente.",
  },
  stack: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "Zod", "PDF pelo Chromium", "Vitest", "Playwright"],
  areas: [
    { area: "consultor-solucoes", nivel: "principal", evidencia: "Apresenta a conta e a incerteza (faixas de retorno) em vez de um número único." },
    { area: "consultor-automacao-ia", nivel: "principal", evidencia: "Decide onde automatizar e o que não automatizar." },
    { area: "negocios-requisitos", nivel: "principal", evidencia: "Levantamento por área, critérios e pesos escritos, e pré-escopo." },
    { area: "analista-projetos", nivel: "relacionado", evidencia: "Roteiro de 30/60/90 dias a partir dos quadrantes." },
    { area: "implantacao", nivel: "relacionado", evidencia: "Ordem de implantação sugerida a partir do esforço e da capacidade em horas." },
    { area: "desenvolvimento-full-stack", nivel: "principal", evidencia: "Next.js, TypeScript e Prisma, com motor de pontuação em funções puras (100% de cobertura nesse módulo) e relatório em PDF." },
  ],
  destaques: [
    "Potencial = 20% frequência + 15% volume + 25% repetitividade + 40% impacto",
    "Dado faltante nunca vira zero: entra um valor cauteloso e a faixa se alarga",
    "Pesos e cortes são julgamento do autor, configuráveis, com análise de sensibilidade",
    "Versões comparáveis e link do cliente só de escrita, válido por 14 dias",
  ],
  decisoes: [
    {
      decisao: "Pontuação determinística em vez de IA",
      ganhei: "Cada nota é explicável e reproduzível.",
      paguei: "Menos flexível para processos que não cabem nos critérios.",
      quandoMudaria: "Se houvesse dados reais para calibrar um modelo.",
      adr: r.doc("docs/04-arquitetura/adr-001-pontuacao-deterministica.md"),
    },
    {
      decisao: "PDF pelo Chromium, a mesma página nos dois formatos",
      ganhei: "Relatório web e PDF idênticos.",
      paguei: "Depende do Chromium no ambiente.",
      quandoMudaria: "Se o PDF precisasse ser gerado onde o Chromium não roda.",
      adr: r.doc("docs/04-arquitetura/adr-003-geracao-de-pdf.md"),
    },
    {
      decisao: "Versões como retratos imutáveis",
      ganhei: "Dá para comparar o diagnóstico v1 com o v2 sem perder o histórico.",
      paguei: "Mais armazenamento por diagnóstico.",
      quandoMudaria: "Se o volume de versões ficasse grande.",
      adr: r.doc("docs/04-arquitetura/adr-004-versoes.md"),
    },
    {
      decisao: "Link do cliente só de escrita, válido por 14 dias",
      ganhei: "O cliente preenche sem ver nada do diagnóstico.",
      paguei: "Quem erra precisa pedir um novo link.",
      quandoMudaria: "Se o cliente precisasse acompanhar o resultado.",
      adr: r.doc("docs/04-arquitetura/adr-005-link-do-cliente.md"),
    },
  ],
  numeros: [
    { rotulo: "Testes unitários", valor: "89", fonte: "README do repositório (commit 1f4473f)", data: "24/10/2026", confere: "89 unitários" },
    { rotulo: "Testes de integração", valor: "11", fonte: "README do repositório", data: "24/10/2026", confere: "11 de integração" },
    { rotulo: "Testes E2E", valor: "15", fonte: "README do repositório (commit bd3169b)", data: "24/10/2026", confere: "15 E2E" },
    { rotulo: "Cobertura do módulo de pontuação", valor: "100% de linhas, ramos e funções (só esse módulo foi medido)", fonte: "README do repositório (commit 1f4473f)", data: "24/10/2026", confere: "100% de linhas, ramos e funções" },
  ],
  naoValidado: [
    "API real da Anthropic.",
    "Falha do Chromium e banco fora do ar.",
    "Carga e acessibilidade automatizada.",
    "Cobertura do restante do código (só o módulo de pontuação foi medido).",
    "Pesos e cortes não foram calibrados com dados reais.",
  ],
  documentos: [
    { rotulo: "README", url: r.url },
    { rotulo: "Guia da série (INDEX)", url: r.doc("docs/INDEX.md") },
    { rotulo: "Exemplos de cálculo", url: r.doc("docs/03-metodologia/exemplos-de-calculo.md") },
    { rotulo: "Sensibilidade", url: r.doc("docs/03-metodologia/sensibilidade.md") },
    { rotulo: "Limitações da metodologia", url: r.doc("docs/03-metodologia/limitacoes.md") },
    { rotulo: "ADRs", url: r.tree("docs/04-arquitetura") },
    { rotulo: "Reunião de validação", url: r.doc("docs/04-arquitetura/reuniao-validacao.md") },
    { rotulo: "Relatório de testes", url: r.doc("docs/05-qualidade/relatorio-de-testes.md") },
  ],
  roteiroLeitura: [
    { rotulo: "1. README", url: r.url },
    { rotulo: "2. Brainstorm e decisão", url: r.doc("docs/01-discovery/01-brainstorm-e-decisao.md") },
    { rotulo: "3. Regras de negócio", url: r.doc("docs/02-definicao/regras-de-negocio.md") },
    { rotulo: "4. Metodologia: exemplos de cálculo", url: r.doc("docs/03-metodologia/exemplos-de-calculo.md") },
    { rotulo: "5. Sensibilidade e limitações", url: r.doc("docs/03-metodologia/sensibilidade.md") },
    { rotulo: "6. ADRs", url: r.tree("docs/04-arquitetura") },
    { rotulo: "7. Retrospectiva final", url: r.doc("docs/06-pos-lancamento/retrospectiva-final.md") },
  ],
  prints: prints("mapa", {
    "04-ranking": "Os 14 processos por prioridade; o primeiro aberto mostra a nota de cada critério.",
    "05-matriz-esforco-retorno": "Matriz esforço × retorno em quatro quadrantes: Começar já, Planejar, Oportunista e Evitar.",
    "06-premissas-e-faixa-de-retorno": "Retorno como faixa (economia, investimento e payback) a partir de premissas editáveis, nunca um número único.",
    "07-relatorio-web": "Relatório com resumo executivo, ranking, matriz, retorno, roteiro 30/60/90, riscos, pré-escopo e uma seção “O que este relatório não sabe”.",
    "09-comparacao-de-versoes": "Comparação entre a v1 e a v2 do diagnóstico.",
  }),
  diagramas: [
    { arquivo: "conteineres.svg", legenda: "Contêineres: telas, validação, serviços, pontuação (funções puras) e relatório" },
    { arquivo: "decisao-de-pontuacao.svg", legenda: "Como o motor decide a pontuação, inclusive quando falta dado" },
  ],
  arquivosExtras: [
    { rotulo: "Abrir relatório de exemplo (PDF)", url: "/projects/mapa/diagnostico-clinica-vida-plena-v2.pdf" },
  ],
  capa: "05-matriz-esforco-retorno",
});
