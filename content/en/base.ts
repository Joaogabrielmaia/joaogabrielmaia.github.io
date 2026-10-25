// Traduções em inglês. Só os campos de texto; a mescla com o conteúdo em português é feita por `deepMerge`
// (arrays item a item, pelo índice), então a ordem e o tamanho das listas precisam ser iguais aos do original.

export const profileEn = {
  hero: {
    subtitulo: "Software Engineer · AI Automation · Project Management",
    frase:
      "I am João Gabriel, a Software Engineering student at PUC Minas. I build full stack applications, automations and AI agents, and I also run projects with Scrum and requirements gathering.",
    selo: "Software Engineering · PUC Minas",
  },
  pontos: [
    { titulo: "Full stack", texto: "TypeScript, React, Next.js, Node.js, Express, PostgreSQL and Prisma." },
    { titulo: "Automation and AI", texto: "n8n, AI agents, RAG, API integrations and webhooks." },
    { titulo: "Quality", texto: "Unit, integration and E2E tests, ADRs and traceability." },
    { titulo: "Management and methods", texto: "Scrum, Kanban and requirements. Manager of the Vortex ERP, Best Interdisciplinary Project at PUC Minas." },
  ],
  formacao: { curso: "Bachelor's degree in Software Engineering", periodo: "Aug 2023 to Dec 2027 (expected)" },
  idiomas: ["Portuguese (native)", "English (basic)"],
  sobre: [
    "Software Engineering student at PUC Minas (expected graduation in Dec 2027) and full stack developer since April 2026. I work with TypeScript, React, Next.js, Node.js and PostgreSQL, and I build automations, AI agents and API integrations, with automated tests and decisions recorded in ADRs.",
    "Before that, I was an IT support apprentice at Hotmart, where I handled tickets, laptop and phone rollouts, meeting rooms and simple automations.",
  ],
  comoTrabalho: [
    "I start by gathering requirements and business rules and writing down what was agreed.",
    "I record architecture decisions in ADRs, with the alternatives and the cost of each one.",
    "I deliver in sprints, with automated tests and documentation, and I keep maintaining what I deliver.",
  ],
  destaqueAcademico:
    "Best Interdisciplinary Project in Software Engineering (PUC Minas, 2025), with the Vortex ERP, where I was manager of an 8-person team.",
};

