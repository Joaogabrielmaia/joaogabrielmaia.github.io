import { ProjectSchema } from "../schema";
import { repo, prints, AVISO_CENARIO } from "./_util";

const r = repo("End-to-end-process-automation");

export const fluxo = ProjectSchema.parse({
  slug: "fluxo",
  tipo: "novo",
  titulo: "Fluxo",
  frase: "Automação de pedidos recebidos por e-mail, com fila de exceções para o que precisa de decisão humana.",
  ordem: 4,
  destaqueNaHome: false,
  cenario: { empresa: "Distribuidora Santa Clara", descricao: AVISO_CENARIO },
  repositorio: r.url,
  repoNome: r.nome,
  status: "roda localmente",
  resumo30s: {
    problema:
      "Uma distribuidora de materiais elétricos recebe cerca de 80 pedidos por dia por e-mail e lança tudo à mão numa planilha.",
    construi:
      "Um fluxo que recebe o pedido (tabela, texto livre ou PDF), extrai os dados, valida as regras de negócio, registra no banco, avisa a equipe e alimenta um painel. O que precisa de decisão humana vai para uma fila de exceções, com o motivo e um formulário de correção e reprocessamento.",
    importa:
      "Mostra o processo antes e depois, a medição honesta do que funciona e o que acontece quando algo dá errado.",
  },
  stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "n8n", "Zod", "Vitest", "Playwright", "Docker Compose"],
  areas: [
    { area: "analista-automacao", nivel: "principal", evidencia: "Pipeline com idempotência, retentativa, fila de exceções e alerta de falha." },
    { area: "negocios-requisitos", nivel: "principal", evidencia: "Processo AS-IS e TO-BE e regras de negócio RN-02 a RN-09." },
    { area: "consultor-automacao-ia", nivel: "relacionado", evidencia: "Mesma lógica de medir antes de prometer ganho (o modo com LLM é opcional e não foi executado)." },
    { area: "implantacao", nivel: "relacionado", evidencia: "Entrada em uso em “modo sombra”, ao lado do processo manual." },
    { area: "analista-projetos", nivel: "relacionado", evidencia: "Método de medição e riscos documentados." },
    { area: "consultor-solucoes", nivel: "relacionado", evidencia: "A estimativa de ganho vem com fórmula visível e entradas editáveis." },
    { area: "desenvolvimento-full-stack", nivel: "relacionado", evidencia: "Next.js, Prisma e PostgreSQL, com regras de negócio em código tipado, 80 testes e 5 E2E." },
  ],
  destaques: [
    "O n8n orquestra a entrada (retentativa e alerta); as regras ficam em código tipado e testado",
    "Pedido acima de R$ 15.000 exige aprovação humana com justificativa",
    "Teste de carga com 500 mensagens, todas com a decisão esperada",
    "A primeira execução da carga achou um deadlock; corrigi e deixei as duas execuções registradas",
  ],
  decisoes: [
    {
      decisao: "Regras de negócio em código tipado e testado, n8n só na orquestração",
      ganhei: "As regras são testáveis e versionadas; o n8n cuida de retentativa e alerta.",
      paguei: "Mudar uma regra exige mexer no código.",
      quandoMudaria: "Se as regras mudassem toda semana e o time precisasse editá-las sem desenvolvimento.",
      adr: r.doc("docs/03-arquitetura/ADRs.md"),
    },
    {
      decisao: "Fila de exceções com correção e revalidação",
      ganhei: "Corrigir não pula a validação: o pedido é revalidado e só vira registrado se passar.",
      paguei: "Uma tela a mais para a equipe acompanhar.",
      quandoMudaria: "Se a taxa de exceção caísse a ponto de a fila não justificar uma tela própria.",
      adr: r.doc("docs/03-arquitetura/ADRs.md"),
    },
  ],
  numeros: [
    { rotulo: "Testes unitários e de integração", valor: "80 de 80", fonte: "README do repositório (commit 09f1d18)", data: "24/10/2026", confere: "80 de 80" },
    { rotulo: "Testes E2E", valor: "5 de 5", fonte: "README do repositório (commit 09f1d18)", data: "24/10/2026", confere: "5 de 5 E2E" },
    { rotulo: "Carga de 500 mensagens", valor: "500 de 500 com a decisão esperada; mediana de 95,4 ms e p95 de 152,1 ms", fonte: "README do repositório (correção no commit 2f2ef7b)", data: "23/10/2026", confere: "500 de 500" },
    { rotulo: "Primeira execução da carga", valor: "491 de 500 (5 falhas por deadlock e 4 divergências do extrator)", fonte: "README do repositório", data: "23/10/2026", confere: "491 de 500" },
    { rotulo: "Teste de regressão do deadlock", valor: "falhou em 6 de 6 rodadas com o código anterior e passou em 6 de 6 com o atual", fonte: "README do repositório", data: "24/10/2026", confere: "6 de 6" },
    { rotulo: "ESTIMATIVA de ganho de tempo (não medida)", valor: "211,2 h/mês liberadas no cenário base (80 pedidos/dia, 22 dias úteis, 8 min manuais, 20% de revisão, 4 min por exceção)", fonte: "README e relatório de medição: fórmula e entradas visíveis", data: "2026", confere: "211,2 horas por mês" },
  ],
  naoValidado: [
    "Extração por regras: o modo com LLM é opcional e não foi executado.",
    "Notificação simulada: a tabela não prova entrega real.",
    "A caixa de e-mail é um webhook; IMAP real não foi testado.",
    "Não há relatório do Power BI publicado, só CSVs.",
    "Auditoria por convenção do código; só /api/inbound e /api/notify exigem chave.",
    "A importação diária de CSV do ERP, citada como premissa, não está implementada.",
  ],
  documentos: [
    { rotulo: "README", url: r.url },
    { rotulo: "Guia da série (INDEX)", url: r.doc("docs/INDEX.md") },
    { rotulo: "Regras de negócio", url: r.doc("docs/02-definicao/02-regras-de-negocio.md") },
    { rotulo: "Processo TO-BE", url: r.doc("docs/02-definicao/07-processo-to-be.md") },
    { rotulo: "ADRs", url: r.doc("docs/03-arquitetura/ADRs.md") },
    { rotulo: "Relatório de medição", url: r.doc("docs/04-processo/relatorio-de-medicao.md") },
    { rotulo: "Resultados de testes", url: r.doc("docs/05-qualidade/01-resultados-de-testes.md") },
  ],
  roteiroLeitura: [
    { rotulo: "1. README", url: r.url },
    { rotulo: "2. Oportunidades e negócio", url: r.doc("docs/01-discovery/01-oportunidades.md") },
    { rotulo: "3. Processo atual (AS-IS)", url: r.doc("docs/01-discovery/06-processo-atual-as-is.md") },
    { rotulo: "4. Regras de negócio", url: r.doc("docs/02-definicao/02-regras-de-negocio.md") },
    { rotulo: "5. Processo desejado (TO-BE)", url: r.doc("docs/02-definicao/07-processo-to-be.md") },
    { rotulo: "6. Relatório de medição", url: r.doc("docs/04-processo/relatorio-de-medicao.md") },
    { rotulo: "7. Resultados de testes", url: r.doc("docs/05-qualidade/01-resultados-de-testes.md") },
  ],
  prints: prints("fluxo", {
    "01-painel": "Painel com indicadores, barras por status e por motivo de exceção e os últimos pedidos.",
    "03-detalhe-pedido-com-excecao": "Pedido com exceção: item fora do cadastro, formulário de correção, trilha de auditoria e a mensagem original.",
    "04-fila-de-excecoes": "Fila de exceções: a interface entre a automação e a pessoa, com o tempo parado de cada uma.",
    "06-aprovacao-humana": "Acima de R$ 15.000 a aprovação é obrigatória, com justificativa registrada na auditoria.",
    "09-medicao": "Resultados da carga de 500 mensagens e a estimativa de ganho, com as entradas visíveis.",
  }),
  diagramas: [{ arquivo: "do-email-ao-registro.svg", legenda: "Do e-mail ao registro: n8n, extração, validação, fila de exceções e alerta de falha" }],
  capa: "04-fila-de-excecoes",
});
