import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    authenticated: false
  },
  mutations: {
    setAuth: (state, auth) => state.authenticated = auth
  },
});