export const rolesEn = [
  {
    nome: "Full stack development",
    nomeCurto: "Full stack",
    pitch: "I build complete web applications, from the database to the interface, with automated tests.",
    oQueFaz: "Builds and maintains web applications end to end: database modeling, APIs, interface and automated tests.",
    oQueValoriza: "Clear, tested code, well-defined APIs, data modeling and frequent deliveries.",
    evidencias: [
      { texto: "Applications with TypeScript, React, Next.js, Node.js, PostgreSQL and Prisma since Apr 2026, from APIs and integrations to the interface." },
      { texto: "Development on the Vortex ERP (JavaScript/TypeScript ecosystem), besides managing the project." },
    ],
    competencias: ["TypeScript", "React and Next.js", "Node.js and REST APIs", "PostgreSQL and Prisma", "Automated testing"],
  },
  {
    nome: "Systems implementation",
    nomeCurto: "Systems implementation",
    pitch: "I get a system running in daily routine: current process, setup, go-live and follow-up afterwards.",
    oQueFaz: "Gets a system working in the real routine: understands the current process, configures it, trains people, leads go-live and follows up afterwards.",
    oQueValoriza: "Understanding the process, configuring, training, leading go-live and following up.",
    evidencias: [
      { texto: "Rollouts of 70 and 140 machines at Hotmart, on Windows and Mac, from preparation to installing corporate software." },
      { texto: "Phone rollouts on my own initiative, from start to finish: handing out devices, registering them in the system and dealing with carriers." },
      { texto: "Discovery, requirements and project management on the Vortex ERP (team of 8) and on current projects, with ongoing maintenance after delivery." },
    ],
    competencias: ["Discovery", "Rollout and go-live", "Scrum", "Requirements", "MDM (Workspace ONE)"],
  },
  {
    nome: "AI automation",
    nomeCurto: "AI automation",
    pitch: "I map what is worth automating, build it, measure it and document the limits.",
    oQueFaz: "Finds which process can be automated (with or without AI), builds the solution, measures the result and states honestly what it does not do.",
    oQueValoriza: "Identifying the automatable process, building, measuring and explaining the limits.",
    evidencias: [
      { texto: "A scheduled Windows script that turns off the company's roughly 40 TVs at a set time, created at Hotmart." },
      { texto: "Management of WhatsApp lines used only for automation, with direct contact with the people running the automations through Meta." },
      { texto: "CRM with WhatsApp and automations, and AI agents, in client projects." },
    ],
    competencias: ["Generative AI", "AI agents", "RAG", "n8n", "Prompt engineering"],
  },
  {
    nome: "Process automation and integrations",
    nomeCurto: "Automation and integrations",
    pitch: "Reliable flows, with integration and error handling from day one.",
    oQueFaz: "Builds and maintains flows that run on their own: integrates systems, handles failures, avoids duplicates and leaves a record of what happened.",
    oQueValoriza: "Reliable flows, integration and error handling.",
    evidencias: [
      { texto: "A scheduled script at Hotmart that turns off the TVs, running unattended." },
      { texto: "Management of the lines used for WhatsApp automation and an audit of the whole line base." },
      { texto: "Automations with n8n and integrations through APIs and webhooks in client projects." },
    ],
    competencias: ["n8n", "REST APIs and webhooks", "Idempotency and retries", "PostgreSQL", "Testing"],
  },
  {
    nome: "Support and usage follow-up",
    nomeCurto: "Support and adoption",
    pitch: "I handle the problem, follow usage and flag risk early.",
    oQueFaz: "Follows the customer after the sale: makes sure they use the product, solves what blocks them, anticipates risk signals and helps with renewal.",
    oQueValoriza: "Relationship, adoption, solving problems and anticipating risk.",
    evidencias: [
      { texto: "At least about 30 tickets a week in Jira, prioritized by criticality, serving internal teams." },
      { texto: "Ongoing maintenance for an e-commerce client who came back for several updates, some larger than the first project." },
    ],
    competencias: ["Support", "Prioritization by criticality", "Jira", "Explaining trade-offs to non-technical people", "Post-delivery follow-up"],
  },
  {
    nome: "Prospecting and CRM",
    nomeCurto: "Prospecting and CRM",
    pitch: "Prospecting, conversation and cadence, with a CRM as the work tool.",
    oQueFaz: "Starts conversations with potential customers, qualifies interest, keeps a contact cadence and records everything in the CRM for the sales team.",
    oQueValoriza: "Prospecting, conversation, cadence and CRM use.",
    evidencias: [
      { texto: "Phone calls and WhatsApp messages to sell landing pages, back when I needed to build a client base; about 10 clients closed per round of calls, with many unanswered calls and many clients coming through referrals." },
      { texto: "Pipedrive as a user; HubSpot studied through videos and feature reverse engineering to apply to the CRMs I build." },
    ],
    competencias: ["Prospecting by phone and WhatsApp", "Pipedrive", "Contact cadence", "Custom CRMs"],
  },
  {
    nome: "Solution design",
    nomeCurto: "Solution design",
    pitch: "I turn the problem into a technical solution and explain the trade-offs.",
    oQueFaz: "Understands the customer's pain, designs the solution, explains the choices (and what is lost in each) and supports the sale from the technical side.",
    oQueValoriza: "Turning problems into solutions, explaining trade-offs and supporting the sale.",
    evidencias: [
      { texto: "I explain architecture decisions to clients, such as the balance between site speed and security for images and sensitive data." },
      { texto: "Discovery with real clients to turn the request into requirements and business rules." },
    ],
    competencias: ["Discovery", "Solution architecture", "Communicating with non-technical people", "APIs", "Technical pre-sales"],
  },
  {
    nome: "Project management and agile methods",
    nomeCurto: "Projects and agile methods",
    pitch: "I plan, prioritize, follow delivery and keep risks visible.",
    oQueFaz: "Organizes work into stages, prioritizes the backlog, follows deadlines and deliveries and keeps risks and decisions recorded.",
    oQueValoriza: "Planning, prioritizing, following delivery and managing risk.",
    evidencias: [
      { texto: "Manager of the Vortex ERP, with a team of 8, Scrum in sprints, prototypes for the client and continuous feedback." },
      { texto: "Project management as an independent developer, with Scrum and delivery follow-up." },
    ],
    competencias: ["Scrum", "Kanban", "Sprint planning", "Backlog refinement", "PMBOK basics"],
  },
  {
    nome: "Requirements and business rules",
    nomeCurto: "Requirements and rules",
    pitch: "I gather, document and trace requirements and business rules.",
    oQueFaz: "Talks to the people who use the process, finds out what really needs to be done and writes requirements and rules the team can build and test.",
    oQueValoriza: "Gathering, documenting and tracing requirements and rules.",
    evidencias: [
      { texto: "Functional and non-functional requirements and business rules on the Vortex ERP." },
      { texto: "The same work on current projects, modeling the database from the rules." },
    ],
    competencias: ["Requirements gathering", "Business rules", "Functional specification", "Traceability", "Stakeholder alignment"],
  },
];

