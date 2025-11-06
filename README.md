[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=fff&style=flat)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-brightgreen)](https://web.dev/pwa/)
[![WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-blue)](#)
[![Performance](https://img.shields.io/badge/Performance-Core%20Web%20Vitals-success)](#)
[![Security](https://img.shields.io/badge/Security-Zero%20Trust-critical)](#)

# Sentiment Analyzer

## Visão Geral

É um analisador de sentimentos simples que classifica frases ou textos curtos como **Positivo**, **Negativo** ou **Neutro**, utilizando uma abordagem baseada em regras (listas de palavras).

### Funcionalidades
- Interface limpa e responsiva
- Análise em tempo real
- Monorepo com pnpm
- CI/CD com GitHub Actions
- Deploy automatizado no Render
- PWA + Acessibilidade (WCAG 2.1 AA)

---

## Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/adrianaaraujoc-lang/sentiment-analyzer.git
cd sentiment-analyzer

# Instale pnpm (se não tiver)
npm install -g pnpm

# Instale dependências
pnpm install

# Rode o app
pnpm dev