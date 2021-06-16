import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import store from './store';
import AOS from 'aos'
import 'aos/dist/aos.css'

import Routes from './routes';

// Store  Mutation
import { CHECK_AUTH } from './store/actions.type';
// Api Services
import ApiService from './services/api.services';
// Error Filter
import ErrorFilter from "./services/error.filter";


// Filters
Vue.filter("error", ErrorFilter);


// Initialize Api
ApiService.init();
const router =new VueRouter({
  routes:Routes,
  mode:'history'
});

router.beforeEach((to, from, next) => 
  Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.forceUpdate;






export const bus =new Vue();
new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  store,
  created () {
    AOS.init()
}
})