export const experiencesEn = [
  {
    cargo: "Full Stack Developer (independent work)",
    organizacao: "Small team on client projects",
    periodo: "Apr 2026 to present",
    resumo:
      "I work with a team of 2 to 3 people that takes on client projects, and I also serve private clients. I handle discovery, translate requests for the team, follow development and model the database. I also develop.",
    destaques: ["About 15 clients since Apr 2026", "From discovery to ongoing maintenance", "An e-commerce client who came back to hire more"],
    secoes: [
      {
        titulo: "How I work",
        itens: [
          "Discovery: I talk to the people who use the process and understand the business.",
          "Functional and non-functional requirements and business rules, written so the team can build and test them.",
          "Decisions with the client: I explain the options and what is gained and lost in each one.",
          "Development followed in Scrum, with short deliveries.",
          "Delivery and maintenance: I stay close after the system goes live.",
        ],
      },
      {
        titulo: "Sectors",
        itens: ["Logistics and retail (warehouses with stock, e-commerce).", "Services (hotel and daycare).", "Companies that use CRM and ERP systems."],
      },
      {
        titulo: "Activities",
        itens: ["Requirements, business rules and relational database modeling.", "APIs and integrations.", "Automations and AI agents.", "Testing and delivery follow-up."],
      },
    ],
    historias: [
      {
        titulo: "A trade-off example: speed × security",
        texto:
          "A client wanted a fast site and, at the same time, a robust security setup for images and sensitive data. More security can make loading a bit slower. I took that decision to the client, explaining both options, instead of deciding alone.",
      },
    ],
    casos: [
      {
        titulo: "E-commerce",
        texto:
          "The client used to sell by sending a PDF over WhatsApp and now sells through the store, with sales happening on their own. I keep maintaining it (for example, we changed the storage because the images were weighing down the project). The sign that it worked: the client came back to hire several updates, some larger than the first project.",
      },
      {
        titulo: "System for a hotel and daycare",
        texto:
          "A private client who kept records by hand. I built the system and the interface that send everything to the cloud, avoiding lost documents and paper storage.",
      },
      {
        titulo: "CRM with integrated ERP",
        texto:
          "A team project: accounts payable and financial health for the company, plus a CRM integrated with WhatsApp for messages and automations. Stack: JavaScript, TypeScript, Node.js, Prisma and a JavaScript authentication library. The client's name and data are confidential.",
      },
      {
        titulo: "Prospecting and sales (freelance, before AI)",
        texto:
          "I made phone calls and WhatsApp contacts to sell landing pages, back when I needed to build a client base. I closed about 10 clients per round of calls (many calls went unanswered, and many clients came through referrals). I studied client conversations and CRMs: I use Pipedrive, studied HubSpot through videos and reverse-engineered features to apply to the CRMs I build.",
      },
    ],
    aprendi: [
      "A client does not ask for requirements: they ask for a problem solved. My job is to translate one into the other.",
      "Explaining the cost of each choice gives the client confidence to decide.",
    ],
    naoPublicar: "No client names and no numbers for hours saved or sales generated: there is no measurement.",
  },
  {
    cargo: "IT Support Apprentice",
    organizacao: "Hotmart",
    periodo: "Jul 2025 to Mar 2026 (9 months)",
    local: "part-time, on site",
    resumo:
      "I supported employees and internal teams, led laptop and phone rollouts, took care of the meeting rooms and built a simple automation that turns off the company's TVs.",
    destaques: ["Rollouts of 70 and 140 machines", "30+ tickets a week", "A script that turns off the TVs"],
    secoes: [
      {
        titulo: "Support and tickets",
        itens: [
          "Opening, prioritizing and following tickets in Jira, at least about 30 a week.",
          "Prioritization by criticality and support for employees and internal teams.",
        ],
      },
      {
        titulo: "Machine rollouts",
        itens: [
          "Several, of different sizes (for example, 70 and 140 machines), on Windows and Mac.",
          "Preparing and configuring machines for new hires and installing corporate software.",
        ],
      },
      {
        titulo: "Corporate telephony",
        itens: [
          "Phone rollouts on my own initiative, from start to finish.",
          "Handing out phones and registering them in the system (including the SIM identifier, which links the line to the corporate email).",
          "Dealing with carriers and companies to request numbers and buy SIM cards.",
          "Managing lines used only for WhatsApp automation and contacting the people who ran automations through Meta to provide codes.",
        ],
      },
      {
        titulo: "Meeting rooms and events",
        itens: ["Zoom Rooms, microphones, projectors, TVs, computers, tablets, cameras and audio and video, including simple maintenance."],
      },
      { titulo: "MDM", itens: ["Remote device administration with Workspace ONE."] },
      {
        titulo: "Stock and hardware",
        itens: ["Laptop maintenance.", "Collecting outdated machines into stock; for a period I ran that process alone."],
      },
      {
        titulo: "Automation",
        itens: ["A simple script (executable) scheduled in the Windows Task Scheduler to turn off the company TVs at a set time: about 40 TVs (estimate)."],
      },
    ],
    historias: [
      {
        titulo: "Audit of the phone lines",
        texto:
          "I collected many lines and reorganized lost ones (including some lost because of too many messages, which were listed as useful). I contacted people, searched the stock and checked the availability of each one. Before leaving, I left the whole line base organized.",
      },
      {
        titulo: "The script that turns off the TVs",
        texto:
          "The company TVs stayed on outside working hours. I made a simple executable and scheduled it in the Windows Task Scheduler to turn them off at a set time. There were about 40 TVs (estimate). I cannot estimate the energy or time saved, so I publish no number.",
      },
      {
        titulo: "Rollouts of 70 and 140 machines",
        texto:
          "I took part in rollouts of different sizes, on Windows and Mac: preparing machines, configuring them for new hires and installing corporate software.",
      },
    ],
    aprendi: [
      "Prioritizing by criticality when everything looks urgent.",
      "Taking over a whole process (like telephony) and leaving it organized for whoever comes next.",
      "Automating a small task already saves the team some attention.",
    ],
    naoPublicar: "I cannot estimate how many employees I supported or the energy or time saved: that is why there are no numbers beyond the ones cited.",
  },
];

