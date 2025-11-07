import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { modulePreloadPolyfill } from 'vite-plugin-module-preload-polyfill';

// https://vitejs.dev/config/
export default defineConfig({
  // Base path for deployment
  base: './',
  plugins: [
    react(),
    modulePreloadPolyfill() // Patch para garantir compatibilidade de carregamento de módulos
  ],
  build: {
    // Configuração de diretório de saída conforme Render exige
    outDir: 'dist',
    sourcemap: false
  }
});