import { RoleSchema, type Role } from "./schema";
import { z } from "zod";

const raw = [
  {
    slug: "desenvolvimento-full-stack",
    nome: "Desenvolvimento full stack",
    nomeCurto: "Full stack",
    pitch: "Construo aplicações web completas, do banco de dados à interface, com testes automatizados.",
    oQueFaz:
      "Constrói e mantém aplicações web de ponta a ponta: modelagem do banco, APIs, interface e testes automatizados.",
    oQueValoriza: "Código claro e testado, APIs bem definidas, modelagem de dados e entregas frequentes.",
    evidencias: [
      { texto: "Aplicações com TypeScript, React, Next.js, Node.js, PostgreSQL e Prisma desde abr/2026, das APIs e integrações à interface.", fonte: "desenvolvedor-full-stack-autonomo" },
      { texto: "Desenvolvimento no ERP Vortex (ecossistema JavaScript/TypeScript), além da gestão do projeto.", fonte: "erp-vortex" },
    ],
    competencias: ["TypeScript", "React e Next.js", "Node.js e APIs REST", "PostgreSQL e Prisma", "Testes automatizados"],
  },
  {
    slug: "implantacao",
    nome: "Implantação de sistemas",
    nomeCurto: "Implantação de sistemas",
    pitch: "Coloco um sistema para funcionar na rotina: processo atual, configuração, go-live e acompanhamento depois.",
    oQueFaz:
      "Coloca um sistema para funcionar na rotina real do cliente: entende o processo atual, configura, treina as pessoas, conduz a entrada em uso e acompanha o que acontece depois.",
    oQueValoriza:
      "Entender o processo do cliente, configurar, treinar, conduzir o go-live e acompanhar depois.",
    evidencias: [
      { texto: "Rollouts de 70 e 140 máquinas na Hotmart, em Windows e Mac, do preparo à instalação dos softwares corporativos.", fonte: "hotmart-suporte-ti" },
      { texto: "Rollouts de telefonia por iniciativa própria, do começo ao fim: entrega dos aparelhos, lançamento no sistema e contato com operadoras.", fonte: "hotmart-suporte-ti" },
      { texto: "Discovery, requisitos e gestão de projeto no ERP Vortex (time de 8) e nos clientes atuais, com manutenção contínua depois da entrega.", fonte: "desenvolvedor-full-stack-autonomo" },
    ],
    competencias: ["Discovery", "Rollout e go-live", "Scrum", "Requisitos", "MDM (Workspace ONE)"],
  },
  {
    slug: "consultor-automacao-ia",
    nome: "Automação com IA",
    nomeCurto: "Automação com IA",
    pitch: "Mapeio o que vale automatizar, construo, meço e documento os limites.",
    oQueFaz:
      "Descobre qual processo do cliente pode ser automatizado (com ou sem IA), constrói a solução, mede o resultado e explica com honestidade o que ela não faz.",
    oQueValoriza: "Identificar o processo automatizável, construir, medir e explicar os limites.",
    evidencias: [
      { texto: "Script agendado no Windows que desliga as cerca de 40 TVs da empresa em horário definido, criado na Hotmart.", fonte: "hotmart-suporte-ti" },
      { texto: "Gestão de linhas de WhatsApp usadas só para automação, com contato direto com quem rodava as automações via Meta.", fonte: "hotmart-suporte-ti" },
      { texto: "CRM com WhatsApp e automações, e agentes de IA, em projetos de clientes.", fonte: "desenvolvedor-full-stack-autonomo" },
    ],
    competencias: ["IA generativa", "Agentes de IA", "RAG", "n8n", "Engenharia de prompts"],
  },
  {
    slug: "analista-automacao",
    nome: "Automação de processos e integrações",
    nomeCurto: "Automação e integrações",
    pitch: "Fluxos confiáveis, com integração e tratamento de erro desde o primeiro dia.",
    oQueFaz:
      "Constrói e mantém fluxos que rodam sozinhos: integra sistemas, trata falhas, evita duplicidade e deixa um registro do que aconteceu.",
    oQueValoriza: "Fluxos confiáveis, integração e tratamento de erro.",
    evidencias: [
      { texto: "Script agendado na Hotmart para desligar as TVs, rodando sem intervenção.", fonte: "hotmart-suporte-ti" },
      { texto: "Gestão das linhas usadas para automação de WhatsApp e auditoria de toda a base de linhas.", fonte: "hotmart-suporte-ti" },
      { texto: "Automações com n8n e integrações por API e webhooks em projetos de clientes.", fonte: "desenvolvedor-full-stack-autonomo" },
    ],
    competencias: ["n8n", "APIs REST e webhooks", "Idempotência e retentativa", "PostgreSQL", "Testes"],
  },
  {
    slug: "customer-success",
    nome: "Suporte e acompanhamento de uso",
    nomeCurto: "Suporte e adoção",
    pitch: "Atendo o problema, acompanho o uso e sinalizo risco cedo.",
    oQueFaz:
      "Acompanha o cliente depois da venda: garante que ele use o produto, resolve o que trava, antecipa sinais de risco e ajuda na renovação.",
    oQueValoriza: "Relacionamento, adoção, resolver problema e antecipar risco.",
    evidencias: [
      { texto: "Cerca de 30 chamados por semana no Jira, no mínimo, com priorização por criticidade e atendimento a áreas internas.", fonte: "hotmart-suporte-ti" },
      { texto: "Manutenção contínua de um cliente de e-commerce que voltou a contratar várias atualizações, algumas maiores que o primeiro projeto.", fonte: "desenvolvedor-full-stack-autonomo" },
    ],
    competencias: ["Atendimento", "Priorização por criticidade", "Jira", "Explicar trade-offs a não técnicos", "Acompanhamento pós-entrega"],
  },
  {
    slug: "sdr-bdr",
    nome: "Prospecção e CRM",
    nomeCurto: "Prospecção e CRM",
    pitch: "Prospecção, conversa e cadência, com CRM como ferramenta de trabalho.",
    oQueFaz:
      "Abre conversas com possíveis clientes, qualifica o interesse, mantém uma cadência de contato e registra tudo no CRM para o time de vendas.",
    oQueValoriza: "Prospecção, conversa, cadência e uso de CRM.",
    evidencias: [
      { texto: "Ligações e mensagens por WhatsApp para vender landing pages, quando precisava criar relevância de clientes; cerca de 10 clientes fechados por ligação, com muitas ligações não atendidas e boa parte dos clientes vindo por indicação.", fonte: "vendas" },
      { texto: "Pipedrive como usuário; estudo de HubSpot por vídeos e engenharia reversa de funcionalidades para aplicar nos CRMs que desenvolvo.", fonte: "vendas" },
    ],
    competencias: ["Prospecção por ligação e WhatsApp", "Pipedrive", "Cadência de contato", "CRM sob medida"],
  },
  {
    slug: "consultor-solucoes",
    nome: "Desenho de soluções",
    nomeCurto: "Desenho de soluções",
    pitch: "Traduzo o problema em solução técnica e explico os trade-offs.",
    oQueFaz:
      "Entende a dor do cliente, desenha a solução, explica as escolhas (e o que se perde em cada uma) e apoia a venda do ponto de vista técnico.",
    oQueValoriza: "Traduzir problema em solução, explicar trade-offs e apoiar a venda.",
    evidencias: [
      { texto: "Explico decisões de arquitetura ao cliente, como o equilíbrio entre velocidade do site e segurança de imagens e dados sensíveis.", fonte: "desenvolvedor-full-stack-autonomo" },
      { texto: "Discovery com clientes reais para transformar o pedido em requisitos e regras de negócio.", fonte: "desenvolvedor-full-stack-autonomo" },
    ],
    competencias: ["Discovery", "Arquitetura de solução", "Comunicação com não técnicos", "APIs", "Pré-venda técnica"],
  },
  {
    slug: "analista-projetos",
    nome: "Gestão de projetos e métodos ágeis",
    nomeCurto: "Projetos e métodos ágeis",
    pitch: "Planejo, priorizo, acompanho a entrega e deixo os riscos visíveis.",
    oQueFaz:
      "Organiza o trabalho em etapas, prioriza o backlog, acompanha prazos e entregas e mantém riscos e decisões registrados.",
    oQueValoriza: "Planejar, priorizar, acompanhar a entrega e gerir riscos.",
    evidencias: [
      { texto: "Gestor do ERP Vortex, com time de 8 pessoas, Scrum em sprints, protótipos para o cliente e feedback contínuo.", fonte: "erp-vortex" },
      { texto: "Gestão dos projetos como autônomo, com Scrum e acompanhamento da entrega.", fonte: "desenvolvedor-full-stack-autonomo" },
    ],
    competencias: ["Scrum", "Kanban", "Planejamento de sprints", "Refinamento de backlog", "Noções de PMBOK"],
  },
  {
    slug: "negocios-requisitos",
    nome: "Requisitos e regras de negócio",
    nomeCurto: "Requisitos e regras",
    pitch: "Levanto, documento e rastreio requisitos e regras de negócio.",
    oQueFaz:
      "Conversa com quem usa o processo, descobre o que realmente precisa ser feito e escreve requisitos e regras que o time consegue construir e testar.",
    oQueValoriza: "Levantar, documentar e rastrear requisitos e regras.",
    evidencias: [
      { texto: "Requisitos funcionais e não funcionais e regras de negócio no ERP Vortex.", fonte: "erp-vortex" },
      { texto: "Mesmo trabalho nos clientes atuais, com modelagem do banco a partir das regras.", fonte: "desenvolvedor-full-stack-autonomo" },
    ],
    competencias: ["Levantamento de requisitos", "Regras de negócio", "Especificação funcional", "Rastreabilidade", "Alinhamento com stakeholders"],
  },
];

export const roles: Role[] = z.array(RoleSchema).parse(raw);

export const roleBySlug = (slug: string) => roles.find((r) => r.slug === slug);
