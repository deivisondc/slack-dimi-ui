import Vue from 'vue';
import Vuex from 'vuex';
import loginService from '@/services/modules/loginService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    idToken: null,
    userId: null,
  },
  mutations: {
    authUser(state, payload) {
      state.idToken = payload.idToken;
      state.userId = payload.userId;

      setTimeout(() => {
        state.idToken = null;
        state.userId = null;
      }, payload.expiresAt);
    },
    deauthUser(state) {
      state.idToken = null;
      state.userId = null;
    },
  },
  actions: {
    login({ commit }, payload) {
      loginService.login(payload)
        .then((res) => {
          commit('authUser', res.data);

          const expireDate = new Date(new Date().getTime() + res.data.expiresAt);

          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user_id', res.data.userId);
          localStorage.setItem('expire_date', expireDate);
        })
        .catch(err => console.log(err));
    },
    autoLogin({ commit }) {
      if (!localStorage.getItem('token')) return;
      if (!localStorage.getItem('user_id')) return;
      if (!localStorage.getItem('expire_date')) return;
      if (new Date() <= localStorage.getItem('expire_date')) return;

      commit('authUser', {
        idToken: localStorage.getItem('token'),
        userId: localStorage.getItem('user_id'),
        expiresAt: localStorage.getItem('expire_date'),
      });
    },
    logout({ commit }) {
      commit('deauthUser');

      localStorage.removeItem('token');
      localStorage.removeItem('user_id');
      localStorage.removeItem('expire_date');
    },
  },
  getters: {

  },
});
