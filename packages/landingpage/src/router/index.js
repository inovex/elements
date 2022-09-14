import WelcomeIndex from '@/views/WelcomeIndex.vue'
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'WelcomeIndex',
    component: WelcomeIndex
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
