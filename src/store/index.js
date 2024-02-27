import { createStore } from 'vuex'
import LocalStorage from './localstorage-plugin';


export default createStore({
  plugins: [LocalStorage],
  state: {
    toasts: [],
    isLoggedIn: false,
    isAdmin: 0
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    isAdmin: state => state.isAdmin
  },
  mutations: {
    setLoggedIn(state) {
      state.isLoggedIn = true;
    },
    setLoggedOut(state) {
      state.isLoggedIn = false;
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