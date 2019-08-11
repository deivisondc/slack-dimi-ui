<template>
  <base-list-layout
    :title="'Saladas'"
    :sub-title="'Listagem de todas as saladas cadastradas'"
    :data-table="dataTable"
    :columns="columns"
    :showButtonsCell="true"
    @newRegister="newSalad"
    @editRegister="editSalad"
    @deleteRegister="deleteSalad"
  />
</template>

<script>
import BaseListLayout from '@/components/layout/BaseListLayout';

import saladService from '@/services/modules/saladService';

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
    this.getAllSalads();
  },
  methods: {
    getAllSalads() {
      saladService.all()
        .then((res) => {
          this.dataTable = res.data.result;
        });
    },
    newSalad() {
      this.$router.push({ name: 'SaladNew', params: { action: 'new' } });
    },
    editSalad(salad) {
      this.$router.push({ name: 'SaladEdit', params: { action: 'edit', id: salad._id } });
    },
    deleteSalad(salad) {
      saladService.delete(salad._id)
        .then(() => {
          this.getAllSalads();
        })
        .catch(err => console.log(err));
    },
  },
};
</script>

<style scoped>

</style>
