# --- STAGE 1: BUILD ---
# Use Node.js LTS como base para o estágio de build
FROM node:lts-slim AS builder

# Variável de ambiente forçada para produção
ENV NODE_ENV=production

WORKDIR /app

# Instalar Turbo globalmente para otimizar o build do monorepo
RUN npm install -g turbo

# Copiar arquivos de configuração do monorepo
COPY package.json package-lock.json turbo.json ./

# Instalar dependências da raiz
RUN npm install --ignore-scripts

# Copiar todo o código fonte
COPY . .

# Copiar a pasta apps/web, que contém o código do frontend
WORKDIR /app/apps/web
COPY apps/web/package.json apps/web/package-lock.json ./
RUN npm install

# Voltar para a raiz e executar o build do monorepo
# A tarefa 'build' será resolvida pelo turbo.json
WORKDIR /app
RUN turbo run build --filter=web
