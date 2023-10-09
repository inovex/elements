import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/example-projects/vue/',
  plugins: [vue()],
  server: {
    port: 4400
  },
});
