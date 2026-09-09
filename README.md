# Wallet Management

Interface web mobile-first para gestão de carteira digital, com telas de autenticação, painel inicial, serviços, PIN de segurança e fluxo de transferência.

## Funcionalidades

- Cadastro e login de utilizador.
- Tela inicial com saldo, ações rápidas e lista de serviços.
- Tela de opções de transferência, incluindo transferência bancária e E-Wallet.
- Lista base de contactos frequentes.
- Telas preparadas para valor, revisão, sucesso da transferência, atividade e PIN.

## Tecnologias

- React
- Vite
- React Router DOM
- Tailwind CSS
- Lucide React
- ESLint

## Requisitos

- Node.js instalado
- npm instalado

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Gere a versão de produção:

```bash
npm run build
```

Pré-visualize a versão de produção:

```bash
npm run preview
```

Verifique o código com ESLint:

```bash
npm run lint
```

## Rotas

| Rota | Tela |
| --- | --- |
| `/` | Cadastro |
| `/signup` | Cadastro |
| `/login` | Login |
| `/home` | Página inicial |
| `/transfer` | Opções de transferência |
| `/transfer/contacts` | Contactos |
| `/transfer/amount` | Valor da transferência |
| `/transfer/review` | Revisão da transferência |
| `/transfer/success` | Sucesso da transferência |
| `/transfer/activity` | Atividade |
| `/pin` | PIN de segurança |

## Estrutura principal

```text
src/
  components/ui/      Componentes reutilizáveis de interface
  features/login/     Tela de login
  features/signUp/    Tela de cadastro
  features/home/      Tela inicial da carteira
  features/transfer/  Fluxo de transferência
  features/security/  Tela de PIN
  features/activity/  Tela de atividade
```

## Estado do projeto

O projeto está em fase inicial de desenvolvimento frontend. Algumas telas já possuem layout mais completo, enquanto outras ainda estão preparadas como placeholders para implementação futura.

## Comandos para enviar ao GitHub

Crie o repositório no GitHub e depois execute:

```bash
git init
git add .
git commit -m "docs: add project readme"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/wallet-management.git
git push -u origin main
```

Se o repositório local já existir, use apenas:

```bash
git add README.md package.json package-lock.json
git commit -m "docs: add project readme"
git remote add origin https://github.com/SEU-USUARIO/wallet-management.git
git push -u origin main
```
