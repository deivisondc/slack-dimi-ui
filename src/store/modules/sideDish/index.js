import sideDishService from '@/services/modules/sideDishService';
import router from '@/router';

export default {
  namespaced: true,
  state: {
    sideDishList: [],
  },
  getters: {
    sideDishList: state => state.sideDishList,
    sideDishById(state) {
      return id => state.sideDishList.find(sideDish => sideDish._id === id);
    },
  },
  actions: {
    fetchSideDishList({ commit }) {
      sideDishService.all()
        .then((res) => {
          commit('fetchSideDishList', res.data.result);
        })
        .catch(err => console.log(err));
    },
    saveSideDish(context, { sideDish, operation }) {
      if (operation === 'edit') {
        sideDishService.update(sideDish._id, sideDish)
          .then(() => {
            router.push({ name: 'SideDishList' });
          })
          .catch(err => console.log(err));
      } else {
        sideDishService.create(sideDish)
          .then(() => {
            router.push({ name: 'SideDishList' });
          })
          .catch(err => console.log(err));
      }
    },
    deleteSideDish({ dispatch }, sideDish) {
      sideDishService.delete(sideDish._id)
        .then(() => {
          dispatch('fetchSideDishList');
        })
        .catch(err => console.log(err));
    },
  },
  mutations: {
    fetchSideDishList(state, newSideDishList) {
      state.sideDishList = newSideDishList;
    },
  },
};
