// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  // Configuração básica do Vite (não precisamos de muito para um app Vanilla JS/TS)
  // Certifica-se de que ele reconhece os arquivos .ts
  base: '/sentiment-analyzer/',
  server: {
    open: true, // Abrir automaticamente no navegador
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});