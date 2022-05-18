import { createApp } from 'vue';
import { InoElementsVue } from '@inovex.de/elements-vue';
import App from './App.vue'

const app = createApp(App);
app.use(InoElementsVue);
app.mount('#app');
