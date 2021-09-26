import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import { CLEAR_AJAXING } from '@/store/actionTypes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ 'pages/Home')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  // 路由变化时中断当前未完成的ajax请求
  store.commit(CLEAR_AJAXING);
  next();
});

export default router;
