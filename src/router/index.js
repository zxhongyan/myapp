import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/module/home'
import find from '@/components/module/find'
import order from '@/components/module/order'
import my from '@/components/module/my'
import detail from '@/components/module/detail'

Vue.use(Router)

export default new Router({
  // 直接根据路由引入样式
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/detail/:id',
      component: detail
    },
  ]
})
