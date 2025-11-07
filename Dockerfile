# ---- Builder stage ----
FROM node:20-bullseye-slim AS builder

# Diretório de trabalho
WORKDIR /workspace

# Evitar instalar dependências desnecessárias em layers falsos:
# Copia apenas arquivos que afetam a resolução de dependências primeiro.
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./

# Habilita corepack e pnpm
RUN corepack enable && corepack prepare pnpm@10.20.0 --activate

# Instala dependências no workspace (usa workspace monorepo)
RUN pnpm install --no-frozen-lockfile

# Copia o restante do código
COPY . .

# Build: usa o script "build" do package.json (que faz filter para sentiment-analyzer-web)
RUN pnpm run build

# Observação: o build deve gerar apps/web/dist
# CONFIRME que o output realmente ficou em /workspace/apps/web/dist
