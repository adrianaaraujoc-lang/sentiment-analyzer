import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  // Base path for deployment
  base: './',
  plugins: [
    react(),  ],
  build: {
    // Configuração de diretório de saída conforme Render exige
    outDir: 'dist',
    sourcemap: false
  }
});