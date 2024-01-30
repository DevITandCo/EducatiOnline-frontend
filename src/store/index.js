import { createStore } from 'vuex'

export default createStore({
  state: {
    toasts: [],
    isLoggedIn: false
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn
  },
  mutations: {
    addToast(state, toast) {
      state.toasts.push(toast);
    },
    clearToast(state, title) {
      const index = state.toasts.findIndex((toast) => toast.title === title);
      state.toasts.splice(index, 1);
    },
    setLoggedIn(state) {
      state.isLoggedIn = true;
    },
    setLoggedOut(state) {
      state.isLoggedIn = false;
    },
    updateIsLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
  }
  },
  actions: {
  },
  modules: {
  }
})