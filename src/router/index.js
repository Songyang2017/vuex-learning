import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aPage from '@/components/aPage'
import bPage from '@/components/bPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/aPage',
          component: aPage
        },
        {
          path: '/bPage',
          component: bPage
        }
      ]
    }
  ]
})
