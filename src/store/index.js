import { createStore } from 'vuex'
import LocalStorage from './localstorage-plugin';


export default createStore({
  plugins: [LocalStorage],
  state: {
    toasts: [],
    isLoggedIn: false,
    isAdmin: 0,
    firstName: '',
    lastName: '',
    email:'',
    id:''
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    isAdmin: state => state.isAdmin,
    firstName: state=>state.firstName,
    lastName: state=>state.lastName,
    email: state=>state.email,
    id: state=>state.id
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
    },
    setFirstname(state, value){
      state.firstName=value;
    },
    setLastname(state, value){
      state.lastName=value;
    },
    setEmail(state, value){
      state.email=value;
    },
    setId(state, value){
      state.id=value;
    }
  },
  actions: {
  },
  modules: {
  }
})