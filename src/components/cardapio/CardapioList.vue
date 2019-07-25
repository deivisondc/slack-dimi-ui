<template>
  <app-list-layout
    :title="'Cardápio'"
    :sub-title="'Listagem dos cardápios por dias da semana'"
    :data-table="dataTable"
    :columns="columns"
    :form-route="formRoute"
  />
</template>

<script>
import ListLayout from '../layout/ListLayout.vue';

export default {
  components: {
    AppListLayout: ListLayout,
  },
  data() {
    return {
      dataTable: [{}],
      columns: [],
      formRoute: '/cadastro/cardapio/new',
    };
  },
};
</script>

<style scoped>

</style>
