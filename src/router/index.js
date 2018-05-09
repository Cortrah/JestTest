import Vue from 'vue'
import Router from 'vue-router'
import MadLib from '@/components/MadLib'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MadLib',
      component: MadLib
    }
  ]
})
