# Decisões

Cada decisão foi tomada sem pedir confirmação, como o prompt orienta. Todas podem ser revistas.

| # | Decisão | Por quê | Alternativa descartada |
|---|---|---|---|
| 1 | Manter Next.js 16 com `output: "export"` e o workflow atual | Páginas por `generateStaticParams` funcionam em exportação estática; publicação inalterada | Trocar de framework (sem ganho, com risco) |
| 2 | Conteúdo em `content/*.ts` com **Zod**, sem arquivos JSON/MDX | Tipos reais, import validado no build, helpers (`projectsForArea`) no mesmo lugar | MDX (mais bonito para texto longo, mas sem validação de campos) |
| 3 | Manter a identidade visual atual (papel, laranja, verde-oliva) | Pedido do prompt e aprovação do João nas rodadas anteriores | Redesenho do zero |
| 4 | Verde-oliva para títulos e laranja só para ação | O laranja em texto não passa no contraste AA; o verde escuro passa | Títulos em laranja |
| 5 | **Projeto "novo" = 7 estudos de caso; "anterior" = 3; "acadêmico" = Vortex** | Reflete a base e o filtro do índice | Lista única |
| 6 | Prints em WebP 1280 px + miniatura 640 px (`scripts/preparar-imagens.mjs`) | Peso; todos os prints dos repositórios foram incluídos (5 em destaque + "ver todos") | Só os 5 destaques |
| 7 | **Diagramas: SVG renderizado fora do repositório** com `mermaid-cli` (rótulos SVG puros, sem `foreignObject`) | O prompt pede SVG pré-renderizado, sem Mermaid em tempo de execução. Só o SVG é versionado | Mermaid no cliente |
| 8 | Diagramas do Trilha em WebP (a partir dos PNG que o próprio repositório já publica) | Já estavam renderizados e conferidos pelo autor | Re-renderizar |
| 9 | "Voltar" usa histórico só se a pessoa já navegou no site; senão, âncora | `document.referrer` não muda em navegação interna (SPA) | Sempre `router.back()` (quebra quando a pessoa chega por link direto) |
| 10 | Competências e certificações **expandem no lugar** (sem página) | Pedido do prompt | Páginas próprias |
| 11 | Removi da home a animação de entrada do hero e dos cabeçalhos de seção | O texto principal deve existir no HTML (e funcionar sem JS); LCP | Manter o efeito |
| 12 | Certificações sem link e sem selo "Verificado" | Os links antigos eram genéricos ou não conferidos; regra 9 do prompt | Manter o selo |
| 13 | Removidos os links de GerêncieJá (repositório e demo) e de PM Copilot (repositório) | Retornam 404 (verificado em 25/10/2026); regra 9 | Manter links quebrados |
| 14 | E-mail `joaogabrielmaia092@gmail.com` | É o e-mail já usado no formulário e no site; a base traz `joagabrielmaia092` (sem o "o"), provável erro de digitação | Usar a grafia da base |
| 15 | `docs/fonte/base-de-dados-joao-gabriel.md` com a seção 6.2 resumida | A versão completa de cada projeto está em `content/projects/*.ts` | Duplicar tudo em Markdown |
| 16 | "Quando eu mudaria" redigido por mim a partir do tema de cada ADR | O campo é pedido pelo prompt e a base só traz isso explicitamente para a Ponte | Deixar vazio; **o João precisa revisar** (ver `lacunas.md`) |
| 17 | Sem modo escuro; a home não tem imagem Open Graph própria (as páginas de projeto usam a capa) | Itens de corte previstos | — |
| 18 | `app/sitemap.ts` e `app/robots.ts` no lugar dos arquivos estáticos | Gerados a partir de `content/`, sempre em dia | Manter arquivos manuais |
