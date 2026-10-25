# Relatório final · Portfólio v2

Branch `feat/portfolio-v2` · 25/10/2026 · PR aberto para revisão, **sem merge**.

## O que foi feito
- **Modelo de conteúdo** em `content/` (perfil, 8 áreas, 2 experiências, 11 projetos, competências, 9 certificações), validado com Zod no build. Adicionar um projeto = um arquivo.
- **Home em camadas:** hero com provas → onde posso ajudar (8 áreas) → 4 projetos em destaque → experiência → sobre e o que busco → competências → certificações → contato.
- **24 páginas de conteúdo (todas estáticas):** `/projetos` (com filtro por área), 11 páginas de projeto (7 estudos de caso com a caixa "Sobre este cenário", 3 anteriores e o ERP Vortex só em texto), 2 de experiência (Hotmart e atuação autônoma, com os casos reais e a prospecção), 8 de área e `/sobre`.
- **Material dos 7 repositórios:** 94 prints em WebP (1280 px e miniatura de 640 px), 12 diagramas (9 SVG renderizados com `mermaid-cli` e 3 WebP do Trilha), PDF de exemplo do Mapa. Todos os números de teste foram lidos dos READMEs atuais e conferidos por script.
- **Acessibilidade e SEO:** link "pular para o conteúdo", foco visível, `<dialog>` na galeria, `aria-expanded` nos expansores, `prefers-reduced-motion`, metadados e canonical por página, Open Graph e Twitter Card por projeto, `sitemap.xml` e `robots.txt` gerados, JSON-LD `Person`.
- **Identidade visual mantida** (papel cinza, laranja e verde-oliva), modernizada.

## O que foi cortado
Modo escuro e imagem Open Graph própria da home (ver `lacunas.md`). Todo o restante, inclusive `/sobre` e a galeria com `<dialog>`, ficou.

## O que foi medido de verdade (25/10/2026)
- Lint e tipos sem erro; build gera 29 rotas (24 páginas de conteúdo).
- **Vitest: 14 de 14.** **Playwright + axe: 52 de 52** (desktop e mobile), com 0 violações WCAG 2.2 AA nas 8 páginas testadas e sem rolagem horizontal em 360 px em 11 páginas.
- `verificar:numeros`: todos conferem. `verificar:links`: 87 links, 0 com problema.
- **Lighthouse (móvel simulado):** acessibilidade 100, SEO 100, boas práticas 96 (100 em uma página), CLS 0; **desempenho 58 a 66**, LCP 8,5 a 10,8 s, TBT 330 a 490 ms.

## Números de teste dos projetos (lidos dos READMEs, com data)
| Projeto | Testes publicados | Data |
|---|---|---|
| Trilha | 156 (52 unitários, 70 de integração, 34 E2E) | 24/10/2026 |
| Pulso | 200 de unidade e integração (111 + 89) e 16 E2E | 24/10/2026 |
| Prumo | Vitest 83 de 83 e E2E 14 de 14; avaliação em 3 rodadas (66→86→86% e 70→80→80%) | 24/10/2026 e 23/10/2026 |
| Fluxo | 80 de 80 e 5 de 5 E2E; carga de 500 mensagens | 24/10/2026 e 23/10/2026 |
| Mapa | 89 unitários, 11 de integração, 15 E2E | 24/10/2026 |
| Termômetro | 76 unitários, 5 de integração, 14 E2E | 24/10/2026 |
| Ponte | 193 Vitest e 10 E2E | 24/10/2026 e 23/10/2026 |

## Pendências para o João
1. **Revisar** os campos "Quando eu mudaria" e as legendas dos prints (`lacunas.md` itens 2 e 3).
2. **Confirmar o e-mail** (`joaogabrielmaia092`) e **testar o formulário de contato** (FormSubmit pede ativação).
3. **Enviar os links das credenciais** (as 9 certificações estão sem link e sem selo "Verificado") e o endereço correto de GerêncieJá, PM Copilot e da demo (retornam 404).
4. **Atualizar o `cv.pdf`** (não foi alterado).
5. Decidir sobre desempenho (Lighthouse móvel 58 a 66) e modo escuro, se quiser.
6. Revisar o PR e mesclar. Os 7 repositórios já estão com o PR nº 3 incorporado na `main`.

## Como revisar
`docs/portfolio-v2/antes/` e `depois/` têm os prints (WebP, página inteira, desktop 1440 px e mobile 390 px). Para ver rodando: `npm ci && npm run build && npm run servir`.
