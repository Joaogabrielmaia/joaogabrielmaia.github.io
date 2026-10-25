# 01 · Arquitetura da informação

Princípio: **camadas**. A home mostra resumos; cada resumo tem um "ver mais" que leva a uma página completa (ou expande no próprio lugar).

## Rotas (todas estáticas)
| Rota | Conteúdo |
|---|---|
| `/` | Hero (provas) → Áreas → Projetos em destaque → Experiência → Sobre → Competências → Certificações → Contato |
| `/projetos` | Índice com filtro por área; separa estudos de caso dos projetos anteriores e do acadêmico |
| `/projetos/[slug]` | 11 páginas: `trilha`, `pulso`, `prumo`, `fluxo`, `mapa`, `termometro`, `ponte`, `gerencieja`, `pm-copilot`, `dashboard-power-bi`, `erp-vortex` |
| `/experiencia/[slug]` | `desenvolvedor-full-stack-autonomo`, `hotmart-suporte-ti` |
| `/areas/[slug]` | 8 áreas-alvo |
| `/sobre` | Quem sou, o que busco, formação, idiomas, como trabalho |

Competências e certificações **não** têm página: "ver todas" expande no lugar (`aria-expanded`, foco preservado).

## Padrão "resumo + ver mais"
| Onde | Resumo | Ver mais |
|---|---|---|
| Projeto | cartão 16:9 com 1 frase, ≤4 chips de stack, ≤2 chips de áreas principais | `Ver detalhes` → `/projetos/[slug]` (o cartão inteiro é clicável, com um único link) |
| Experiência | período, cargo, 2 linhas, 3 chips de destaques reais | `Ver tudo que eu fazia` → `/experiencia/[slug]` |
| Área | nome, 1 linha de pitch, até 3 projetos principais | `Ver como me encaixo` → `/areas/[slug]` |
| Competências / certificações / prints | 4 grupos / 4 certificações / 5 prints | botão que expande no próprio lugar |

## Navegação
Cabeçalho fixo: Início · Áreas · Projetos · Experiência · Sobre · Contato (menu em tela cheia no celular, com `Esc` para fechar). Em toda página de detalhe: breadcrumb e "Voltar".

**"Voltar":** se a pessoa já navegou dentro do site, usa o histórico (o navegador restaura a posição de rolagem da home); se chegou direto por um link, vai para a âncora da seção (`/#projetos`, `/#experiencia`, `/#areas`, `/#sobre`). Coberto por teste E2E.

## Página de projeto (ordem)
Breadcrumb e título → chips de áreas e stack → botões (GitHub, README, documentação, demo) → resumo em 30 s (problema, o que construí, por que importa) → **caixa "Sobre este cenário"** (só nos 7 novos) → telas (5 em destaque, "ver todos" expande, abre em `<dialog>`) → como funciona (diagramas em SVG) → decisões e trade-offs → qualidade (tabela com fonte e data + "o que não foi validado") → como se aplica às vagas → roteiro de leitura (7 passos) e documentos-chave → anterior/próximo. Índice "Nesta página" fixo no desktop e recolhido no celular.

## Modelo de conteúdo
`content/` com arquivos tipados e validados com **Zod no build** (`schema.ts`). Adicionar um projeto novo exige **um arquivo** em `content/projects/` e uma linha em `content/index.ts`, mais as imagens (`npm run preparar:imagens`).
