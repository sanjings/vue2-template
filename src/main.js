import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入公共样式
import './assets/styles/index.scss';

// 按需引入element-ui并配置主题色
import Element from './plugins/Element.js';
import './assets/styles/element-variables.scss';
Vue.use(Element);

// 引入全局过滤器
import * as filters from './filters';
Object.keys(filters).forEach(item => Vue.filter(item, filters[item]));

// 捕获全局promise-reject
window.addEventListener('unhandledrejection', e => {
  if (process.env.NODE_ENV === 'production') {
    e.preventDefault();
    console.log(e);
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
