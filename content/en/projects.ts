// Traduções dos projetos (campos de texto). Listas na mesma ordem e com o mesmo tamanho do conteúdo em português.

export const AVISO_CENARIO_EN =
  "The company, people and data in this project are fictional. The discovery meetings were simulated, with Claude playing the client. The system runs locally: there is no production, hosting or real client.";

const docs = (...r: string[]) => r.map((rotulo) => ({ rotulo }));

export const projectsEn: Record<string, Record<string, unknown>> = {
  trilha: {
    frase: "A platform to track customer onboarding and show, early, what is late and whose it is.",
    status: "v1.1.0 · runs locally",
    cenario: { descricao: AVISO_CENARIO_EN },
    resumo30s: {
      problema:
        "A small software house tracked onboardings in spreadsheets and WhatsApp: delays showed up late, what was agreed with the customer got lost and every onboarding followed a different script.",
      construi:
        "A web platform with onboarding templates (stages and tasks with relative D+n deadlines), per-customer onboardings with calculated dates, a delay dashboard, a to-do list per implementer, a change history and a customer portal by link.",
      importa:
        "It separates the team's delay from the customer's wait and lets the customer follow progress without signing up, which is what a systems implementation role needs to run a go-live.",
    },
    areas: [
      { evidencia: "Models the onboarding script with relative deadlines and shows what is late, whose it is and for how long." },
      { evidencia: "The customer follows progress through a link, without signing up." },
      { evidencia: "Backlog organized in sprints, with traceability and documented risks." },
      { evidencia: "Contradictions found in discovery became business rules and tests." },
      { evidencia: "Each architecture decision has alternatives and cost recorded in an ADR." },
    ],
    destaques: [
      "Team delay separated from customer wait",
      "Deadlines relative to the kickoff: editing the template does not change what was already agreed",
      "History written in the same transaction as the change",
      "Portal by token link: only the hash is stored, it expires and can be revoked",
      "A real defect found by the tests and fixed: horizontal scrolling on mobile at /clientes",
    ],
    decisoes: [
      {
        decisao: "Own database session with scrypt instead of Auth.js",
        ganhei: "Logging out and deactivating a user take effect immediately, with little code that is easy to explain.",
        paguei: "More of my own code to maintain and review.",
        quandoMudaria: "If the product needed social login or several providers.",
      },
      {
        decisao: "Copy the template into the onboarding, with D+n deadlines",
        ganhei: "Changing the template does not touch what was already agreed with ongoing customers.",
        paguei: "Old onboardings do not get template improvements on their own.",
        quandoMudaria: "If the company wanted to propagate template changes to open onboardings.",
      },
      {
        decisao: "Audit in the same transaction as the change",
        ganhei: "There is never a change without history, nor history of a change that did not happen.",
        paguei: "Each write does a bit more work.",
        quandoMudaria: "With high write volume, I would move the history to an asynchronous queue.",
      },
      {
        decisao: "Customer portal by opaque token, read-only",
        ganhei: "The customer follows along without an account; the data the founder uses to decide stays intact because the portal refuses writes.",
        paguei: "The customer cannot reply through the portal.",
        quandoMudaria: "If the customer needed to confirm tasks in the portal itself.",
      },
    ],
    numeros: [
      {
        rotulo: "Automated tests passing",
        valor: "156 (52 unit, 70 integration with a real PostgreSQL and 34 E2E, 6 of them accessibility)",
        fonte: "Repository README, CI run",
      },
    ],
    naoValidado: [
      "Firefox, Safari and a physical phone.",
      "Complete manual accessibility testing (only automated, with axe).",
      "Performance and load.",
      "Code coverage (not measured).",
      "Use by real people.",
    ],
    documentos: docs(
      "README",
      "Series guide (INDEX)",
      "Discovery (3 simulated meetings)",
      "Requirements",
      "Business rules",
      "ADRs",
      "Data model",
      "Testing strategy",
      "Final retrospective",
    ),
    roteiroLeitura: docs(
      "1. README: what it is and how to run it",
      "2. Discovery: the problem with the people of the scenario",
      "3. Requirements and business rules",
      "4. Architecture decisions (ADRs)",
      "5. Data model",
      "6. Quality: strategy and results",
      "7. Rollout plan and retrospective",
    ),
    printLegendas: {
      "02-painel": "Dashboard: what is late, whose it is and for how long. The “47 days” is the demo seed average, not a measurement.",
      "03-minhas-pendencias": "Each implementer sees only their own tasks, in deadline order.",
      "05-detalhe-implantacao": "Onboarding detail, with dates calculated from the kickoff (D+n).",
      "07-modelo": "Onboarding template: stages and tasks with D+n deadlines, default owner and the “Visible to customer” flag. Changing the template does not change what was agreed.",
      "09-portal-cliente": "Customer portal by link: read-only, expires and can be revoked.",
    },
    diagramas: [
      { legenda: "Application containers" },
      { legenda: "How the customer portal works" },
      { legenda: "Onboarding and link states" },
    ],
  },

  pulso: {
    frase: "A mini CRM with automatic WhatsApp follow-up that does not annoy the customer.",
    status: "runs locally",
    cenario: { descricao: AVISO_CENARIO_EN },
    resumo30s: {
      problema:
        "At a small renovation company, the lead goes cold after the quote because nobody remembers to follow up at the right time. Automating is easy; doing it without annoying the customer is hard.",
      construi:
        "A configurable sales funnel, daily tasks, lead timeline, automation rules, message templates with variables, a log, a reply simulator, a dashboard and CSV import.",
      importa:
        "It shows a follow-up cadence with a built-in brake, which stops when the lead replies and respects those who ask to opt out: the reasoning behind any sales automation.",
    },
    areas: [
      { evidencia: "Idempotency by unique constraint, an off-hours queue, retries with backoff and a decision log." },
      { evidencia: "Follow-up cadence that stops on reply or opt-out, and a funnel by stages." },
      { evidencia: "The post-quote follow-up has controlled tone and frequency." },
      { evidencia: "Go-live, rollback and training plans documented." },
      { evidencia: "The same automation discipline, here without AI." },
    ],
    destaques: [
      "Only sends during business hours: outside them the message waits in the queue",
      "Never sends the same message twice (unique constraint in the database, even with two cycles at once)",
      "Stops when the lead replies and notifies the attendant",
      "Respects those who ask to stop (SAIR, PARAR, STOP)",
      "n8n only triggers the cycle every 5 minutes; every business decision lives in the app, in tested pure functions",
    ],
    decisoes: [
      {
        decisao: "n8n only as a scheduler",
        ganhei: "If n8n goes down, the next cycle catches up; the rules stay tested in code.",
        paguei: "Less visual convenience for someone who wants to edit rules without code.",
        quandoMudaria: "If the operations team wanted to edit flows without going through development.",
      },
      {
        decisao: "Idempotency through a unique constraint in the database",
        ganhei: "The same message is never sent twice, even with two cycles at once.",
        paguei: "Each kind of send needs a well-defined key.",
        quandoMudaria: "If the provider offered reliable deduplication on its side.",
      },
      {
        decisao: "Message provider behind an interface (simulated adapter)",
        ganhei: "Everything can be tested without sending real messages, and the provider can be swapped later.",
        paguei: "The official Meta API has not really been validated yet.",
        quandoMudaria: "Before any real use, by validating the official API.",
      },
      {
        decisao: "No loading.tsx",
        ganhei: "A defect that only showed up in the production build (actions that did not refresh the screen) is gone.",
        paguei: "No automatic loading indicator.",
        quandoMudaria: "If the defect is fixed in the framework.",
      },
    ],
    numeros: [
      { rotulo: "Unit and integration tests", valor: "200 (111 + 89)", fonte: "Repository README" },
      { rotulo: "E2E tests", valor: "16", fonte: "Repository README" },
    ],
    naoValidado: ["The real Meta API.", "n8n scheduling running for hours."],
    documentos: docs("README", "Series guide (INDEX)", "Business rules", "Automation flow", "Failure modes", "ADRs", "Messaging best practices", "Runbook"),
    roteiroLeitura: docs(
      "1. README",
      "2. Brainstorm and choice of idea",
      "3. Business rules (RN-01 to RN-19)",
      "4. Automation flow",
      "5. ADRs",
      "6. Failure modes",
      "7. Rollout, runbook and retrospective",
    ),
    printLegendas: {
      "02-hoje": "“What to do today”: the attendant sees the day's tasks without opening the funnel. The “Reply” task is created when the lead writes.",
      "03-funil": "The funnel in six columns; the stages are configurable.",
      "08-automacao": "Automation rules and the log of what the cycle decided.",
      "09-simulador": "Lead reply simulator: the automation stops and the attendant is notified.",
      "05-painel": "Dashboard with the funnel numbers.",
    },
    diagramas: [
      { legenda: "n8n only triggers the cycle every 5 minutes" },
      { legenda: "Sequence of a follow-up, from the recorded contact to the lead's reply" },
    ],
  },

  prumo: {
    frase: "An AI agent that answers with sources, refuses when it does not know and hands off to a person what needs a person.",
    status: "v1.1 · runs locally",
    cenario: { descricao: AVISO_CENARIO_EN },
    resumo30s: {
      problema:
        "The support team of a scheduling SaaS for salons was drowning in repeated questions and afraid that a bot would give wrong information.",
      construi:
        "Search over 31 articles (93 passages) with cited sources, honest refusal, escalation to a human with summary and priority, protection against prompt injection, an attendant queue, evaluation of each answer, a dashboard and knowledge-base gaps.",
      importa:
        "It treats AI as a system that must be measured: separate development and validation sets, results per round and declared limits.",
    },
    areas: [
      { evidencia: "Measures the agent with 50 + 20 questions over 3 rounds, with guardrails and declared limits." },
      { evidencia: "Escalates what needs a person and hands the attendant organized context." },
      { evidencia: "Agent pipeline with guardrails, a queue and continuous evaluation." },
      { evidencia: "The agent starts in “suggestion mode” before answering on its own (rollout plan)." },
      { evidencia: "Each choice (RAG instead of fine-tuning, confidence threshold) has an ADR with alternatives." },
      { evidencia: "Explicit business rules for sensitive topics, such as refunds." },
    ],
    destaques: [
      "Honest refusal when it does not have the information",
      "Refunds and disputed charges always go to a person, by explicit rule",
      "Evaluation with separate development and validation questions",
      "Recorded limits: the search is lexical, not semantic",
    ],
    decisoes: [
      {
        decisao: "RAG instead of fine-tuning",
        ganhei: "Answers cite where they came from and the base can be updated without retraining.",
        paguei: "Quality depends on the search over the articles.",
        quandoMudaria: "If the base grew so much that lexical search was not enough.",
      },
      {
        decisao: "Confidence = similarity + coverage of the question's words",
        ganhei: "Raising only the threshold did not separate the groups; coverage did.",
        paguei: "One more rule tuned by the author on the development data.",
        quandoMudaria: "With semantic search and more validation data.",
      },
      {
        decisao: "Sensitive topics always escalate, by explicit rule",
        ganhei: "Refunds and disputed charges never stay in the model's hands.",
        paguei: "Some simple questions escalate unnecessarily.",
        quandoMudaria: "If the support team accepted automating specific cases, with review.",
      },
      {
        decisao: "Separate validation set",
        ganhei: "It revealed overfitting: +20 points where I tuned and +10 where I did not.",
        paguei: "Fewer questions to tune the agent on.",
        quandoMudaria: "Never: it is what prevents an inflated score.",
      },
    ],
    numeros: [
      { rotulo: "Vitest tests", valor: "83 of 83", fonte: "Repository README (commit 2cb000d)" },
      { rotulo: "E2E tests", valor: "14 of 14", fonte: "Repository README (commit fb6b3bc)" },
      { rotulo: "Evaluation: development (50 questions)", valor: "66% → 86% → 86% (rounds 1, 2 and 3)", fonte: "Repository README" },
      { rotulo: "Evaluation: validation (20 questions)", valor: "70% → 80% → 80%", fonte: "Repository README" },
      { rotulo: "Correct refusal of out-of-base questions", valor: "from 20% to 80% (development)", fonte: "Repository README" },
      { rotulo: "Adversarial tests", valor: "100% (a floor, because the rules were written beforehand by the author)", fonte: "Repository README" },
    ],
    naoValidado: [
      "No evaluation round used Claude: the round with the real Claude was not run, and cost and latency were not measured.",
      "The search is lexical (local hashing embedding), not semantic: it is the biggest limitation.",
      "One run with an open model (Groq, gpt-oss-120b) was recorded without a commit: it cannot be reproduced from a commit.",
      "The Anthropic provider exists in the interface but was not exercised.",
    ],
    documentos: docs(
      "README",
      "Series guide (INDEX)",
      "Evaluation methodology",
      "Comparison of rounds",
      "Error analysis",
      "Decisions (ADRs)",
      "Acceptance meeting",
      "Retrospective and roadmap",
    ),
    roteiroLeitura: docs(
      "1. README",
      "2. Discovery: the support pain",
      "3. Business rules",
      "4. Architecture decisions",
      "5. Evaluation methodology",
      "6. Error analysis and comparison of rounds",
      "7. Retrospective and roadmap",
    ),
    printLegendas: {
      "01-chat-resposta-com-fontes": "Each answer shows where it came from, with at most 2 sources per article.",
      "02-recusa-honesta": "Without the information, the agent says so and offers to talk to a person: the business fear is the wrong answer.",
      "03-escalonamento-para-humano": "A refund request goes to the team with a summary; the agent does not confirm amounts, refunds or deadlines.",
      "09-injecao-de-prompt-bloqueada": "The request to ignore the instructions is blocked before calling the model (the first of four protection layers).",
      "10-relatorio-de-avaliacao": "Evaluation report: the result of each round, by type of question.",
    },
    diagramas: [{ legenda: "Agent pipeline: customer, guardrails, search, AI provider and the team's dashboard" }],
  },

  fluxo: {
    frase: "Automation of orders received by email, with an exception queue for what needs a human decision.",
    status: "runs locally",
    cenario: { descricao: AVISO_CENARIO_EN },
    resumo30s: {
      problema: "A distributor of electrical materials receives about 80 orders a day by email and types everything by hand into a spreadsheet.",
      construi:
        "A flow that receives the order (table, free text or PDF), extracts the data, validates the business rules, saves it to the database, notifies the team and feeds a dashboard. What needs a human decision goes to an exception queue, with the reason and a correction and reprocessing form.",
      importa: "It shows the before and after of the process, an honest measurement of what works and what happens when something goes wrong.",
    },
    areas: [
      { evidencia: "A pipeline with idempotency, retries, an exception queue and failure alerts." },
      { evidencia: "AS-IS and TO-BE process and business rules RN-02 to RN-09." },
      { evidencia: "The same logic of measuring before promising gains (the LLM mode is optional and was not run)." },
      { evidencia: "Goes live in “shadow mode”, alongside the manual process." },
      { evidencia: "Measurement method and risks documented." },
      { evidencia: "The gain estimate comes with a visible formula and editable inputs." },
    ],
    destaques: [
      "n8n orchestrates the intake (retry and alert); the rules live in typed, tested code",
      "Orders above R$ 15,000 require human approval with a justification",
      "Load test with 500 messages, all with the expected decision",
      "The first load run found a deadlock; I fixed it and kept both runs recorded",
    ],
    decisoes: [
      {
        decisao: "Business rules in typed, tested code, n8n only for orchestration",
        ganhei: "The rules are testable and versioned; n8n handles retries and alerts.",
        paguei: "Changing a rule means changing code.",
        quandoMudaria: "If the rules changed every week and the team needed to edit them without development.",
      },
      {
        decisao: "Exception queue with correction and revalidation",
        ganhei: "Correcting does not skip validation: the order is revalidated and only gets recorded if it passes.",
        paguei: "One more screen for the team to watch.",
        quandoMudaria: "If the exception rate dropped so far that the queue no longer justified its own screen.",
      },
    ],
    numeros: [
      { rotulo: "Unit and integration tests", valor: "80 of 80", fonte: "Repository README (commit 09f1d18)" },
      { rotulo: "E2E tests", valor: "5 of 5", fonte: "Repository README (commit 09f1d18)" },
      { rotulo: "Load test of 500 messages", valor: "500 of 500 with the expected decision; median 95.4 ms and p95 152.1 ms", fonte: "Repository README (fix in commit 2f2ef7b)" },
      { rotulo: "First load run", valor: "491 of 500 (5 failures from deadlock and 4 extractor divergences)", fonte: "Repository README" },
      { rotulo: "Deadlock regression test", valor: "failed in 6 of 6 rounds with the earlier code and passed in 6 of 6 with the current one", fonte: "Repository README" },
      {
        rotulo: "ESTIMATE of time saved (not measured)",
        valor: "211.2 h/month freed in the base scenario (80 orders/day, 22 working days, 8 manual minutes, 20% review, 4 minutes per exception)",
        fonte: "README and measurement report: formula and inputs visible",
      },
    ],
    naoValidado: [
      "Rule-based extraction: the LLM mode is optional and was not run.",
      "Simulated notification: the table does not prove real delivery.",
      "The mailbox is a webhook; real IMAP was not tested.",
      "There is no published Power BI report, only CSVs.",
      "Audit by code convention; only /api/inbound and /api/notify require a key.",
      "The daily ERP CSV import, cited as an assumption, is not implemented.",
    ],
    documentos: docs("README", "Series guide (INDEX)", "Business rules", "TO-BE process", "ADRs", "Measurement report", "Test results"),
    roteiroLeitura: docs(
      "1. README",
      "2. Opportunities and business",
      "3. Current process (AS-IS)",
      "4. Business rules",
      "5. Desired process (TO-BE)",
      "6. Measurement report",
      "7. Test results",
    ),
    printLegendas: {
      "01-painel": "Dashboard with indicators, bars by status and exception reason and the latest orders.",
      "03-detalhe-pedido-com-excecao": "An order with an exception: item outside the catalog, correction form, audit trail and the original message.",
      "04-fila-de-excecoes": "Exception queue: the interface between the automation and the person, with how long each one has been waiting.",
      "06-aprovacao-humana": "Above R$ 15,000 approval is mandatory, with a justification recorded in the audit.",
      "09-medicao": "Results of the 500-message load test and the gain estimate, with visible inputs.",
    },
    diagramas: [{ legenda: "From email to record: n8n, extraction, validation, exception queue and failure alert" }],
  },

  mapa: {
    frase: "Process diagnosis for consultative pre-sales: ranking, matrix and a return range instead of a single number.",
    status: "v1.1.0 · runs locally",
    cenario: { descricao: AVISO_CENARIO_EN },
    resumo30s: {
      problema:
        "An automation consultancy needs to find out, in the first meeting, where automating is worthwhile and how much it might return, without promising a number it cannot back up.",
      construi:
        "A guided script by area and a deterministic scoring engine (no AI) that gives each process a potential and an effort, and generates a ranking, an effort × return matrix, a 30/60/90-day roadmap, return in three scenarios, LGPD risks and a pre-scope, as a web and PDF report.",
      importa: "It shows the math and the uncertainty instead of a ready-made number, which is how you earn a client's trust.",
    },
    areas: [
      { evidencia: "Presents the math and the uncertainty (return ranges) instead of a single number." },
      { evidencia: "Decides where to automate and what not to automate." },
      { evidencia: "Discovery by area, written criteria and weights, and a pre-scope." },
      { evidencia: "30/60/90-day roadmap from the quadrants." },
      { evidencia: "Suggested implementation order based on effort and capacity in hours." },
    ],
    destaques: [
      "Potential = 20% frequency + 15% volume + 25% repetitiveness + 40% impact",
      "Missing data never becomes zero: a cautious value is used and the range widens",
      "Weights and cut-offs are the author's judgment, configurable, with sensitivity analysis",
      "Comparable versions and a write-only client link, valid for 14 days",
    ],
    decisoes: [
      {
        decisao: "Deterministic scoring instead of AI",
        ganhei: "Every score is explainable and reproducible.",
        paguei: "Less flexible for processes that do not fit the criteria.",
        quandoMudaria: "If there were real data to calibrate a model.",
      },
      {
        decisao: "PDF through Chromium, the same page in both formats",
        ganhei: "Identical web and PDF reports.",
        paguei: "Depends on Chromium in the environment.",
        quandoMudaria: "If the PDF had to be generated where Chromium does not run.",
      },
      {
        decisao: "Versions as immutable snapshots",
        ganhei: "It is possible to compare diagnosis v1 with v2 without losing history.",
        paguei: "More storage per diagnosis.",
        quandoMudaria: "If the number of versions grew large.",
      },
      {
        decisao: "Client link write-only, valid for 14 days",
        ganhei: "The client fills in the form without seeing anything from the diagnosis.",
        paguei: "Whoever makes a mistake has to ask for a new link.",
        quandoMudaria: "If the client needed to follow the result.",
      },
    ],
    numeros: [
      { rotulo: "Unit tests", valor: "89", fonte: "Repository README (commit 1f4473f)" },
      { rotulo: "Integration tests", valor: "11", fonte: "Repository README" },
      { rotulo: "E2E tests", valor: "15", fonte: "Repository README (commit bd3169b)" },
      { rotulo: "Coverage of the scoring module", valor: "100% of lines, branches and functions (only that module was measured)", fonte: "Repository README (commit 1f4473f)" },
    ],
    naoValidado: [
      "The real Anthropic API.",
      "Chromium failure and the database being down.",
      "Load and automated accessibility.",
      "Coverage of the rest of the code (only the scoring module was measured).",
      "Weights and cut-offs were not calibrated with real data.",
    ],
    documentos: docs("README", "Series guide (INDEX)", "Calculation examples", "Sensitivity", "Methodology limitations", "ADRs", "Validation meeting", "Test report"),
    roteiroLeitura: docs(
      "1. README",
      "2. Brainstorm and decision",
      "3. Business rules",
      "4. Methodology: calculation examples",
      "5. Sensitivity and limitations",
      "6. ADRs",
      "7. Final retrospective",
    ),
    printLegendas: {
      "04-ranking": "The 14 processes by priority; the first one is open showing the score for each criterion.",
      "05-matriz-esforco-retorno": "Effort × return matrix in four quadrants: Start now, Plan, Opportunistic and Avoid.",
      "06-premissas-e-faixa-de-retorno": "Return as a range (savings, investment and payback) from editable assumptions, never a single number.",
      "07-relatorio-web": "Report with executive summary, ranking, matrix, return, 30/60/90 roadmap, risks, pre-scope and a section “What this report does not know”.",
      "09-comparacao-de-versoes": "Comparison between v1 and v2 of the diagnosis.",
    },
    diagramas: [
      { legenda: "Containers: screens, validation, services, scoring (pure functions) and report" },
      { legenda: "How the engine decides the score, including when data is missing" },
    ],
    arquivosExtras: [{ rotulo: "Open the sample report (PDF)" }],
  },

  termometro: {
    frase: "Customer health: which accounts the CS team should contact first, and why.",
    status: "v1.1.0 · runs locally",
    cenario: { descricao: AVISO_CENARIO_EN },
    resumo30s: {
      problema: "A CS team of three, with 120 customers, decided “who to contact” off the top of their heads.",
      construi:
        "A 0-to-100 score across six dimensions, with an explanation for each grade, at-risk accounts sorted by urgency, five CS playbooks with a trigger and a ready message, an action log, weight configuration with simulation, sensitivity analysis and a sudden-drop alert.",
      importa: "It turns “who should I contact?” into explicit, actionable rules, respecting the limit of 15 contacts a week per CSM.",
    },
    areas: [
      { evidencia: "Turns “who should I contact?” into explicit rules, playbooks and priority by urgency." },
      { evidencia: "Resolves the contradiction between “a single number” and “context” by showing both." },
      { evidencia: "The adoption dimension looks at what the customer uses after going live." },
      { evidencia: "Requirements and analytical rules of the score documented." },
    ],
    destaques: [
      "Weights: adoption 25, engagement 20, support 15, satisfaction 15, financial 15, contract 10",
      "Missing data is left out of the calculation and the weights are renormalized, with a low-confidence warning",
      "I refused to show “chance of churn in %” for lack of real data to calibrate",
      "Sensitivity with 22 scenarios: account order is stable; color is sensitive to the thresholds",
    ],
    decisoes: [
      {
        decisao: "The score is an explainable heuristic, not a prediction",
        ganhei: "Each grade shows its explanation; the team trusts what it sees.",
        paguei: "It does not give a “probability of churn”.",
        quandoMudaria: "If there were real churn data to calibrate against.",
      },
      {
        decisao: "Prioritize by urgency (risk × value × renewal), not only by color",
        ganhei: "Account order is stable even when the color thresholds move.",
        paguei: "Anyone who looks only at color misses the order.",
        quandoMudaria: "If the team asked for another priority criterion.",
      },
    ],
    numeros: [
      { rotulo: "Unit tests", valor: "76", fonte: "Repository README (commit d45b65c)" },
      { rotulo: "Integration tests (real PostgreSQL)", valor: "5", fonte: "Repository README (commit d45b65c)" },
      { rotulo: "E2E tests", valor: "14", fonte: "Repository README (commit 4598c4c)" },
      { rotulo: "Synthetic data (fixed seed)", valor: "120 accounts and 41,578 usage records", fonte: "Repository README" },
    ],
    naoValidado: [
      "The data is synthetic and designed by archetypes: “hitting” the archetypes is not validation.",
      "Test coverage, accessibility and load were not measured; performance was measured only with 120 accounts.",
      "The Power BI report was not built: there are CSVs, a data model and DAX measures, but no .pbix and no screenshots.",
      "Security is demo-level, local, with no password recovery, MFA or attempt limit.",
    ],
    documentos: docs("README", "Series guide (INDEX)", "Synthetic data", "Score analytical rules", "Sensitivity (results)", "ADRs", "Test plan and results", "Final retrospective"),
    roteiroLeitura: docs(
      "1. README",
      "2. Synthetic data: what it is and what it is not",
      "3. Discovery with the CS leadership",
      "4. Business rules",
      "5. Sensitivity",
      "6. ADRs",
      "7. Final retrospective",
    ),
    printLegendas: {
      "01-painel-executivo": "Executive dashboard: critical accounts, revenue at risk, donut by color, 12-week trend and the most urgent accounts.",
      "02-contas-em-risco": "At-risk accounts sorted by urgency, with filters by color, segment and CSM.",
      "04-explicacao-do-score": "“Why this score?”: the six dimensions, the weight used and what pulls the grade down the most.",
      "08-configuracao-de-pesos": "Weight configuration with a simulation of the effect before saving.",
      "09-sensibilidade": "Sensitivity analysis: 22 scenarios, accounts that change color and the Spearman correlation.",
    },
    diagramas: [{ legenda: "Context: CSM and admin use the application, which reads and writes PostgreSQL and exports CSVs" }],
  },

  ponte: {
    frase: "CRM ↔ ERP integration by API and webhooks, with no duplicated data and proven failure recovery.",
    status: "runs locally",
    cenario: {
      empresa: "Serviços Aurora (the CRM and ERP are simple systems created inside the repository itself)",
      descricao: AVISO_CENARIO_EN,
    },
    resumo30s: {
      problema: "In a 25-person company, the CRM and ERP were separate and the data was retyped by hand after every sale.",
      construi:
        "When a deal is won in the CRM, Ponte creates or updates the customer (by CNPJ, without duplicating), the order and the invoice in the ERP and returns the IDs to the CRM; when the invoice is paid, the CRM is updated. A scheduled reconciliation flags divergences.",
      importa: "It is the integration from discovery to the operations guide: I proved failure recovery by really taking the ERP down in the middle of a batch.",
    },
    areas: [
      { evidencia: "Leads the integration from discovery to the operations guide, with a shadow-mode plan." },
      { evidencia: "Proved failure recovery by really taking the ERP down in the middle of a batch." },
      { evidencia: "Explains each decision with an alternative, cost and “when I would change it”." },
      { evidencia: "Data map and rules between CRM and ERP traced down to the tests." },
      { evidencia: "The same integration and failure discipline, here without AI." },
    ],
    destaques: [
      "Idempotency in three layers",
      "Retries with exponential backoff and jitter: 12 attempts add up to about 3 h, above the ERP's 2 h window",
      "Failure queue with manual reprocessing and scheduled reconciliation",
      "Webhook with HMAC, timestamp and raw body",
      "OpenAPI contracts and a catalog of 35 error codes",
    ],
    decisoes: [
      {
        decisao: "PostgreSQL queue instead of a broker",
        ganhei: "Event and job written in the same transaction, with no new piece of infrastructure.",
        paguei: "A lower volume ceiling than a dedicated broker.",
        quandoMudaria: "With high volume or several consumers.",
      },
      {
        decisao: "Retries with exponential backoff and jitter",
        ganhei: "12 attempts cover the ERP's 2 h window.",
        paguei: "In a long failure, the event takes long to be reprocessed.",
        quandoMudaria: "If the ERP published a different maintenance window.",
      },
      {
        decisao: "Read-only reconciliation",
        ganhei: "It detects divergences without silently fixing them.",
        paguei: "A person has to decide what to do with each divergence.",
        quandoMudaria: "If the divergences were of a kind that is safe to fix automatically.",
      },
      {
        decisao: "Idempotency (external reference as key)",
        ganhei: "The same deal never becomes two orders.",
        paguei: "Every integration needs to carry a stable key.",
        quandoMudaria: "If the ERP deduplicated on its own.",
      },
    ],
    numeros: [
      { rotulo: "Vitest tests", valor: "193 (106 unit, 67 integration, 18 contract and 2 injected-failure)", fonte: "Repository README (commit e960fbd)" },
      { rotulo: "E2E tests", valor: "10", fonte: "Repository README (commit fcf035d)" },
      { rotulo: "Contracts exercised", valor: "44 of 44 operations across the three OpenAPI specs", fonte: "Repository README" },
      {
        rotulo: "Injected failure",
        valor: "with the ERP taken down in the middle of a batch of 20 deals, 20 of 20 were processed (16 needed a retry) and there were no duplicates",
        fonte: "Repository README",
      },
    ],
    naoValidado: ["Load.", "The ERP's real 2-hour window (validated only by calculation).", "No CI configured for the repository."],
    documentos: docs(
      "README",
      "Series guide (INDEX)",
      "AS-IS and TO-BE",
      "Data map",
      "ADRs",
      "Failure modes",
      "Error catalog",
      "Injected failure",
      "Operations guide",
    ),
    roteiroLeitura: docs(
      "1. README",
      "2. AS-IS and TO-BE",
      "3. Data map",
      "4. Idempotency ADR",
      "5. Retry ADR and failure modes",
      "6. Injected failure",
      "7. Operations guide",
    ),
    printLegendas: {
      "01-crm-negocio-ganho": "The deal marked Won in the CRM and the ERP return, with the customer, order and invoice IDs.",
      "06-painel-visao-geral": "Ponte dashboard: overview of events, attempts and the queue.",
      "08-painel-evento-em-retentativa": "An event in retry with error PONTE-ERP-001 (the ERP replied 503).",
      "10-painel-fila-de-falhas": "Failure queue (dead-letter), with manual reprocessing.",
      "12-painel-divergencias-da-reconciliacao": "Divergences flagged by reconciliation: it detects, it does not silently fix.",
    },
    diagramas: [
      { legenda: "Integration architecture: CRM, ERP, API, PostgreSQL queue, worker and reconciliation" },
      { legenda: "Data model: event, job, attempts, links and divergences" },
    ],
  },

  "erp-vortex": {
    frase: "An ERP for a partner company in the auto parts sector: a PUC Minas interdisciplinary project that won the Best Project award.",
    status: "academic project · 2025",
    selo: "Best Interdisciplinary Project in Software Engineering, PUC Minas",
    resumo30s: {
      problema: "A partner company in the auto parts sector needed an ERP, and the project brought together a team of 8 people at PUC Minas.",
      construi:
        "I was the project manager: discovery with the client, functional and non-functional requirements, business rules, database structure, task division and technical follow-up. I also developed.",
      importa: "Proof of managing a project with a real company from start to finish, recognized by the course coordination.",
    },
    areas: [
      { evidencia: "Manager of an 8-person team, with Scrum in sprints." },
      { evidencia: "Discovery, functional and non-functional requirements and business rules." },
      { evidencia: "Prototypes presented to the client and continuous feedback." },
    ],
    destaques: ["Best Interdisciplinary Project in Software Engineering", "Team of 8 people", "Scrum, prototypes and continuous feedback"],
    texto: [
      {
        titulo: "The recognition",
        paragrafos: [
          "The Vortex ERP won the award for Best Interdisciplinary Project in Software Engineering, given by the course coordination, which evaluated the projects and voted this one the best. A professor who followed the development also praised it, in a LinkedIn post.",
        ],
      },
      {
        titulo: "My role",
        paragrafos: [
          "I was the project manager and main person responsible. I led discovery with the client (interviews about the business and the flows), wrote functional and non-functional requirements and business rules, structured the database, divided the tasks and technically followed the 8-person team. I also developed.",
        ],
      },
      {
        titulo: "Method",
        paragrafos: ["Scrum with sprints, prototypes presented to the client and continuous feedback. Stack in the JavaScript and TypeScript ecosystem."],
      },
      {
        titulo: "What I do not claim",
        paragrafos: [
          "PUC does not release the company's name or information about real use of the system, so I do not claim that it went into use. I also have no screenshots or access to the code to show: this page exists only as text, with the recognition.",
        ],
      },
    ],
  },
};
