import * as types from './mutations-types';
// e.g
// ...mapActions(['getSearchList'])
// this.getSearchList(query)
export const getSearchList = function ({ commit }, query) {
  commit(types.GET_SEARCH_LIST, query);
};

