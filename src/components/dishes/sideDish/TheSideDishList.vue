<template>
  <base-list-layout
    :title="'Acompanhamento'"
    :sub-title="'Listagem de todos os acompanhamentos cadastrados'"
    :data-table="dataTable"
    :columns="columns"
    :showButtonsCell="true"
    @newRegister="newSideDish"
    @editRegister="editSideDish"
    @deleteRegister="deleteSideDish"
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
    newSideDish() {
      this.$router.push({ name: 'SideDishNew', params: { action: 'new' } });
    },
    editSideDish(sideDish) {
      this.$router.push({ name: 'SideDishEdit', params: { action: 'edit', id: sideDish._id } });
    },
    deleteSideDish(sideDish) {
      sideDishService.delete(sideDish._id)
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
