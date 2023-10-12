import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import packageJson from './package.json'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{ src: 'src/patterns/**/**/*.html', dest: 'patterns-html' }],
    }),
    dts({
      outDir: 'dist/types',
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Ui-Patterns',
      fileName: 'ui-patterns',
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: Object.keys(packageJson.peerDependencies).reduce((prev, current) => {
          prev[current] = current
          return prev
        }, {} as Record<string, string>),
        output: {
          globals: Object.keys(packageJson.peerDependencies).reduce((prev, current) => {
            prev[current] = current
            return prev
          }, {} as Record<string, string>),
        },
      },
    },
  },
});
