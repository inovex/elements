import './global.css'
import { createApp } from 'vue';
import { InoElementsVue } from '@inovex.de/elements-vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(InoElementsVue);
app.use(router);

app.config.productionTip = false

app.mount('#app');
