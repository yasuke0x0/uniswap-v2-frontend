import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'build', // This sets the output directory to 'build'
    emptyOutDir: true, // This ensures the output directory is emptied before each build
  },
  server: {
    port: 3000,
  },
})
