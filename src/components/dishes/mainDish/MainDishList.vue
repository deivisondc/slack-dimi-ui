<template>
  <app-list-layout
    :title="'Prato Principal'"
    :sub-title="'Listagem de todos os pratos principais cadastrados'"
    :data-table="dataTable"
    :columns="columns"
    :form-routes="formRoutes"
    :showButtonsCell="true"
    :deleteFunction="deleteMainDish"
  />
</template>

<script>
import ListLayout from '@/components/layout/ListLayout.vue';

import mainDishService from '@/services/modules/mainDishService';

export default {
  components: {
    AppListLayout: ListLayout,
  },
  data() {
    return {
      formRoutes: {
        new: '/dishes/mainDish/new',
        edit: '/dishes/mainDish/edit',
      },
      dataTable: [],
      columns: [
        {
          name: 'Descrição',
          value: 'description',
        },
      ],
    };
  },
  created() {
    this.getAllMainDishes();
  },
  methods: {
    getAllMainDishes() {
      mainDishService.all()
        .then((res) => {
          this.dataTable = res.data.result;
        })
        .catch(err => console.log(err));
    },
    deleteMainDish(id) {
      mainDishService.delete(id)
        .then(() => {
          this.getAllMainDishes();
        })
        .catch(err => console.log(err));
    },
  },
};
</script>

<style scoped>

</style>
