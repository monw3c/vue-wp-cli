{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}
{{#vuex}}
import store from './store/'
{{/vuex}}
import axios from 'axios'

{{#dayjs}}
import dayjs from 'dayjs'  
Vue.prototype.$day = dayjs
{{/dayjs}}

{{#xmui}}
import 'x-m-ui/package/xmui.min.css'  
import xmui from 'x-m-ui'  
Vue.use(xmui)
{{/xmui}}

{{#fastclick}}
import FastClick from 'fastclick'
FastClick.attach(document.body)
{{/fastclick}}

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
