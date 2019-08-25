import saladService from '@/services/modules/saladService';
import router from '@/router';

export default {
  namespaced: true,
  state: {
    saladList: [],
    saladFormData: {
      _id: null,
      description: '',
    },
  },
  getters: {
    saladList: state => state.saladList,
    saladById(state) {
      return id => state.saladList.find(salad => salad._id === id);
    },
  },
  actions: {
    fetchSaladList({ commit }) {
      saladService.all()
        .then((res) => {
          commit('fetchSaladList', res.data.result);
        });
    },
    saveSalad(context, { salad, operation }) {
      if (operation === 'edit') {
        saladService.update(salad._id, salad)
          .then(() => {
            router.push({ name: 'SaladList' });
          })
          .catch(err => console.log(err));
      } else {
        saladService.create(salad)
          .then(() => {
            router.push({ name: 'SaladList' });
          })
          .catch(err => console.log(err));
      }
    },
    deleteSalad({ dispatch }, salad) {
      saladService.delete(salad._id)
        .then(() => {
          dispatch('fetchSaladList');
        })
        .catch(err => console.log(err));
    },
  },
  mutations: {
    fetchSaladList(state, newSaladList) {
      state.saladList = newSaladList;
    },
  },
};
