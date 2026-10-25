# 00 · Diagnóstico (Fase 0)

Data: 25/10/2026 · Branch: `feat/portfolio-v2`

## Stack encontrada
- Next.js 16.2 (App Router) com `output: "export"` (site estático) e `images.unoptimized`.
- React 19, Tailwind CSS 4, framer-motion, lucide-react.
- Publicação: GitHub Actions (`.github/workflows/deploy.yml`) em push na `main`: `npm ci` → `npm run build` → publica `./out` no GitHub Pages (raiz do domínio).
- Formulário de contato: FormSubmit (AJAX, sem backend próprio).
- Antes desta fase, o conteúdo ficava escrito dentro dos componentes (`About`, `Journey`, `Projects`, `Skills`, `Experience`, `Certifications`), em uma única página.

## O que foi preservado
`/cv.pdf`, `/avatar.jpg`, as imagens de `/projects/*` já existentes, links de LinkedIn e GitHub, o formulário de contato (FormSubmit), o workflow de publicação (**não alterado**) e as âncoras `#sobre`, `#projetos`, `#competencias`, `#experiencia`, `#certificacoes` e `#contato`. A âncora `#jornada` deixou de existir (a seção foi fundida com a experiência, como pedido).

## Problemas encontrados (confirmados no código)
1. **Posicionamento só de desenvolvedor.** Hero e textos falavam de "Software Engineer • Full Stack • AI"; nada para quem busca implantação, CS ou automação.
2. **Os 7 projetos novos e o ERP Vortex não apareciam**; só 3 projetos antigos, em um modal.
3. **Jornada e Experiência repetiam a mesma informação.**
4. **Hotmart em uma frase**, sem rollouts, telefonia, salas, auditoria nem a automação das TVs.
5. **Sem os casos reais** (e-commerce, hotel/creche, CRM com ERP) nem a experiência de vendas.
6. **Certificações incompletas** (6 de 9), com selo "Certificado Verificado" em todas, inclusive em link genérico.
7. **Conteúdo preso nos componentes**: adicionar um projeto exigia editar JSX.
8. **Sem páginas de detalhe**: tudo em modal, sem URL própria, sem SEO por projeto.
9. **Links quebrados no conteúdo antigo** (verificados em 25/10/2026): repositório GerencieJa, repositório PMCopilot e a demo no Render retornam 404.
10. **Acessibilidade e SEO básicos ausentes**: sem link "pular para o conteúdo", sem `sitemap`/`robots` gerados, sem metadados por página.

## Riscos da mudança
- **URLs e âncoras:** só `#jornada` mudou. Registrado.
- **SEO:** `sitemap.xml` e `robots.txt` estáticos viraram rotas geradas (`app/sitemap.ts`, `app/robots.ts`) com as 24 páginas de conteúdo.
- **Exportação estática:** páginas dinâmicas exigem `generateStaticParams` (feito); a publicação continua igual.
- **Imagens:** ~15 MB de WebP novos em `public/projects/`.
- **Tamanho do conteúdo:** os textos novos vêm da base de dados; qualquer fato fora dela ficou de fora e está em `lacunas.md`.

## Decisões tomadas (resumo; detalhes em `decisoes.md`)
Manter a stack; conteúdo em `content/` validado por Zod; rotas estáticas por `generateStaticParams`; manter a identidade visual atual (papel cinza, laranja e verde-oliva) e modernizar.

## Prints "antes"
`docs/portfolio-v2/antes/`: capturas da home publicada, em desktop (1440 px) e mobile (390 px), feitas em 25/10/2026.
