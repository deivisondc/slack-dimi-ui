import Vue from 'vue';
import Vuex from 'vuex';
import authentication from '@/store/modules/authentication';
import salad from '@/store/modules/salad';
import sideDish from '@/store/modules/sideDish';
import mainDish from '@/store/modules/mainDish';
import menu from '@/store/modules/menu';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    authentication,
    salad,
    sideDish,
    mainDish,
    menu,
  },
});
