import * as types from './mutations-type.js'

const mutations = {
  [types.GET_SEARCH_LIST](state, searchList) {
    state.searchList = searchList
  }
}

export default mutations
