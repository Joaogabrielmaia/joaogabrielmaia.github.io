# João Gabriel Maia — Portfólio Profissional

Portfólio profissional de **João Gabriel Maia**, graduando em Engenharia de Software pela PUC Minas com foco em **Gestão de Produtos, Gestão de Projetos e Inteligência Artificial**.

🌐 **URL Oficial**: [https://joaogabrielmaia.github.io](https://joaogabrielmaia.github.io)

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 16 (App Router + Turbopack)
- **UI & Estilização**: React 19, Tailwind CSS v4, Framer Motion
- **Ícones & Design**: Lucide React, Glassmorphism, Design System responsivo
- **Formulário de Contato**: FormSubmit (envio assíncrono direto sem backend)
- **Deploy & CI/CD**: GitHub Pages + GitHub Actions (`output: 'export'`)

---

## 🚀 Desenvolvimento Local

1. Instalar as dependências:
   ```bash
   npm install
   ```

2. Executar o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## ⚙️ Deploy Automático no GitHub Pages

Este repositório está totalmente configurado para publicação automática no **GitHub Pages** via **GitHub Actions**.

Sempre que houver um `git push` na branch `main`, a Action `.github/workflows/deploy.yml` executará automaticamente:
1. Instalação limpa das dependências (`npm ci`)
2. Compilação estática (`npm run build` -> pasta `out/`)
3. Publicação direta no domínio `https://joaogabrielmaia.github.io`

### Ativação Única no Repositório do GitHub:
No seu repositório do GitHub:
- Vá em **Settings** > **Pages**
- Em **Source**, selecione **GitHub Actions**
- Faça o `git push` e o site estará no ar em poucos segundos!
