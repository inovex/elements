import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: '/'
  },
  base: "/example-projects/react/",
  optimizeDeps: {
    include: ['elements-react']
  },
  build: {
    commonjsOptions: {
      include: [/elements-react/, /node_modules/]
    }
  },
})
