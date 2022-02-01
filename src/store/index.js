import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false
  },
  mutations: {
    setIsLoading(state, status) {
      state.isLoading = status;
    }
  },
  actions: {
  },
  modules: {
  }
})
