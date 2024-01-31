import { createStore } from 'vuex'

export default createStore({
  state: {
    toasts: [],
    isLoggedIn: false,
    token: null
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    token: state => state.token
  },
  mutations: {
    setLoggedIn(state) {
      state.isLoggedIn = true;
    },
    setLoggedOut(state) {
      state.isLoggedIn = false;
    },
    setToken(state, value){
      state.token = value;
      console.log("Token set in Vuex:", state.token);
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