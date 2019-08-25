import mainDishService from '@/services/modules/mainDishService';
import router from '@/router';

export default {
  namespaced: true,
  state: {
    mainDishList: [],
  },
  getters: {
    mainDishList: state => state.mainDishList,
    mainDishById(state) {
      return id => state.mainDishList.find(mainDish => mainDish._id === id);
    },
  },
  actions: {
    fetchMainDishList({ commit }) {
      mainDishService.all()
        .then((res) => {
          commit('fetchMainDishList', res.data.result);
        })
        .catch(err => console.log(err));
    },
    saveMainDish(context, { mainDish, operation }) {
      if (operation === 'edit') {
        mainDishService.update(mainDish._id, mainDish)
          .then(() => {
            router.push({ name: 'MainDishList' });
          })
          .catch(err => console.log(err));
      } else {
        mainDishService.create(mainDish)
          .then(() => {
            router.push({ name: 'MainDishList' });
          })
          .catch(err => console.log(err));
      }
    },
    deleteMainDish({ dispatch }, mainDish) {
      mainDishService.delete(mainDish._id)
        .then(() => {
          dispatch('fetchMainDishList');
        })
        .catch(err => console.log(err));
    },
  },
  mutations: {
    fetchMainDishList(state, newMainDishList) {
      state.mainDishList = newMainDishList;
    },
  },
};
