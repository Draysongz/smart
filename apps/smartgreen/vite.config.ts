import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from '@rollup/plugin-commonjs'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [commonjs()]
    },
  },
  optimizeDeps: {
    include: ['api-contract/**/**'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://smart-1-hl3w.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // This line rewrites the URL if necessary
      }
    }
  }
});
