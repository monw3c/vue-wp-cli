import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations.js';
import * as actions from './actions.js';
import * as getters from './getters.js';
import createLogger from 'vuex/dist/logger'; // Vuex 自带一个日志插件用于一般的调试

const debug = process.env.NODE_ENV !== 'production';
Vue.use(Vuex);
Vue.config.debug = debug;

export default new Vuex.Store({
  // modules: {

  // },
  state,
  mutations,
  actions,
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
