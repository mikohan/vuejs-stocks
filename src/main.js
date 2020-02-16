import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import { routes } from './routes';
import store from './store/store';
import SlideUpDown from 'vue-slide-up-down';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://river-module-204813.firebaseio.com/';
Vue.component('slide-up-down', SlideUpDown);


Vue.filter('currency', value => {
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
