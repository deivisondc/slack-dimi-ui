<template>
  <app-list-layout
    :title="'Saladas'"
    :sub-title="'Listagem de todas as saladas cadastradas'"
    :data-table="dataTable"
    :columns="columns"
    :form-routes="formRoutes"
    :showButtonsCell="true"
    :deleteFunction="deleteSalad"
  />
</template>

<script>
import ListLayout from '@/components/layout/ListLayout.vue';

import saladService from '@/services/modules/saladService';

export default {
  components: {
    AppListLayout: ListLayout,
  },
  data() {
    return {
      formRoutes: {
        new: '/dishes/salad/new',
        edit: '/dishes/salad/edit',
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
    this.getAllSalads();
  },
  methods: {
    getAllSalads() {
      saladService.all()
        .then((res) => {
          this.dataTable = res.data.result;
        });
    },
    deleteSalad(id) {
      saladService.delete(id)
        .then(() => {
          this.getAllSalads();
        })
        .catch(err => console.log(err));
    },
  },
};
</script>

<style scoped>

</style>
