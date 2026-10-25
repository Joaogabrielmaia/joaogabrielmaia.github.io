import { ProjectSchema } from "../schema";
import { repo, prints, AVISO_CENARIO } from "./_util";

const r = repo("Customer-Health");

export const termometro = ProjectSchema.parse({
  slug: "termometro",
  tipo: "novo",
  titulo: "Termômetro",
  frase: "Saúde dos clientes (customer health): quem o time de CS deve contatar primeiro, e por quê.",
  ordem: 6,
  destaqueNaHome: false,
  cenario: { empresa: "Frota Leve (SaaS de gestão de frotas)", descricao: AVISO_CENARIO },
  repositorio: r.url,
  repoNome: r.nome,
  status: "v1.1.0 · roda localmente",
  resumo30s: {
    problema:
      "Um time de CS de três pessoas, com 120 clientes, decidia “quem contatar” de cabeça.",
    construi:
      "Um score de 0 a 100 em seis dimensões, com explicação do porquê de cada nota, contas em risco ordenadas por urgência, cinco playbooks de CS com gatilho e mensagem pronta, registro de ação, configuração de pesos com simulação, análise de sensibilidade e alerta de queda brusca.",
    importa:
      "Transforma “quem devo contatar?” em regras explícitas e acionáveis, respeitando o limite de 15 contatos por semana por CSM.",
  },
  stack: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "Vitest", "Playwright", "Docker Compose"],
  areas: [
    { area: "customer-success", nivel: "principal", evidencia: "Transforma “quem devo contatar?” em regras explícitas, playbooks e prioridade por urgência." },
    { area: "consultor-solucoes", nivel: "relacionado", evidencia: "Resolve a contradição entre “um número só” e “contexto” mostrando os dois." },
    { area: "implantacao", nivel: "relacionado", evidencia: "A dimensão de adoção olha o que o cliente usa depois da entrada em uso." },
    { area: "negocios-requisitos", nivel: "relacionado", evidencia: "Requisitos e regras analíticas do score documentados." },
    { area: "desenvolvimento-full-stack", nivel: "principal", evidencia: "Next.js, TypeScript e Prisma, com motor de score testado: 76 unitários, 5 de integração e 14 E2E." },
  ],
  destaques: [
    "Pesos: adoção 25, engajamento 20, suporte 15, satisfação 15, financeiro 15, contrato 10",
    "Dado ausente sai do cálculo e os pesos são renormalizados, com aviso de confiança baixa",
    "Recusei mostrar “chance de cancelar em %” por não ter dados reais para calibrar",
    "Sensibilidade com 22 cenários: a ordem das contas é estável; a cor é sensível aos limites",
  ],
  decisoes: [
    {
      decisao: "Score é uma heurística explicável, não uma previsão",
      ganhei: "Cada nota mostra a explicação; o time confia no que vê.",
      paguei: "Não dá uma “probabilidade de cancelamento”.",
      quandoMudaria: "Se houvesse dados reais de cancelamento para calibrar.",
      adr: r.doc("docs/04-arquitetura/01-adrs.md"),
    },
    {
      decisao: "Priorizar por urgência (risco × valor × renovação), não só por cor",
      ganhei: "A ordem das contas é estável mesmo quando os limites de cor se movem.",
      paguei: "Quem olha só a cor perde a ordem.",
      quandoMudaria: "Se o time pedisse outro critério de prioridade.",
      adr: r.doc("docs/03-metodologia-do-score/sensibilidade-resultados.md"),
    },
  ],
  numeros: [
    { rotulo: "Testes unitários", valor: "76", fonte: "README do repositório (commit d45b65c)", data: "24/10/2026", confere: "76 unitários" },
    { rotulo: "Testes de integração (PostgreSQL real)", valor: "5", fonte: "README do repositório (commit d45b65c)", data: "24/10/2026", confere: "5 de integração" },
    { rotulo: "Testes E2E", valor: "14", fonte: "README do repositório (commit 4598c4c)", data: "24/10/2026", confere: "14 de ponta a ponta" },
    { rotulo: "Dados sintéticos (semente fixa)", valor: "120 contas e 41.578 registros de uso", fonte: "README do repositório", data: "2026", confere: "41.578" },
  ],
  naoValidado: [
    "Os dados são sintéticos e desenhados por arquétipos: “acertar” os arquétipos não é validação.",
    "Cobertura de testes, acessibilidade e carga não foram medidas; o desempenho foi medido só com 120 contas.",
    "O relatório do Power BI não foi montado: existem CSVs, modelo de dados e medidas DAX, mas não há .pbix nem prints.",
    "Segurança é de demonstração local, sem recuperação de senha, MFA ou limite de tentativas.",
  ],
  documentos: [
    { rotulo: "README", url: r.url },
    { rotulo: "Guia da série (INDEX)", url: r.doc("docs/INDEX.md") },
    { rotulo: "Dados sintéticos", url: r.doc("docs/00-sobre-este-caso/dados-sinteticos.md") },
    { rotulo: "Regras analíticas do score", url: r.doc("docs/02-definicao/02-regras-de-negocio.md") },
    { rotulo: "Sensibilidade (resultados)", url: r.doc("docs/03-metodologia-do-score/sensibilidade-resultados.md") },
    { rotulo: "ADRs", url: r.doc("docs/04-arquitetura/01-adrs.md") },
    { rotulo: "Plano e resultados de testes", url: r.doc("docs/05-qualidade/01-plano-e-resultados.md") },
    { rotulo: "Retrospectiva final", url: r.doc("docs/06-pos-lancamento/04-retrospectiva-final.md") },
  ],
  roteiroLeitura: [
    { rotulo: "1. README", url: r.url },
    { rotulo: "2. Dados sintéticos: o que é e o que não é", url: r.doc("docs/00-sobre-este-caso/dados-sinteticos.md") },
    { rotulo: "3. Discovery com a liderança de CS", url: r.doc("docs/01-discovery/03-reuniao-lider-de-cs.md") },
    { rotulo: "4. Regras de negócio", url: r.doc("docs/02-definicao/02-regras-de-negocio.md") },
    { rotulo: "5. Sensibilidade", url: r.doc("docs/03-metodologia-do-score/sensibilidade-resultados.md") },
    { rotulo: "6. ADRs", url: r.doc("docs/04-arquitetura/01-adrs.md") },
    { rotulo: "7. Retrospectiva final", url: r.doc("docs/06-pos-lancamento/04-retrospectiva-final.md") },
  ],
  prints: prints("termometro", {
    "01-painel-executivo": "Painel executivo: contas críticas, receita em risco, rosca por cor, tendência de 12 semanas e as contas mais urgentes.",
    "02-contas-em-risco": "Contas em risco ordenadas por urgência, com filtros por cor, segmento e CSM.",
    "04-explicacao-do-score": "“Por que este score?”: as seis dimensões, o peso usado e o que mais puxa a nota para baixo.",
    "08-configuracao-de-pesos": "Configuração de pesos com simulação do efeito antes de salvar.",
    "09-sensibilidade": "Análise de sensibilidade: 22 cenários, contas que mudam de cor e correlação de Spearman.",
  }),
  diagramas: [{ arquivo: "contexto.svg", legenda: "Contexto: CSM e admin usam a aplicação, que lê e grava no PostgreSQL e exporta CSVs" }],
  capa: "01-painel-executivo",
});
