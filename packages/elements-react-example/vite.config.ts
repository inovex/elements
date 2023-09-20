import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const baseConfig = {
  plugins: [react()],
  build: {
    commonjsOptions: {
      include: [/@inovex.de\/elements-react\//, /node_modules\//]
    },
  },
}
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve')
    return {
      ...baseConfig,
      server: {
        open: '/',
      }
    }

  return {
    ...baseConfig,
    base: '/example-projects/react/',
    optimizeDeps: {
      include: ['@inovex.de/elements-react']
    }
  }
})
