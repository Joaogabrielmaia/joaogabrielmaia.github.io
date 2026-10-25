import { z } from "zod";

export const areaSlugs = [
  "implantacao",
  "consultor-automacao-ia",
  "analista-automacao",
  "customer-success",
  "sdr-bdr",
  "consultor-solucoes",
  "analista-projetos",
  "negocios-requisitos",
] as const;

export const AreaSlug = z.enum(areaSlugs);
export type AreaSlug = z.infer<typeof AreaSlug>;

const Url = z.string().url();

export const RoleSchema = z.object({
  slug: AreaSlug,
  nome: z.string().min(3),
  nomeCurto: z.string().min(2),
  pitch: z.string().min(20),
  oQueFaz: z.string().min(20),
  oQueValoriza: z.string().min(20),
  /** Evidências de experiência (não-projeto). Cada uma aponta para uma experiência. */
  evidencias: z
    .array(
      z.object({
        texto: z.string().min(10),
        fonte: z.enum(["hotmart-suporte-ti", "desenvolvedor-full-stack-autonomo", "erp-vortex", "vendas"]),
      }),
    )
    .min(2),
  competencias: z.array(z.string()).min(3),
});
export type Role = z.infer<typeof RoleSchema>;

export const AreaLink = z.object({
  area: AreaSlug,
  nivel: z.enum(["principal", "relacionado"]),
  evidencia: z.string().min(10),
});

export const ProjectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  tipo: z.enum(["novo", "anterior", "academico"]),
  titulo: z.string().min(2),
  frase: z.string().min(20),
  ordem: z.number().int(),
  destaqueNaHome: z.boolean(),
  cenario: z
    .object({ empresa: z.string(), descricao: z.string() })
    .optional(),
  repositorio: Url.optional(),
  /** Pasta (dentro do repositório) com a documentação, ex.: docs/INDEX.md */
  repoNome: z.string().optional(),
  demo: Url.optional(),
  status: z.string(),
  resumo30s: z.object({
    problema: z.string().min(20),
    construi: z.string().min(20),
    importa: z.string().min(20),
  }),
  stack: z.array(z.string()).min(1),
  areas: z.array(AreaLink).min(1),
  destaques: z.array(z.string()),
  decisoes: z.array(
    z.object({
      decisao: z.string(),
      ganhei: z.string(),
      paguei: z.string(),
      quandoMudaria: z.string(),
      adr: Url.optional(),
    }),
  ),
  /** Cada número precisa de fonte e data; `confere` é o trecho que deve existir no README do repositório. */
  numeros: z.array(
    z.object({
      rotulo: z.string(),
      valor: z.string(),
      fonte: z.string(),
      data: z.string(),
      confere: z.string().optional(),
    }),
  ),
  naoValidado: z.array(z.string()),
  documentos: z.array(z.object({ rotulo: z.string(), url: Url })),
  roteiroLeitura: z.array(z.object({ rotulo: z.string(), url: Url })),
  prints: z.array(
    z.object({
      arquivo: z.string(),
      legenda: z.string(),
      destaque: z.boolean(),
      largura: z.number(),
      altura: z.number(),
    }),
  ),
  diagramas: z.array(
    z.object({ arquivo: z.string(), legenda: z.string(), largura: z.number().optional() }),
  ),
  capa: z.string().optional(),
  arquivosExtras: z.array(z.object({ rotulo: z.string(), url: z.string() })).default([]),
  /** Texto corrido (usado em páginas só de texto, como o ERP Vortex). */
  texto: z.array(z.object({ titulo: z.string(), paragrafos: z.array(z.string()) })).default([]),
  selo: z.string().optional(),
});
export type Project = z.infer<typeof ProjectSchema>;

export const ExperienceSchema = z.object({
  slug: z.string(),
  cargo: z.string(),
  organizacao: z.string(),
  periodo: z.string(),
  local: z.string().optional(),
  resumo: z.string().min(20),
  destaques: z.array(z.string()).min(3),
  atual: z.boolean().default(false),
  secoes: z.array(
    z.object({
      titulo: z.string(),
      itens: z.array(z.string()).min(1),
    }),
  ),
  historias: z.array(z.object({ titulo: z.string(), texto: z.string() })),
  ferramentas: z.array(z.string()),
  aprendi: z.array(z.string()),
  casos: z
    .array(z.object({ titulo: z.string(), texto: z.string() }))
    .default([]),
  areas: z.array(AreaSlug),
  naoPublicar: z.string().optional(),
});
export type Experience = z.infer<typeof ExperienceSchema>;

export const ProfileSchema = z.object({
  nome: z.string(),
  nomeCompleto: z.string(),
  cidade: z.string(),
  email: z.string().email(),
  linkedin: Url,
  github: Url,
  site: Url,
  hero: z.object({
    titulo: z.string(),
    subtitulo: z.string(),
    frase: z.string(),
    disponivel: z.string(),
  }),
  provas: z.array(z.object({ valor: z.string(), rotulo: z.string() })).length(4),
  busca: z.object({
    funcoes: z.string(),
    empresas: z.string(),
    formato: z.string(),
  }),
  formacao: z.object({ curso: z.string(), instituicao: z.string(), periodo: z.string() }),
  idiomas: z.array(z.string()),
  sobre: z.array(z.string()).min(1),
  comoTrabalho: z.array(z.string()),
  destaqueAcademico: z.string(),
});
export type Profile = z.infer<typeof ProfileSchema>;

export const SkillGroupSchema = z.object({
  grupo: z.string(),
  itens: z.array(z.string()).min(1),
  destaque: z.boolean().default(false),
});
export type SkillGroup = z.infer<typeof SkillGroupSchema>;

export const CertificationSchema = z.object({
  titulo: z.string(),
  emissor: z.string(),
  data: z.string(),
  destaque: z.boolean(),
  /** Link só quando confirmado como credencial correta. */
  urlCredencial: Url.optional(),
  verificado: z.boolean().default(false),
});
export type Certification = z.infer<typeof CertificationSchema>;
