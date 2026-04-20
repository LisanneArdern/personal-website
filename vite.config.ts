import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

const BUILD_DATE_ISO = new Date().toISOString().slice(0, 10)

export default defineConfig({
  plugins: [react(), imagetools()],
  define: {
    __BUILD_DATE__: JSON.stringify(BUILD_DATE_ISO),
  },
})
