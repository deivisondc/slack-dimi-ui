import loginService from '@/services/modules/loginService';

export default {
  namespaced: true,
  state: {
    token: null,
    userId: null,
  },
  getters: {
    token: state => state.token,
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
        token: localStorage.getItem('token'),
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
  mutations: {
    authUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.user._id;

      setTimeout(() => {
        state.token = null;
        state.userId = null;
      }, payload.expiresAt);
    },
    deauthUser(state) {
      state.token = null;
      state.userId = null;
    },
  },
};
