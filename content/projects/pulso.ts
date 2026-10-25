import { ProjectSchema } from "../schema";
import { repo, prints, AVISO_CENARIO } from "./_util";

const r = repo("Automated-CRM-follow-up-on-WhatsApp");

export const pulso = ProjectSchema.parse({
  slug: "pulso",
  tipo: "novo",
  titulo: "Pulso",
  frase: "Mini CRM com follow-up automático no WhatsApp que não incomoda o cliente.",
  ordem: 2,
  destaqueNaHome: true,
  cenario: { empresa: "Casa Nova Reformas", descricao: AVISO_CENARIO },
  repositorio: r.url,
  repoNome: r.nome,
  status: "roda localmente",
  resumo30s: {
    problema:
      "Numa pequena empresa de reformas, o lead esfria depois do orçamento porque ninguém lembra de voltar a falar na hora certa. Automatizar é fácil; difícil é fazer sem incomodar o cliente.",
    construi:
      "Funil de vendas configurável, tarefas do dia, linha do tempo do lead, regras de automação, modelos de mensagem com variáveis, log, simulador de resposta, painel e importação por CSV.",
    importa:
      "Mostra uma cadência de follow-up com freio embutido, que para quando o lead responde e respeita quem pede para sair: o raciocínio por trás de qualquer automação de vendas.",
  },
  stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "n8n", "Zod", "Vitest", "Playwright", "Docker Compose"],
  areas: [
    { area: "analista-automacao", nivel: "principal", evidencia: "Idempotência por restrição única, fila fora do horário, retentativa com backoff e log de decisões." },
    { area: "sdr-bdr", nivel: "principal", evidencia: "Cadência de follow-up com parada por resposta e opt-out, e funil por etapas." },
    { area: "customer-success", nivel: "relacionado", evidencia: "O follow-up pós-orçamento tem tom e frequência controlados." },
    { area: "implantacao", nivel: "relacionado", evidencia: "Plano de go-live, rollback e treinamento documentados." },
    { area: "consultor-automacao-ia", nivel: "relacionado", evidencia: "Mesma disciplina de automação, aqui sem IA." },
    { area: "desenvolvimento-full-stack", nivel: "relacionado", evidencia: "Next.js, Prisma e PostgreSQL, com 200 testes de unidade e integração e 16 E2E." },
  ],
  destaques: [
    "Só envia em horário comercial: fora dele a mensagem espera na fila",
    "Nunca manda a mesma mensagem duas vezes (restrição única no banco, mesmo com dois ciclos ao mesmo tempo)",
    "Para quando o lead responde e avisa a atendente",
    "Respeita quem pede para sair (SAIR, PARAR, STOP)",
    "O n8n só dispara o ciclo a cada 5 minutos; toda decisão de negócio fica no app, em funções puras testadas",
  ],
  decisoes: [
    {
      decisao: "n8n só como agendador",
      ganhei: "Se o n8n cair, o próximo ciclo recupera o atraso; as regras ficam testadas no código.",
      paguei: "Menos conveniência visual para quem quer mexer nas regras sem código.",
      quandoMudaria: "Se a equipe de operação quisesse editar fluxos sem passar por desenvolvimento.",
      adr: r.doc("docs/03-arquitetura/adr/ADR-001-n8n-ou-jobs-em-codigo.md"),
    },
    {
      decisao: "Idempotência por restrição única no banco",
      ganhei: "A mesma mensagem não sai duas vezes, nem com dois ciclos ao mesmo tempo.",
      paguei: "Cada tipo de envio precisa ter uma chave bem definida.",
      quandoMudaria: "Se o provedor oferecesse deduplicação confiável do lado dele.",
      adr: r.doc("docs/03-arquitetura/adr/ADR-003-idempotencia.md"),
    },
    {
      decisao: "Provedor de mensagens atrás de uma interface (adaptador simulado)",
      ganhei: "Dá para testar tudo sem enviar mensagens reais e trocar o provedor depois.",
      paguei: "A API oficial da Meta ainda não foi validada de verdade.",
      quandoMudaria: "Antes de qualquer uso real, validando a API oficial.",
      adr: r.doc("docs/03-arquitetura/adr/ADR-002-provedor-de-mensagens.md"),
    },
    {
      decisao: "Sem loading.tsx",
      ganhei: "Um defeito que só aparecia no build de produção deixou de existir (ações sem atualizar a tela).",
      paguei: "Sem o indicador automático de carregamento.",
      quandoMudaria: "Se o defeito for corrigido no framework.",
      adr: r.doc("docs/03-arquitetura/adr/ADR-010-sem-loading-tsx.md"),
    },
  ],
  numeros: [
    { rotulo: "Testes de unidade e integração", valor: "200 (111 + 89)", fonte: "README do repositório", data: "24/10/2026", confere: "200 de unidade e integração (111 + 89)" },
    { rotulo: "Testes E2E", valor: "16", fonte: "README do repositório", data: "24/10/2026", confere: "16 E2E" },
  ],
  naoValidado: [
    "A API real da Meta.",
    "O agendamento do n8n rodando por horas.",
  ],
  documentos: [
    { rotulo: "README", url: r.url },
    { rotulo: "Guia da série (INDEX)", url: r.doc("docs/INDEX.md") },
    { rotulo: "Regras de negócio", url: r.doc("docs/02-definicao/03-regras-de-negocio.md") },
    { rotulo: "Fluxo da automação", url: r.doc("docs/03-arquitetura/02-fluxo-da-automacao.md") },
    { rotulo: "Modos de falha", url: r.doc("docs/03-arquitetura/05-modos-de-falha.md") },
    { rotulo: "ADRs", url: r.tree("docs/03-arquitetura/adr") },
    { rotulo: "Boas práticas de mensagem", url: r.doc("docs/06-go-live/boas-praticas-de-mensagem.md") },
    { rotulo: "Runbook", url: r.doc("docs/07-pos-go-live/runbook.md") },
  ],
  roteiroLeitura: [
    { rotulo: "1. README", url: r.url },
    { rotulo: "2. Brainstorm e escolha da ideia", url: r.doc("docs/01-discovery/01-brainstorm-e-escolha.md") },
    { rotulo: "3. Regras de negócio (RN-01 a RN-19)", url: r.doc("docs/02-definicao/03-regras-de-negocio.md") },
    { rotulo: "4. Fluxo da automação", url: r.doc("docs/03-arquitetura/02-fluxo-da-automacao.md") },
    { rotulo: "5. ADRs", url: r.tree("docs/03-arquitetura/adr") },
    { rotulo: "6. Modos de falha", url: r.doc("docs/03-arquitetura/05-modos-de-falha.md") },
    { rotulo: "7. Rollout, runbook e retrospectiva", url: r.doc("docs/06-go-live/rollout.md") },
  ],
  prints: prints("pulso", {
    "02-hoje": "“O que fazer hoje”: a atendente vê as tarefas do dia sem abrir o funil. A tarefa “Responder” nasce quando o lead escreve.",
    "03-funil": "O funil em seis colunas; as etapas são configuráveis.",
    "08-automacao": "Regras de automação e o log do que o ciclo decidiu.",
    "09-simulador": "Simulador de resposta do lead: a automação para e a atendente é avisada.",
    "05-painel": "Painel com os números do funil.",
  }),
  diagramas: [
    { arquivo: "fluxo-n8n.svg", legenda: "O n8n só dispara o ciclo a cada 5 minutos" },
    { arquivo: "sequencia-followup.svg", legenda: "Sequência de um follow-up, do contato registrado à resposta do lead" },
  ],
  capa: "03-funil",
});
