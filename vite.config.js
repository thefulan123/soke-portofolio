import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed to https://thefulan123.github.io/soke-portofolio/
export default defineConfig({
  base: '/soke-portofolio/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 900,
  },
})
