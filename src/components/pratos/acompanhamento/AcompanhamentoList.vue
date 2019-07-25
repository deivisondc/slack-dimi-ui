<template>
  <app-list-layout
    :title="'Acompanhamento'"
    :sub-title="'Listagem de todas os acompanhamentos cadastrados'"
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
      dataTable: [
        {},
      ],
      columns: [
        {},
      ],
      formRoute: '/cadastro/prato/acompanhamento/new',
    };
  },
};
</script>

<style scoped>

</style>
