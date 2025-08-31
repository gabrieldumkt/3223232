import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lovable/',     // 👈 ESSENCIAL para servir em /lovable
  plugins: [react()],
})
