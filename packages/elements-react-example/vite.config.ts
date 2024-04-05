import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/example-projects/react/',
  plugins: [react()],
  optimizeDeps: {
    include: ['@inovex.de/elements-react'],
  },
});
