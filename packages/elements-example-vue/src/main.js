import { createApp } from 'vue';
import { addIcons } from '@inovex.de/elements/dist/collection/util/icons';
import { ICON_PATHS } from '@inovex.de/elements/dist/inovex-elements/ino-icon/index.esm.js';
import App from './App.vue'

addIcons(ICON_PATHS); // c) (only needed if you want to use our icons)

const app = createApp(App);
app.mount('#app');
