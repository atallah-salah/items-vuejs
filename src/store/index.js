import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentItem: null
  },
  mutations: {
    setCurrentItem(state, payload) {
      state.currentUser = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
