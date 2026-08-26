import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
      services: fileURLToPath(new URL('./src/services', import.meta.url)),
      screens: fileURLToPath(new URL('./src/screens', import.meta.url)),
      fontawesome: fileURLToPath(new URL('./src/fontawesome.js', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.jsx',
    globals: true,
  },
})
