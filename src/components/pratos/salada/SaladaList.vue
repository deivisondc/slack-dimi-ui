<template>
  <app-list-layout
    :title="'Saladas'"
    :sub-title="'Listagem de todas as saladas cadastradas'"
    :data-table="dataTable"
    :columns="columns"
    :form-routes="formRoutes"
    :showButtonsCell="true"
  />
</template>

<script>
import ListLayout from '../../layout/ListLayout.vue';

export default {
  components: {
    AppListLayout: ListLayout,
  },
  data() {
    return {
      formRoutes: {
        new: '/cadastro/prato/salada/new',
        edit: '/cadastro/prato/salada/edit/',
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
