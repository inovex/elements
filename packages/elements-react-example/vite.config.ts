import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  mode: "development",
  server: {
    open: '/'
  },
  base: "./example-projects/react/",
  optimizeDeps: {
    include: ['@inovex.de/elements-react']
  },
  build: {
    commonjsOptions: {
      include: [/@inovex.de\/elements-react\//, /node_modules\//]
    },
    minify: false,
  },
})
