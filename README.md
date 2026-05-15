# 🎮 Loja Games API

API REST desenvolvida com NestJS para gerenciamento de produtos e categorias de uma loja de games.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- NestJS
- TypeScript
- TypeORM
- MySQL
- Class Validator

---

## 📌 Funcionalidades

✅ CRUD de Categorias  
✅ CRUD de Produtos  
✅ Relacionamento entre Produto e Categoria  
✅ Validações com Class Validator  
✅ Busca por nome e descrição  

---

## ⚙️ Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/maariana-gen/loja-games-api.git
```

Acesse a pasta do projeto:

```bash
cd loja-games-api
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run start:dev
```

---

## 📚 Endpoints

### Categorias

| Método | Rota |
|---|---|
| GET | /categorias |
| GET | /categorias/:id |
| GET | /categorias/descricao/:descricao |
| POST | /categorias |
| PUT | /categorias |
| DELETE | /categorias/:id |

---

### Produtos

| Método | Rota |
|---|---|
| GET | /produtos |
| GET | /produtos/:id |
| GET | /produtos/nome/:nome |
| POST | /produtos |
| PUT | /produtos |
| DELETE | /produtos/:id |

---

## 👩‍💻 Desenvolvedora

Projeto desenvolvido por Mariana Soares.
