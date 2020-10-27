import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { CLEAR_TOKEN } from '@/store/mutationTypes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ 'pages/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ 'pages/About')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 路由变化时中断当前未完成的ajax请求
  store.commit(CLEAR_TOKEN);
  next()
})


export default router
