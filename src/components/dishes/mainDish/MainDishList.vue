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
import ListLayout from '@/components/layout/ListLayout.vue';

export default {
  components: {
    AppListLayout: ListLayout,
  },
  data() {
    return {
      formRoutes: {
        new: '/dishes/mainDish/new',
        edit: '/dishes/mainDish/edit',
      },
      dataTable: [],
      columns: [{}],
    };
  },
};
</script>

<style scoped>

</style>
