import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import Currency from './filters/currency';
import Date from './filters/date';
import './bus';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.filter('currency', Currency);
Vue.filter('date', Date);
axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const vm = this;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    axios.$http.post(api, vm.user).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
