import { ExperienceSchema, type Experience } from "../schema";
import { z } from "zod";

const raw = [
  {
    slug: "desenvolvedor-full-stack-autonomo",
    cargo: "Desenvolvedor Full Stack (atuação autônoma)",
    organizacao: "Equipe pequena de projetos de clientes",
    periodo: "abr/2026 — presente",
    atual: true,
    resumo:
      "Trabalho com uma equipe de 2 a 3 pessoas que assume projetos de clientes e atendo também clientes particulares. Cuido do discovery, traduzo o pedido para a equipe, acompanho o desenvolvimento e modelo o banco. Também desenvolvo.",
    destaques: [
      "Cerca de 15 clientes desde abr/2026",
      "Do discovery à manutenção contínua",
      "Cliente de e-commerce que voltou a contratar",
    ],
    secoes: [
      {
        titulo: "Como eu trabalho",
        itens: [
          "Discovery: converso com quem usa o processo e entendo o negócio do cliente.",
          "Requisitos funcionais e não funcionais e regras de negócio, escritos de forma que o time construa e teste.",
          "Decisões com o cliente: explico as opções e o que se ganha e se perde em cada uma.",
          "Desenvolvimento acompanhado em Scrum, com entregas curtas.",
          "Entrega e manutenção: continuo por perto depois que o sistema entra em uso.",
        ],
      },
      {
        titulo: "Em que setores",
        itens: [
          "Logística e varejo (galpões com estoque, e-commerce).",
          "Serviços (hotel e creche).",
          "Empresas que usam CRM e ERP.",
        ],
      },
      {
        titulo: "Atividades",
        itens: [
          "Requisitos, regras de negócio e modelagem do banco de dados.",
          "APIs e integrações.",
          "Automações e agentes de IA.",
          "Testes e acompanhamento da entrega.",
        ],
      },
    ],
    historias: [
      {
        titulo: "Exemplo de trade-off: velocidade × segurança",
        texto:
          "Um cliente queria um site rápido e, ao mesmo tempo, uma estrutura robusta de segurança para imagens e dados sensíveis. Mais segurança pode deixar o carregamento um pouco mais lento. Levei essa decisão ao cliente, explicando as duas opções, em vez de decidir sozinho.",
      },
    ],
    casos: [
      {
        titulo: "E-commerce",
        texto:
          "O cliente vendia por PDF enviado no WhatsApp e hoje vende pela loja, com as vendas acontecendo sozinhas. Continuo dando manutenção (por exemplo, trocamos o storage porque as imagens estavam pesando o projeto). O sinal de que funcionou: o cliente voltou a contratar várias atualizações, algumas de valor maior que o primeiro projeto.",
      },
      {
        titulo: "Sistema para hotel e creche",
        texto:
          "Cliente particular que fazia os registros à mão. Desenvolvi o sistema e a interface que enviam tudo para a nuvem, evitando perda de documentos e o armazenamento de papel.",
      },
      {
        titulo: "CRM com ERP integrado",
        texto:
          "Projeto da equipe: contas a pagar e saúde financeira da empresa, mais um CRM integrado ao WhatsApp para mensagens e automações. Stack: JavaScript, TypeScript, Node.js, Prisma e uma biblioteca JavaScript de autenticação. Nome e dados do cliente são confidenciais.",
      },
      {
        titulo: "Prospecção e vendas (freelance, antes da IA)",
        texto:
          "Fiz ligações e contatos por WhatsApp para vender landing pages, quando precisava criar relevância de clientes. Fechei cerca de 10 clientes por ligação (muitas ligações não eram atendidas, e boa parte dos clientes veio por indicação). Estudei conversa com cliente e CRM: uso Pipedrive, estudei HubSpot por vídeos e fiz engenharia reversa de funcionalidades para aplicar nos CRMs que desenvolvo.",
      },
    ],
    ferramentas: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma ORM",
      "APIs REST",
      "Pipedrive",
    ],
    aprendi: [
      "Cliente não pede requisito: pede um problema resolvido. Meu trabalho é traduzir um no outro.",
      "Explicar o custo de cada escolha dá ao cliente confiança para decidir.",
    ],
    areas: [
      "implantacao",
      "consultor-solucoes",
      "analista-projetos",
      "negocios-requisitos",
      "customer-success",
      "sdr-bdr",
      "consultor-automacao-ia",
    ],
    naoPublicar:
      "Sem nomes de clientes e sem números de horas economizadas ou vendas geradas: não há medição.",
  },
  {
    slug: "hotmart-suporte-ti",
    cargo: "Aprendiz de Suporte de TI",
    organizacao: "Hotmart",
    periodo: "jul/2025 — mar/2026 (9 meses)",
    local: "Belo Horizonte · meio período, presencial",
    atual: false,
    resumo:
      "Atendi colaboradores e áreas internas, conduzi rollouts de máquinas e de telefonia, cuidei das salas de reunião e fiz uma automação simples que desliga as TVs da empresa.",
    destaques: [
      "Rollouts de 70 e 140 máquinas",
      "30+ chamados por semana",
      "Script que desliga as TVs",
    ],
    secoes: [
      {
        titulo: "Atendimento e chamados",
        itens: [
          "Abertura, priorização e acompanhamento de chamados no Jira, no mínimo cerca de 30 por semana.",
          "Priorização por criticidade e atendimento a colaboradores e áreas internas.",
        ],
      },
      {
        titulo: "Rollouts de máquinas",
        itens: [
          "Vários, de tamanhos diferentes (por exemplo, 70 e 140 máquinas), em Windows e Mac.",
          "Preparação e configuração das máquinas de novos colaboradores e instalação de softwares corporativos.",
        ],
      },
      {
        titulo: "Telefonia corporativa",
        itens: [
          "Rollouts de telefonia por iniciativa própria, do começo ao fim.",
          "Entrega dos telefones aos usuários e lançamento no sistema (inclusive o identificador do chip, que vincula a linha ao e-mail institucional).",
          "Contato com operadoras e empresas para solicitar número e comprar chip.",
          "Gestão de linhas usadas só para automação de WhatsApp e contato com quem fazia automações via Meta para fornecer códigos.",
        ],
      },
      {
        titulo: "Salas de reunião e eventos",
        itens: [
          "Zoom Rooms, microfones, projetores, TVs, computadores, tablets, câmeras e áudio e vídeo, inclusive manutenção simples.",
        ],
      },
      {
        titulo: "MDM",
        itens: ["Administração remota de dispositivos com Workspace ONE."],
      },
      {
        titulo: "Estoque e hardware",
        itens: [
          "Manutenção de notebooks.",
          "Recolhimento de máquinas defasadas para o estoque; por um período assumi esse processo sozinho.",
        ],
      },
      {
        titulo: "Automação",
        itens: [
          "Script simples (executável) agendado no Agendador de Tarefas do Windows para desligar as TVs da empresa em horário definido: cerca de 40 TVs (estimativa).",
        ],
      },
    ],
    historias: [
      {
        titulo: "Auditoria das linhas de telefonia",
        texto:
          "Recolhi diversas linhas e reorganizei linhas perdidas (inclusive por excesso de mensagens, que constavam como úteis). Contatei pessoas, procurei no estoque e verifiquei a disponibilidade de cada uma. Antes de sair, deixei toda a base de linhas organizada.",
      },
      {
        titulo: "O script que desliga as TVs",
        texto:
          "As TVs da empresa ficavam ligadas fora do expediente. Fiz um executável simples e o agendei no Agendador de Tarefas do Windows para desligá-las em horário definido. Eram cerca de 40 TVs (estimativa). Não tenho como estimar a economia de energia ou de tempo, então não publico número.",
      },
      {
        titulo: "Rollouts de 70 e 140 máquinas",
        texto:
          "Participei de rollouts de tamanhos diferentes, em Windows e Mac: preparação das máquinas, configuração para novos colaboradores e instalação dos softwares corporativos.",
      },
    ],
    ferramentas: ["Jira", "Workspace ONE (MDM)", "Zoom Rooms", "Windows", "macOS", "Agendador de Tarefas do Windows"],
    aprendi: [
      "Priorizar por criticidade quando tudo parece urgente.",
      "Assumir um processo inteiro (como a telefonia) e deixá-lo organizado para quem vem depois.",
      "Automatizar uma tarefa pequena já poupa atenção do time.",
    ],
    areas: [
      "implantacao",
      "customer-success",
      "analista-automacao",
      "consultor-automacao-ia",
    ],
    naoPublicar:
      "Não sei estimar quantos colaboradores atendi nem a economia de energia ou de tempo: por isso não há números além dos citados.",
  },
];

export const experiences: Experience[] = z.array(ExperienceSchema).parse(raw);
export const experienceBySlug = (slug: string) => experiences.find((e) => e.slug === slug);
