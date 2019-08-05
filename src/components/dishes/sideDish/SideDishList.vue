<template>
  <app-list-layout
    :title="'Acompanhamento'"
    :sub-title="'Listagem de todos os acompanhamentos cadastrados'"
    :data-table="dataTable"
    :columns="columns"
    :form-routes="formRoutes"
    :showButtonsCell="true"
  />
</template>

<script>
import ListLayout from '@/components/layout/ListLayout.vue';

export default {
  components: {
    AppListLayout: ListLayout,
  },
  data() {
    return {
      formRoutes: {
        new: '/dishes/sideDish/new',
        edit: '/dishes/sideDish/edit',
      },
      dataTable: [
        {
          _id: 123,
          name: 'joao',
          address: 'teste xpto',
        },
      ],
      columns: [
        {
          name: 'Primeira Coluna',
          value: 'name',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
