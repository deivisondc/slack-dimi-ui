<template>
  <app-list-layout
    :title="'Saladas'"
    :sub-title="'Listagem de todas as saladas cadastradas'"
    :data-table="dataTable"
    :columns="columns"
    :form-route="formRoute"
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
      formRoute: '/cadastro/prato/salada/new',
      dataTable: [
        {
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
