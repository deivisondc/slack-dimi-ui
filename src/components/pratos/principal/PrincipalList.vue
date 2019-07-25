<template>
  <app-list-layout
    :title="'Prato Principal'"
    :sub-title="'Listagem de todos os pratos principais cadastrados'"
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
      dataTable: [{}],
      columns: [],
      formRoute: '/cadastro/prato/principal/new',
    };
  },
};
</script>

<style scoped>

</style>
