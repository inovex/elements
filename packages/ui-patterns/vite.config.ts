import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        'my-pattern-a': 'src/patterns/my-pattern-a/MyPatternA.tsx',
      },
      output: {
        entryFileNames: `[name].js`, 
        chunkFileNames: `[name].js`, 
      },
    },
  },
});
