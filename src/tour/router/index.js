import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/tour/components/HomePage'
import Pictures from '@/tour/views/Pictures.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/homepage'},
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/pictures/:id',
      name: 'Pictures',
      component: Pictures
    }
  ]
})
