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
# O '--ignore-scripts' é importante para ignorar 'patch-package' no Docker
# que será executado apenas na máquina host (Render/CI) antes do 'npm run build'
# conforme a Render exige o comando 'npm install && npm run build'
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

# --- STAGE 2: RUNTIME (Servidor Nginx Leve) ---
# Usamos um servidor web leve para servir os arquivos estáticos gerados
FROM nginx:alpine AS runner

# Remover a configuração padrão do Nginx
RUN rm -rf /etc/nginx/conf.d

# Copiar a configuração personalizada do Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copiar os arquivos estáticos de produção gerados pelo estágio 'builder'
# O diretório 'dist' é o Publish Directory especificado para a Render
COPY --from=builder /app/apps/web/dist /usr/share/nginx/html

# Expor a porta que o Nginx está escutando (padrão 80)
EXPOSE 80

# Comando para iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]