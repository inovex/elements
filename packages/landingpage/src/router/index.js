import WelcomeIndex from '@/views/WelcomeIndex.vue'
import { createRouter, createWebHashHistory } from "vue-router";
import Workshop from "@/views/Workshop.vue";

const routes = [
  {
    path: '/',
    name: 'WelcomeIndex',
    component: WelcomeIndex
  },
  {
    path: '/workshop/:id?',
    name: 'Workshop',
    component: Workshop
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
