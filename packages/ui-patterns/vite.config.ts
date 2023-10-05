import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'src/patterns/**/*.{html}', dest: 'dist', structured: true }
      ]
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Patterns',
      fileName: (format) => `patterns.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],  // externalize react to avoid bundling it
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
