import Vue from 'vue'
import Router from 'vue-router'
import WelcomeIndex from '@/views/WelcomeIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelcomeIndex',
      component: WelcomeIndex
    }
  ]
})
