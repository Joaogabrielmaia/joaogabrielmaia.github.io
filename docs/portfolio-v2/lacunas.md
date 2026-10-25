# Lacunas, inconsistências e pendências

Tudo o que ficou de fora, foi cortado ou precisa de decisão do João. Nada disso aparece no site como fato.

## Para o João decidir ou confirmar
1. **E-mail.** A base traz `joagabrielmaia092@gmail.com` (sem o "o" depois de "joa"); o site e o formulário sempre usaram `joaogabrielmaia092@gmail.com`. Usei este último. Confirmar.
2. **Campos "Quando eu mudaria"** das decisões de projeto (seção "Decisões e trade-offs"): a base só os traz explicitamente para a Ponte. Redigi os demais a partir do tema de cada ADR, **sem ler o ADR inteiro**. Revisar os 7 projetos novos antes de divulgar, ou apagar os campos que não refletirem o que o João pensou.
3. **Legendas dos prints.** As 5 legendas de destaque por projeto foram escritas a partir das galerias dos repositórios (quando existiam) e da base. Os demais prints usam o título derivado do nome do arquivo. Revisar.
4. **"~15 clientes atendidos"** na faixa de provas do hero é uma estimativa da própria base ("sem controle exato"). Mantive o "~". Confirmar se quer exibir.
5. **"1º"** no cartão do prêmio é só um destaque gráfico para "Melhor Trabalho Interdisciplinar". Trocar se preferir outro símbolo.
6. **Tom neutro (cardápio):** o site não declara mais o que o João procura nem PJ/CLT; mostra áreas de atuação e "Betim, MG · remoto ou híbrido". Combinar PJ/CLT na conversa. O cargo "atuação autônoma" foi mantido.
7. **Recomendação no LinkedIn** do cliente do e-commerce (pendência da base).

## Links e credenciais
8. **GerêncieJá, PM Copilot e demo sem link (confirmado pelo João em 25/10/2026):** não existem mais links públicos; as páginas ficam só com texto.
9. **Certificações:** 8 de 9 têm link de credencial, montado a partir dos códigos do LinkedIn. **Verificadas** (página pública conferida com nome e curso): 2 da Alura e IBM/Credly. **Sem o selo:** 4 da Udemy (bloqueiam robôs, 403) e Google/Coursera (a página responde 200 para qualquer código): abrir uma vez e conferir. **Sem link:** Microsoft/LinkedIn (o LinkedIn só mostra o código). Para dar o selo, marcar `verificado: true` em `content/skills.ts`.
10. **LinkedIn:** o link responde 999 a robôs (bloqueio do LinkedIn), então o verificador só avisa. Conferir à mão.
11. **Projetos antigos removidos do site (25/10/2026, pedido do João):** GerêncieJá, PM Copilot e Dashboard Executivo Power BI. Ficam 8 projetos: os 7 estudos de caso e o ERP Vortex. Não há localização (cidade) nem "disponível para oportunidades" no site.

## Conteúdo
12. **`cv.pdf`:** decisão do João em 25/10/2026: não atualizar agora. Continua desatualizado; o botão "Baixar CV" aponta para ele.
13. **ERP Vortex:** só texto, sem imagens, sem afirmar uso (regras da base).
14. **Formulário de contato:** usa FormSubmit (AJAX). **Não testei o envio** (enviaria e-mail de verdade); na primeira vez o FormSubmit pede ativação do endereço por e-mail. Confirmar que funciona.
15. **Textos de exemplo nos READMEs:** a base avisava de "Minha experiência real" (Mapa) e de `[ESPAÇO PARA EU PREENCHER: ...]` em vários READMEs. Em 25/10/2026, a busca por esses marcadores nos 7 READMEs clonados não encontrou nenhum. Parece resolvido; vale uma olhada.
16. **PR nº 3 dos 7 repositórios:** parecem mesclados (os READMEs e `docs/ciclo-de-vida/` já estão na `main`). Os números do site vêm desses READMEs e foram conferidos por script.
17. **Fluxo agora tem prints** (11 no repositório); a base dizia que não tinha. O Power BI do Fluxo e do Termômetro continuam sem relatório montado, e o site não o promete.
18. **Base de dados salva com a seção 6.2 resumida** (o detalhe de cada projeto está em `content/projects/*.ts`).

## Cortes e limites
19. **Modo escuro:** cortado (primeiro item da lista de cortes viável). Há um `prefers-reduced-motion` respeitado.
20. **Imagem Open Graph da home:** não há; as páginas de projeto usam a capa.
21. **Diagrama do modelo de dados da Ponte:** o rótulo "ReconciliationRun" quebra em duas linhas (limite do render do Mermaid). Cosmético.
22. **Desempenho:** ver `qualidade.md`. A nota do Lighthouse em modo móvel (simulado) ficou entre 58 e 66; há trabalho a fazer em JavaScript e fontes.
23. **Console do navegador:** em exportação estática, o Next 16 tenta buscar arquivos `__next.*.txt` de pré-carregamento que o servidor estático não resolve; aparece como 404 no console (Lighthouse "best practices" 96). Não quebra a navegação.
24. **Verificação em outros navegadores/aparelhos:** só Chrome (desktop e viewport de celular). Não testei Safari, Firefox nem celular físico.
