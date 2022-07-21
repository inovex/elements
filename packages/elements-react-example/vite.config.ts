import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: '/'
  },
  base: '/elements.inovex.de/example-projects/react/',
  optimizeDeps: {
    include: ['@inovex.de/elements-react']
  },
  build: {
    commonjsOptions: {
      include: [/@inovex.de\/elements-react\//, /node_modules\//]
    },
  },
})
