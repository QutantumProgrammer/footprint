import Vue from 'vue'
import Router from 'vue-router'
import MyPictures from '@/eva/components/MyPictures'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyPictures',
      component: MyPictures
    }
  ]
})
