import { SkillGroupSchema, CertificationSchema, type SkillGroup, type Certification } from "./schema";
import { z } from "zod";

export const skills: SkillGroup[] = z.array(SkillGroupSchema).parse([
  { grupo: "Desenvolvimento", destaque: true, itens: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "HTML/CSS", "Tailwind CSS"] },
  { grupo: "Dados e APIs", destaque: true, itens: ["PostgreSQL", "SQLite", "SQL", "Prisma ORM", "APIs REST", "Integrações HTTP e webhooks", "Modelagem relacional", "Power BI e DAX"] },
  { grupo: "IA e automação", destaque: true, itens: ["IA generativa", "Agentes de IA", "Engenharia de prompts", "RAG", "n8n", "Automação de processos", "Groq API", "OpenAI API"] },
  { grupo: "Gestão e requisitos", destaque: true, itens: ["Scrum", "Kanban", "Planejamento de sprints", "Refinamento de backlog", "Métricas ágeis", "Noções de PMBOK", "Discovery", "Levantamento de requisitos", "Regras de negócio", "Especificação funcional", "Alinhamento com stakeholders"] },
  { grupo: "Clientes e vendas", destaque: false, itens: ["Discovery", "Explicar trade-offs a não técnicos", "Prospecção por ligação e WhatsApp", "CRM (Pipedrive como usuário; CRMs sob medida)"] },
  { grupo: "Qualidade", destaque: false, itens: ["Testes unitários, de integração e E2E (Vitest, Playwright)", "Testes de contrato", "ADRs", "Rastreabilidade"] },
  { grupo: "Ferramentas", destaque: false, itens: ["Git", "GitHub", "Jira", "VS Code", "Docker (uso local)", "Workspace ONE (MDM)", "Zoom Rooms"] },
  { grupo: "Idiomas", destaque: false, itens: ["Português nativo", "Inglês básico"] },
]);

// Credenciais: sem `urlCredencial`/`verificado` enquanto o link não for conferido (ver docs/portfolio-v2/lacunas.md).
export const certifications: Certification[] = z.array(CertificationSchema).parse([
  { titulo: "Gestão de Projetos e Gestão Ágil com Scrum", emissor: "Udemy", data: "jul/2026", destaque: true },
  { titulo: "Career Essentials in Generative AI", emissor: "Microsoft e LinkedIn", data: "jul/2026", destaque: true },
  { titulo: "Google AI Essentials", emissor: "Google (Coursera)", data: "jul/2026", destaque: true },
  { titulo: "Banco de Dados SQL do Básico ao Avançado", emissor: "Udemy", data: "jul/2026", destaque: true },
  { titulo: "Power BI Completo", emissor: "Udemy", data: "jul/2026", destaque: false },
  { titulo: "Getting Started with Generative AI", emissor: "IBM SkillsBuild (Credly)", data: "jul/2026", destaque: false },
  { titulo: "Curso Web Moderno Completo com JavaScript", emissor: "Udemy", data: "set/2025", destaque: false },
  { titulo: "Git e GitHub: compartilhando e colaborando em projetos", emissor: "Alura", data: "abr/2025", destaque: false },
  { titulo: "Git e GitHub: repositório, commit e versões", emissor: "Alura", data: "set/2023", destaque: false },
]);
