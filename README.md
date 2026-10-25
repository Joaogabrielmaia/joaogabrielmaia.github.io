# Portfólio de João Gabriel Maia

Site estático (Next.js 16, React 19, Tailwind 4) publicado no GitHub Pages em https://joaogabrielmaia.github.io. A publicação é automática a cada push na `main` (`.github/workflows/deploy.yml`).

## Estrutura
- Português nas URLs originais e inglês em `/en` (`/en/projects`, `/en/experience`, `/en/areas`, `/en/about`); tema claro e escuro
- `/` home com resumos · `/projetos` e `/projetos/[slug]` · `/experiencia/[slug]` · `/areas/[slug]` · `/sobre`
- `content/`: **todo o conteúdo** em português; as traduções ficam em `content/en/` (só os campos de texto, mescladas por `deepMerge`) e os textos de interface em `content/ui.ts`, tipado e validado com Zod no build (o build falha se faltar um campo obrigatório)
  - `profile.ts`, `roles.ts` (8 áreas), `experiences/`, `skills.ts` (competências e certificações), `projects/` (um arquivo por projeto)
- `components/`, `app/`: interface e rotas
- `public/projects/<slug>/`: prints em WebP (e `thumbs/`), `diagrams/` em SVG
- `docs/fonte/`: base de dados (fonte única de conteúdo) · `docs/portfolio-v2/`: diagnóstico, decisões, lacunas, qualidade e prints antes/depois

## Como rodar
```bash
npm ci
npm run dev        # http://localhost:3000
npm run build      # gera ./out (exportação estática)
npm test           # testes de conteúdo e regras de integridade (Vitest)
npm run servir     # serve ./out em http://localhost:4173
npm run e2e        # Playwright (usa o Chrome instalado) + axe; rode `npm run build` antes
npm run verificar:links
npm run verificar:numeros -- <pasta com os clones dos repositórios>
```

## Como adicionar um projeto
1. Copie `content/projects/trilha.ts` para `content/projects/<slug>.ts` e preencha os campos (o schema em `content/schema.ts` aponta o que falta).
2. Registre o projeto em `content/index.ts`.
3. Prints: clone o repositório do projeto, inclua-o no mapa de `scripts/preparar-imagens.mjs` e rode `npm run preparar:imagens -- <pasta dos clones>`; diagramas em SVG vão em `public/projects/<slug>/diagrams/`.
4. Números de teste: use o campo `confere` (trecho que deve existir no README do repositório) e rode `npm run verificar:numeros`.
5. `npm test && npm run build`.

## Regras de conteúdo (resumo)
Empresas, pessoas e dados dos 7 projetos novos são **fictícios** e isso aparece em cada página ("Sobre este cenário"). Nada de cliente real, produção ou resultado medido nesses projetos; ganhos são estimativas rotuladas. Casos reais sem nome de cliente. Detalhes em `docs/fonte/base-de-dados-joao-gabriel.md`.
