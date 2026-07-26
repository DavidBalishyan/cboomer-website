import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [
    qwikVite({
      csr: true,
    }),
    tailwindcss(),
  ],
})
