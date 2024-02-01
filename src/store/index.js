import { createStore } from 'vuex'


export default createStore({
  state: {
    toasts: [],
    isLoggedIn: false,
    token: null,
    isAdmin: 0
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    token: state => state.token,
    isAdmin: state => state.isAdmin
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
    },
    setIsAdmin(state, value){
      state.isAdmin = value;
    }
  },
  actions: {
  },
  modules: {
  }
})