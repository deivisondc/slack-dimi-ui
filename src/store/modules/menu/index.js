import lodash from 'lodash';
import menuService from '@/services/modules/menuService';
import router from '@/router';

export default {
  namespaced: true,
  state: {
    menuList: [],
    filteredMenuList: null,
    filterResults: {},
  },
  getters: {
    menuList: state => state.menuList,
    filteredMenuList: state => state.filteredMenuList,
    filterResults: state => state.filterResults,
    filterMenuByWeekday: state => selectedWeekday => {
      const copyDataTable = state.filteredMenuList || state.menuList;
      return copyDataTable.filter(item => item.weekday === parseInt(selectedWeekday, 10));
    },
    menuById: state => id => state.menuList.find(menu => menu._id === id),
  },
  actions: {
    async fetchMenuList({ commit, dispatch, rootState }) {
      await dispatch('mainDish/fetchMainDishList', {}, { root: true }); // esta dando problema nesse await (nao ta esperando)
      menuService.all()
        .then((res) => {
          const menuList = res.data.result;

          menuList.forEach((el) => {
            const { mainDishList } = rootState.mainDish;
            const mainDishDescription = lodash.find(mainDishList, (o => o._id === el.main_dish_id)).description;
            const sideDishesCounter = el.side_dishes.length;
            const saladsCounter = el.salads.length;

            el.fullDescription = `${mainDishDescription} `;
            el.fullDescription += `com ${sideDishesCounter} acompanhamentos e ${saladsCounter} saladas`;
          });

          commit('fetchMenuList', menuList);
        })
        .catch(err => console.log(err));
    },
    applyFilter({ getters, commit }, filterValue) {
      if (!filterValue) {
        commit('resetFilterVariables');
      } else {
        const filteredValues = getters.menuList.filter(
          item => item.fullDescription.toLowerCase().includes(filterValue.toLowerCase()),
        );
  
        commit('updateFilteredMenuList', filteredValues);
        commit('updateFilteredMenuResults', filteredValues);
      }
    },
    saveMenu(context, { menu, operation }) {
      if (operation === 'edit') {
        menuService.update(menu._id, menu)
          .then(() => {
            router.push({ name: 'MenuList', query: { weekday: menu.weekday } });
          })
          .catch(err => console.log(err));
      } else {
        menuService.create(menu)
          .then(() => {
            router.push({ name: 'MenuList', query: { weekday: menu.weekday } });
          })
          .catch(err => console.log(err));
      }
    },
    deleteMenu({ dispatch }, menu) {
      menuService.delete(menu._id)
        .then(() => {
          dispatch('fetchMenuList');
        })
        .catch(err => console.log(err));
    },
  },
  mutations: {
    fetchMenuList(state, newMenuList) {
      state.menuList = newMenuList;
    },
    updateFilteredMenuList(state, newFilteredMenuList) {
      state.filteredMenuList = newFilteredMenuList;
    },
    updateFilteredMenuResults(state, newFilteredMenuList) {
      for (let i = 1; i <= 5; i += 1) {
        state.filterResults[i] = newFilteredMenuList.filter(item => item.weekday === i).length;
      }
    },
    resetFilterVariables(state) {
      state.filteredMenuList = null;
      state.filterResults = {};
    }
  },
};
