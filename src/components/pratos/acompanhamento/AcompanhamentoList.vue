<template>
  <app-list-layout
    :title="'Acompanhamento'"
    :sub-title="'Listagem de todas os acompanhamentos cadastrados'"
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
      formRoutes: {
        new: '/cadastro/prato/acompanhamento/new',
        edit: '/cadastro/prato/acompanhamento/edit/',
      },
    };
  },
};
</script>

<style scoped>

</style>
