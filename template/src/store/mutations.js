import * as types from './mutations-types';

const mutations = {
  [types.GET_SEARCH_LIST](state, searchList) {
    state.searchList = searchList;
  },
};

export default mutations;
