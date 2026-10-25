# Qualidade: o que foi medido de verdade

Tudo abaixo foi executado em 25/10/2026, nesta máquina (Windows 11, Chrome instalado, Node 24), contra o build estático servido por `scripts/servir-out.mjs`. Nenhum número daqui é publicado no site.

## Verificações automáticas
| Verificação | Comando | Resultado |
|---|---|---|
| Lint | `npx eslint .` | sem erros nem avisos |
| Tipos | `npx tsc --noEmit` | sem erros |
| Build | `npm run build` | build concluído: 29 rotas geradas, 24 delas páginas de conteúdo |
| Testes unitários (conteúdo e regras de integridade) | `npm test` | **14 de 14** (Vitest 3) |
| Números publicados × READMEs | `npm run verificar:numeros -- <pasta dos clones>` | todos conferem |
| Links externos | `npm run verificar:links` | **87 links, 0 com problema** (o LinkedIn responde 999 a robôs e é conferido à mão) |
| E2E + acessibilidade (Playwright, Chrome) | `npm run e2e` | **52 de 52**, em desktop 1440 px e mobile 390 px |

### O que o E2E cobre
- home → cartão de projeto → página → "Voltar" volta à região de projetos da home (rolagem acima de 500 px e seção visível);
- home → experiência → "Ver tudo que eu fazia";
- filtro por área em `/projetos` (muda a contagem, mostra Termômetro e esconde Fluxo em "Customer Success");
- "ver todas" das certificações e das competências (`aria-expanded`);
- galeria: abre em `<dialog>` e fecha com `Esc`;
- teclado: "pular para o conteúdo" e abrir/fechar o expandir com `Enter` e `Espaço`, com o foco preservado;
- menu do celular;
- **sem rolagem horizontal em 360 px** em 11 páginas (inclui checagem de elementos que passam da borda, porque o `body` tem `overflow-x: hidden`);
- **axe-core** com as regras WCAG 2.0/2.1/2.2 A e AA em 8 páginas (home, projetos, sobre, 3 tipos de projeto, área e experiência), nos dois tamanhos: **0 violações** depois de corrigir contraste e região rolável sem foco.

## Lighthouse (local, preset móvel padrão, com limitação simulada de rede e CPU)
| Página | Desempenho | Acessibilidade | Boas práticas | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|
| `/` | 58 | 100 | 96 | 100 | 10,8 s | 330 ms | 0 |
| `/projetos` | 65 | 100 | 96 | 100 | 10,6 s | 370 ms | 0 |
| `/projetos/trilha` | 65 | 100 | 96 | 100 | 10,5 s | 370 ms | 0 |
| `/areas/implantacao` | 62 | 100 | 96 | 100 | 8,7 s | 490 ms | 0 |
| `/sobre` | 64 | 100 | 96 | 100 | 8,5 s | 440 ms | 0 |
| `/experiencia/hotmart-suporte-ti` | 66 | 100 | 100 | 100 | 9,3 s | 370 ms | 0 |

**Leitura honesta:**
- Acessibilidade e SEO: 100 em todas. CLS: 0.
- **Desempenho está abaixo do que eu gostaria (58 a 66).** O LCP é o `<h1>` do hero, com cerca de 2,7 s de atraso de renderização no diagnóstico do Lighthouse, e o TBT vem do JavaScript (framer-motion, canvas, hidratação). Os valores usam a simulação padrão do Lighthouse (rede 4G lenta e CPU 4× mais lenta), então a experiência real em um computador comum é melhor; mesmo assim, é a próxima otimização a fazer (menos JavaScript no hero, menos pesos de fonte, canvas só quando visível).
- Boas práticas 96: um 404 no console por causa dos arquivos `__next.*.txt` de pré-carregamento do Next em exportação estática, que o servidor local não resolve.
- Medido só em Chrome.

## O que não foi medido
Safari, Firefox, celular físico, leitor de tela real (NVDA/VoiceOver), desempenho em rede real, cobertura de código do site, envio do formulário de contato.
