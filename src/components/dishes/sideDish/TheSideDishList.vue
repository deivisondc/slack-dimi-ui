<template>
  <base-list-layout
    :title="'Acompanhamento'"
    :sub-title="'Listagem de todos os acompanhamentos cadastrados'"
    :data-table="dataTable"
    :columns="columns"
    :form-routes="formRoutes"
    :showButtonsCell="true"
    :deleteFunction="deleteSideDish"
  />
</template>

<script>
import BaseListLayout from '@/components/layout/BaseListLayout';

import sideDishService from '@/services/modules/sideDishService';

export default {
  components: {
    BaseListLayout,
  },
  data() {
    return {
      formRoutes: {
        new: '/dishes/sideDish/new',
        edit: '/dishes/sideDish/edit',
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
    this.getAllSideDishes();
  },
  methods: {
    getAllSideDishes() {
      sideDishService.all()
        .then((res) => {
          this.dataTable = res.data.result;
        })
        .catch(err => console.log(err));
    },
    deleteSideDish(id) {
      sideDishService.delete(id)
        .then(() => {
          this.getAllSideDishes();
        })
        .catch(err => console.log(err));
    },
  },
};
</script>

<style scoped>

</style>
