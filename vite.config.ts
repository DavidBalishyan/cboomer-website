import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import tailwindcss from '@tailwindcss/vite'

const require = createRequire(import.meta.url)
const qwikLoader = readFileSync(
  require.resolve('@builder.io/qwik/qwikloader.js'),
  'utf8',
).replace(/<\/script/gi, '<\\/script')

// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [
    {
      name: 'inject-qwikloader',
      enforce: 'pre',
      transformIndexHtml(html) {
        return html.replace(
          '<head>',
          `<head>\n    <script id="qwikloader">${qwikLoader}</script>`,
        )
      },
    },
    qwikVite({
      csr: true,
    }),
    tailwindcss(),
  ],
})
