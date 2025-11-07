# ---- Builder stage ----
FROM node:20-bullseye-slim AS builder

# Diretório de trabalho
WORKDIR /workspace

# Copia o restante do código
COPY . .

# Habilita corepack e pnpm
RUN corepack enable && corepack prepare pnpm@10.20.0 --activate

# Instala dependências no workspace (usa workspace monorepo)
RUN pnpm install

# Build: usa o script "build" do package.json (que faz filter para sentiment-analyzer-web)
RUN pnpm build

# Observação: o build deve gerar apps/web/dist
# CONFIRME que o output realmente ficou em /workspace/apps/web/dist
