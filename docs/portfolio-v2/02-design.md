# 02 · Design

**Direção:** mantém a identidade já existente (papel de concreto cinza, laranja `#F29A0F` como cor de ação, verde-oliva `#7a8c57` como secundária, placas cinza com grade e cartões brancos de cantos largos) e a **modernizo** com uma hierarquia mais clara, texto simples no topo e jargão só nos detalhes.

## Tipografia (auto-hospedada via `next/font`, baixada no build)
| Uso | Fonte |
|---|---|
| Títulos de seção e de cartão | Anton (condensada, caixa alta), em verde-oliva |
| Títulos de leitura, subtítulos | Syne (500/700/800) |
| Texto corrido | Geist |
| Assinatura em script (decorativa, `aria-hidden`) | Pinyon Script |
| Código e chips de tecnologia | Geist Mono |

## Paleta e contraste
| Token | Valor | Uso |
|---|---|---|
| Papel | `#dcdcda` | fundo, com granulado e manchas em CSS |
| Tinta | `#161616` | texto principal |
| Laranja | `#F29A0F` (hover `#d98200`) | botões primários; **texto laranja só decorativo** (em texto, usar `#8f5600`) |
| Verde-oliva | `#7a8c57` / escuro `#5b6b3e` / `#4b5a30` | títulos grandes, contornos; texto pequeno só em `#5b6b3e` ou mais escuro |
| Creme | `#fbfcf3` | cartões |

Contraste medido com axe-core (regras WCAG 2.2 AA): **0 violações** nas 8 páginas testadas, em desktop e mobile.

## Escala, grade e formas
Espaçamento em múltiplos de 4 px (Tailwind); seções com `py-20`; largura de leitura nas páginas de detalhe ≤ 56rem (`max-w-4xl`); grade de 1/2/3/4 colunas com ponto de quebra em 640 e 1024 px. Raio de 2rem nos cartões, 3rem nas placas. Sombras suaves de "papel sobre mesa".

## Componentes e estados
Botão primário (laranja), secundário (contorno verde), chips (`tech`, `área`, `área relacionada`, `destaque`), cartão de projeto e de área (um link por cartão, área inteira clicável), placa (`.slab`, cinza ou verde), expandir (`aria-expanded`), galeria em `<dialog>`, tabela de números, caixa de cenário (tracejada), índice lateral.
Estados: hover (cor/sombra), **foco visível** (anel laranja de 4 px nos elementos interativos customizados), ativo (`aria-pressed` no filtro), desabilitado (formulário durante o envio).

## Movimento
Constelação de fundo (canvas) que reage ao cursor; entradas curtas na home. Respeita `prefers-reduced-motion` (a constelação não anima). Sem carrosséis automáticos nem popups.

## Responsivo
Mobile first a partir de 360 px, sem rolagem horizontal (verificada por teste E2E em 11 páginas). Diagramas e tabelas largas rolam dentro do próprio quadro (focável por teclado).

## Modo escuro
**Não implementado** (item previsto para corte na seção 13 do prompt). Registrado em `lacunas.md`.
