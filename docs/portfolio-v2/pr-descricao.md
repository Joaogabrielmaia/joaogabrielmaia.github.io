## Portfólio v2: informação em camadas para quem contrata

**Para quem lê:** recrutador, gestor ou fundador (inclusive não técnico) entende em segundos quem é o João, o que ele busca e que provas tem, e aprofunda só no que interessa.

### O que muda
- **Home em camadas:** hero com provas → 8 áreas-alvo → 4 projetos em destaque → experiência → sobre e o que busco → competências → certificações → contato.
- **24 páginas estáticas novas:** `/projetos` (filtro por área), 11 projetos (7 estudos de caso com a caixa "Sobre este cenário", 3 anteriores e o ERP Vortex só em texto), 2 de experiência (Hotmart e atuação autônoma, com os casos reais e a prospecção), 8 de área e `/sobre`.
- **Conteúdo em `content/`** validado com Zod no build: adicionar um projeto = um arquivo.
- **Material dos 7 repositórios:** 94 prints em WebP, 12 diagramas, números de teste conferidos por script com os READMEs atuais.
- **Acessibilidade e SEO:** pular para o conteúdo, foco visível, `<dialog>` na galeria, `aria-expanded`, `prefers-reduced-motion`, metadados/canonical por página, OG por projeto, sitemap e robots gerados.
- Identidade visual mantida e modernizada. Workflow de publicação **não alterado**; `cv.pdf` **não alterado**.

### Verificação (executada em 25/10/2026)
- Lint e tipos sem erro · build gera 29 rotas (24 páginas de conteúdo)
- Vitest **14/14** · Playwright + axe **52/52** (desktop 1440 e mobile 390; 0 violações WCAG 2.2 AA em 8 páginas; sem rolagem horizontal em 360 px em 11 páginas)
- `verificar:numeros` OK · `verificar:links` 87 links, 0 com problema
- Lighthouse (móvel simulado): acessibilidade 100, SEO 100, boas práticas 96–100, CLS 0; **desempenho 58–66** (LCP 8,5–10,8 s): é a próxima otimização.

### Antes e depois
`docs/portfolio-v2/antes/` e `docs/portfolio-v2/depois/` (WebP, página inteira).

### Pendências para o João (detalhes em `docs/portfolio-v2/lacunas.md`)
1. Revisar os campos "Quando eu mudaria" e as legendas dos prints.
2. Confirmar o e-mail (`joaogabrielmaia092`) e testar o formulário de contato (FormSubmit).
3. Enviar os links das credenciais (certificações estão sem link e sem selo "Verificado") e o endereço correto de GerêncieJá, PM Copilot e da demo (404 hoje).
4. Atualizar o `cv.pdf`.

**Não mesclar** antes da revisão. Merge na `main` dispara o deploy no GitHub Pages.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
