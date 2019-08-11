<template>
  <base-list-layout
    :title="'Prato Principal'"
    :sub-title="'Listagem de todos os pratos principais cadastrados'"
    :data-table="dataTable"
    :columns="columns"
    :showButtonsCell="true"
    @newRegister="newMainDish"
    @editRegister="editMainDish"
    @deleteRegister="deleteMainDish"
  />
</template>

<script>
import BaseListLayout from '@/components/layout/BaseListLayout';

import mainDishService from '@/services/modules/mainDishService';

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
    this.getAllMainDishes();
  },
  methods: {
    getAllMainDishes() {
      mainDishService.all()
        .then((res) => {
          this.dataTable = res.data.result;
        })
        .catch(err => console.log(err));
    },
    newMainDish() {
      this.$router.push({ name: 'MainDishNew', params: { action: 'new' } });
    },
    editMainDish(mainDish) {
      this.$router.push({ name: 'MainDishEdit', params: { action: 'edit', id: mainDish._id } });
    },
    deleteMainDish(mainDish) {
      mainDishService.delete(mainDish._id)
        .then(() => {
          this.getAllMainDishes();
        })
        .catch(err => console.log(err));
    },
  },
};
</script>

<style scoped>

</style>
