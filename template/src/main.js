// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/';
import axios from 'axios';
// import 'lib-flexible/flexible';
import dayjs from 'dayjs';

import 'x-m-ui/package/xmui.min.css';
import xmui from 'x-m-ui';

import FastClick from 'fastclick';

Vue.prototype.$day = dayjs;
Vue.use(xmui);
FastClick.attach(document.body);

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
