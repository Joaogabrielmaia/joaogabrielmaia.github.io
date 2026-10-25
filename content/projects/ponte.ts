import { ProjectSchema } from "../schema";
import { repo, prints, AVISO_CENARIO } from "./_util";

const r = repo("API-and-webhook-integration");

export const ponte = ProjectSchema.parse({
  slug: "ponte",
  tipo: "novo",
  titulo: "Ponte",
  frase: "Integração CRM ↔ ERP por API e webhooks, sem duplicar dados e com recuperação de falha provada.",
  ordem: 7,
  destaqueNaHome: true,
  cenario: {
    empresa: "Serviços Aurora (CRM e ERP são sistemas simples criados dentro do próprio repositório)",
    descricao: AVISO_CENARIO,
  },
  repositorio: r.url,
  repoNome: r.nome,
  status: "roda localmente",
  resumo30s: {
    problema:
      "Numa empresa de 25 pessoas, o CRM e o ERP eram separados e os dados eram redigitados à mão a cada venda.",
    construi:
      "Quando um negócio é ganho no CRM, a Ponte cria ou atualiza o cliente (por CNPJ, sem duplicar), o pedido e a cobrança no ERP e devolve os IDs ao CRM; quando a cobrança é paga, o CRM é atualizado. Uma reconciliação agendada aponta divergências.",
    importa:
      "É a integração do discovery ao guia de operação: provei a recuperação de falha derrubando o ERP de verdade no meio de um lote.",
  },
  stack: ["TypeScript", "Node.js", "Fastify", "PostgreSQL", "Prisma", "Zod", "OpenAPI", "Vitest", "Playwright", "Docker Compose"],
  areas: [
    { area: "implantacao", nivel: "principal", evidencia: "Conduz a integração do discovery ao guia de operação, com plano em modo sombra." },
    { area: "analista-automacao", nivel: "principal", evidencia: "Provou a recuperação de falha derrubando o ERP de verdade no meio de um lote." },
    { area: "consultor-solucoes", nivel: "principal", evidencia: "Explica cada decisão com alternativa, custo e “quando eu mudaria”." },
    { area: "negocios-requisitos", nivel: "relacionado", evidencia: "Mapa de dados e regras entre CRM e ERP rastreados até os testes." },
    { area: "consultor-automacao-ia", nivel: "relacionado", evidencia: "Mesma disciplina de integração e falha, aqui sem IA." },
  ],
  destaques: [
    "Idempotência em três camadas",
    "Retentativa com backoff exponencial e jitter: 12 tentativas somam cerca de 3 h, acima da janela de 2 h do ERP",
    "Fila de falhas com reprocessamento manual e reconciliação agendada",
    "Webhook com HMAC, timestamp e corpo bruto",
    "Contratos OpenAPI e catálogo de 35 códigos de erro",
  ],
  decisoes: [
    {
      decisao: "Fila em PostgreSQL em vez de broker",
      ganhei: "Evento e job gravados na mesma transação, sem nova peça de infraestrutura.",
      paguei: "Limite de volume menor que um broker dedicado.",
      quandoMudaria: "Com volume alto ou vários consumidores.",
      adr: r.doc("docs/03-arquitetura/adr/ADR-002-fila-em-banco-vs-broker.md"),
    },
    {
      decisao: "Retentativa com backoff exponencial e jitter",
      ganhei: "12 tentativas cobrem a janela de 2 h do ERP.",
      paguei: "Em falha longa, o evento demora a ser reprocessado.",
      quandoMudaria: "Se o ERP publicasse uma janela de manutenção diferente.",
      adr: r.doc("docs/03-arquitetura/adr/ADR-004-retentativa-com-backoff.md"),
    },
    {
      decisao: "Reconciliação somente-leitura",
      ganhei: "Detecta divergências sem corrigir em silêncio.",
      paguei: "Uma pessoa precisa decidir o que fazer com cada divergência.",
      quandoMudaria: "Se as divergências fossem de um tipo seguro de corrigir sozinho.",
      adr: r.doc("docs/03-arquitetura/adr/ADR-006-reconciliacao.md"),
    },
    {
      decisao: "Idempotência (referência externa como chave)",
      ganhei: "O mesmo negócio nunca vira dois pedidos.",
      paguei: "Toda integração precisa carregar uma chave estável.",
      quandoMudaria: "Se o ERP deduplicasse sozinho.",
      adr: r.doc("docs/03-arquitetura/adr/ADR-003-idempotencia.md"),
    },
  ],
  numeros: [
    { rotulo: "Testes Vitest", valor: "193 (106 unitários, 67 de integração, 18 de contrato e 2 de falha injetada)", fonte: "README do repositório (commit e960fbd)", data: "24/10/2026", confere: "193" },
    { rotulo: "Testes E2E", valor: "10", fonte: "README do repositório (commit fcf035d)", data: "23/10/2026", confere: "10 Playwright" },
    { rotulo: "Contratos exercitados", valor: "44 de 44 operações dos três OpenAPI", fonte: "README do repositório", data: "23/10/2026", confere: "44 de 44" },
    { rotulo: "Falha injetada", valor: "com o ERP derrubado no meio de um lote de 20 negócios, 20 de 20 foram processados (16 com retentativa) e não houve duplicidade", fonte: "README do repositório", data: "2026", confere: "20 de 20" },
  ],
  naoValidado: [
    "Carga.",
    "A janela real de 2 horas do ERP (validada só por cálculo).",
    "Sem CI configurada para o repositório.",
  ],
  documentos: [
    { rotulo: "README", url: r.url },
    { rotulo: "Guia da série (INDEX)", url: r.doc("docs/INDEX.md") },
    { rotulo: "AS-IS e TO-BE", url: r.doc("docs/01-discovery/06-as-is-to-be.md") },
    { rotulo: "Mapa de dados", url: r.doc("docs/01-discovery/07-mapa-de-dados.md") },
    { rotulo: "ADRs", url: r.tree("docs/03-arquitetura/adr") },
    { rotulo: "Modos de falha", url: r.doc("docs/03-arquitetura/04-modos-de-falha.md") },
    { rotulo: "Catálogo de erros", url: r.doc("docs/04-contratos-de-api/catalogo-de-erros.md") },
    { rotulo: "Falha injetada", url: r.doc("docs/05-qualidade/falha-injetada.md") },
    { rotulo: "Guia de operação", url: r.doc("docs/06-pos-lancamento/guia-de-operacao.md") },
  ],
  roteiroLeitura: [
    { rotulo: "1. README", url: r.url },
    { rotulo: "2. AS-IS e TO-BE", url: r.doc("docs/01-discovery/06-as-is-to-be.md") },
    { rotulo: "3. Mapa de dados", url: r.doc("docs/01-discovery/07-mapa-de-dados.md") },
    { rotulo: "4. ADR de idempotência", url: r.doc("docs/03-arquitetura/adr/ADR-003-idempotencia.md") },
    { rotulo: "5. ADR de retentativa e modos de falha", url: r.doc("docs/03-arquitetura/04-modos-de-falha.md") },
    { rotulo: "6. Falha injetada", url: r.doc("docs/05-qualidade/falha-injetada.md") },
    { rotulo: "7. Guia de operação", url: r.doc("docs/06-pos-lancamento/guia-de-operacao.md") },
  ],
  prints: prints("ponte", {
    "01-crm-negocio-ganho": "O negócio em Ganho no CRM e o retorno do ERP, com os IDs de cliente, pedido e cobrança.",
    "06-painel-visao-geral": "Painel da Ponte: visão geral dos eventos, tentativas e fila.",
    "08-painel-evento-em-retentativa": "Evento em retentativa com o erro PONTE-ERP-001 (o ERP respondeu 503).",
    "10-painel-fila-de-falhas": "Fila de falhas (dead-letter), com reprocessamento manual.",
    "12-painel-divergencias-da-reconciliacao": "Divergências apontadas pela reconciliação: ela detecta, não corrige em silêncio.",
  }),
  diagramas: [
    { arquivo: "arquitetura.svg", legenda: "Arquitetura da integração: CRM, ERP, API, fila em PostgreSQL, worker e reconciliação" },
    { arquivo: "modelo-de-dados.svg", legenda: "Modelo de dados: evento, job, tentativas, vínculos e divergências" },
  ],
  capa: "06-painel-visao-geral",
});