export const skillsEn = [
  { grupo: "Development", itens: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "HTML/CSS", "Tailwind CSS"] },
  { grupo: "Data and APIs", itens: ["PostgreSQL", "SQLite", "SQL", "Prisma ORM", "REST APIs", "HTTP integrations and webhooks", "Relational modeling", "Power BI and DAX"] },
  { grupo: "AI and automation", itens: ["Generative AI", "AI agents", "Prompt engineering", "RAG", "n8n", "Process automation", "Groq API", "OpenAI API"] },
  {
    grupo: "Management and requirements",
    itens: ["Scrum", "Kanban", "Sprint planning", "Backlog refinement", "Agile metrics", "PMBOK basics", "Discovery", "Requirements gathering", "Business rules", "Functional specification", "Stakeholder alignment"],
  },
  { grupo: "Communication and sales", itens: ["Discovery", "Explaining trade-offs to non-technical people", "Prospecting by phone and WhatsApp", "CRM (Pipedrive as a user; custom CRMs)"] },
  { grupo: "Quality", itens: ["Unit, integration and E2E tests (Vitest, Playwright)", "Contract testing", "ADRs", "Traceability"] },
  { grupo: "Tools", itens: ["Git", "GitHub", "Jira", "VS Code", "Docker (local use)", "Workspace ONE (MDM)", "Zoom Rooms"] },
  { grupo: "Languages", itens: ["Portuguese (native)", "English (basic)"] },
];

export const certificationsEn = [
  { data: "Jul 2026" },
  { data: "Jul 2026", nota: "Native LinkedIn credential" },
  { data: "Jul 2026" },
  { data: "Jul 2026" },
  { data: "Jul 2026" },
  { data: "Jul 2026" },
  { data: "Sep 2025" },
  { data: "Apr 2025" },
  { data: "Sep 2023" },
];
