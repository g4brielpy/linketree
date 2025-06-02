# 🔗 DevLink

DevLink é uma aplicação inspirada no Linktree, desenvolvida com **React**, **TypeScript** e **Firebase**, que permite aos admins, personalizarem e compartilharem seus links pessoais e redes sociais de forma prática, moderna e responsiva.

🌐 Deploy: [linketree-lilac.vercel.app](https://linketree-lilac.vercel.app)  
📁 Repositório: [github.com/g4brielpy/linketree](https://github.com/g4brielpy/linketree)

---

## ✨ Funcionalidades

- ✅ Autenticação de usuário com Firebase Auth
- ✅ Inserção de links personalizados com:
  - Nome
  - URL
  - Cores (fundo e texto)
- ✅ Previsualização dos links antes de salvar
- ✅ Gerenciamento de redes sociais (Facebook, Instagram, YouTube)
- ✅ Página pública com todos os links e ícones sociais
- ✅ Layout responsivo com UI elegante
- ✅ Deploy via Vercel

---

## 🧰 Tecnologias Utilizadas

| Tecnologia     | Descrição                         |
|----------------|-----------------------------------|
| **React**      | Biblioteca para UI                |
| **TypeScript** | Tipagem estática para JS          |
| **Vite**       | Bundler rápido e moderno          |
| **TailwindCSS**| Estilização com utilitários       |
| **Firebase**   | Auth + Firestore Database         |
| **React Icons**| Ícones das redes sociais          |
| **React Toastify** | Feedback visual com toasts   |
| **Vercel**     | Deploy contínuo                   |

---

## 🗂️ Estrutura de Pastas (Resumo)

```
📁 src
 ┣ 📂components     // Botões, Navbar, etc.
 ┣ 📂pages          // Login, Home, Admin, Social
 ┣ 📂services       // Firebase setup
 ┣ 📂types          // Tipagens personalizadas
 ┣ 📂hooks          // useAuth e demais hooks
 ┗ 📜 main.tsx
```

---

## 🚀 Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/g4brielpy/linketree.git

# Acesse a pasta
cd linketree

# Instale as dependências
npm install

# Inicie o projeto
npm run dev
```

---

## 📦 Deploy

Este projeto está hospedado gratuitamente com a **Vercel** e é atualizado automaticamente a cada push na branch `main`.

