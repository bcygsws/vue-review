import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// .$mount绑定控制区域
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
