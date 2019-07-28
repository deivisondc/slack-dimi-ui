<template>
  <app-list-layout
    :title="'Prato Principal'"
    :sub-title="'Listagem de todos os pratos principais cadastrados'"
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
        new: '/cadastro/prato/principal/new',
        edit: '/cadastro/prato/principal/edit',
      },
      dataTable: [],
      columns: [{}],
    };
  },
};
</script>

<style scoped>

</style>
