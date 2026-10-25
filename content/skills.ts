import { SkillGroupSchema, CertificationSchema, type SkillGroup, type Certification } from "./schema";
import { z } from "zod";

export const skills: SkillGroup[] = z.array(SkillGroupSchema).parse([
  { grupo: "Desenvolvimento", destaque: true, itens: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "HTML/CSS", "Tailwind CSS"] },
  { grupo: "Dados e APIs", destaque: true, itens: ["PostgreSQL", "SQLite", "SQL", "Prisma ORM", "APIs REST", "Integrações HTTP e webhooks", "Modelagem relacional", "Power BI e DAX"] },
  { grupo: "IA e automação", destaque: true, itens: ["IA generativa", "Agentes de IA", "Engenharia de prompts", "RAG", "n8n", "Automação de processos", "Groq API", "OpenAI API"] },
  { grupo: "Gestão e requisitos", destaque: true, itens: ["Scrum", "Kanban", "Planejamento de sprints", "Refinamento de backlog", "Métricas ágeis", "Noções de PMBOK", "Discovery", "Levantamento de requisitos", "Regras de negócio", "Especificação funcional", "Alinhamento com stakeholders"] },
  { grupo: "Comunicação e vendas", destaque: false, itens: ["Discovery", "Explicar trade-offs a não técnicos", "Prospecção por ligação e WhatsApp", "CRM (Pipedrive como usuário; CRMs sob medida)"] },
  { grupo: "Qualidade", destaque: false, itens: ["Testes unitários, de integração e E2E (Vitest, Playwright)", "Testes de contrato", "ADRs", "Rastreabilidade"] },
  { grupo: "Ferramentas", destaque: false, itens: ["Git", "GitHub", "Jira", "VS Code", "Docker (uso local)", "Workspace ONE (MDM)", "Zoom Rooms"] },
  { grupo: "Idiomas", destaque: false, itens: ["Português nativo", "Inglês básico"] },
]);

// Links e códigos enviados pelo João (LinkedIn, 25/10/2026). Todas as credenciais são verificadas por ele.
// Career Essentials in Generative AI (Microsoft/LinkedIn Learning) é nativa do LinkedIn: não tem página pública, só o código.
export const certifications: Certification[] = z.array(CertificationSchema).parse([
  { titulo: "Gestão de Projetos e Gestão Ágil com Scrum", emissor: "Udemy", data: "jul/2026", destaque: true, urlCredencial: "https://www.udemy.com/certificate/UC-3f824937-d8e3-474d-9673-0b2a44650688/", verificado: true },
  { titulo: "Career Essentials in Generative AI", emissor: "Microsoft e LinkedIn", data: "jul/2026", destaque: true, verificado: true, nota: "Credencial nativa do LinkedIn", codigo: "dbe5134b57d0ab29b4b6aa9d0bb333a63928c33474204c49640cd97d4a36a56e" },
  { titulo: "Google AI Essentials", emissor: "Google (Coursera)", data: "jul/2026", destaque: true, urlCredencial: "https://www.coursera.org/account/accomplishments/specialization/KYYB1071VUYT", verificado: true },
  { titulo: "Banco de Dados SQL do Básico ao Avançado", emissor: "Udemy", data: "jul/2026", destaque: true, urlCredencial: "https://www.udemy.com/certificate/UC-8e3e5ec0-4f34-4de1-9d5d-42abf8018289/", verificado: true },
  { titulo: "Power BI Completo", emissor: "Udemy", data: "jul/2026", destaque: false, urlCredencial: "https://www.udemy.com/certificate/UC-fdd87f9d-16c2-4e1b-807d-e8eb12d7500d/", verificado: true },
  { titulo: "Getting Started with Generative AI", emissor: "IBM SkillsBuild (Credly)", data: "jul/2026", destaque: false, urlCredencial: "https://www.credly.com/badges/f49c52e3-4f58-4c8a-8e11-cf80af175739", verificado: true },
  { titulo: "Curso Web Moderno Completo com JavaScript", emissor: "Udemy", data: "set/2025", destaque: false, urlCredencial: "https://www.udemy.com/certificate/UC-39b7e3e4-3f58-489e-955a-9ac5601972bb/", verificado: true },
  { titulo: "Git e GitHub: compartilhando e colaborando em projetos", emissor: "Alura", data: "abr/2025", destaque: false, urlCredencial: "https://cursos.alura.com.br/certificate/a01fc020-2b0d-4412-93e8-a002aa1e285d", verificado: true },
  { titulo: "Git e GitHub: repositório, commit e versões", emissor: "Alura", data: "set/2023", destaque: false, urlCredencial: "https://cursos.alura.com.br/certificate/4f786b27-ab13-40b2-91d7-7cca98d12ac6", verificado: true },
]);
