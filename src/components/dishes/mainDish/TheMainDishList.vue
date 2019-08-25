<template>
  <base-list-layout
    :title="'Prato Principal'"
    :sub-title="'Listagem de todos os pratos principais cadastrados'"
    :data-table="mainDishList"
    :columns="columns"
    :showButtonsCell="true"
    @newRegister="newMainDish"
    @editRegister="editMainDish"
    @deleteRegister="deleteMainDish"
  />
</template>

<script>
import { mapGetters } from 'vuex';

import BaseListLayout from '@/components/layout/BaseListLayout';

export default {
  components: {
    BaseListLayout,
  },
  data() {
    return {
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
  computed: {
    ...mapGetters('mainDish', ['mainDishList']),
  },
  methods: {
    getAllMainDishes() {
      this.$store.dispatch('mainDish/fetchMainDishList');
    },
    newMainDish() {
      this.$router.push({ name: 'MainDishNew', params: { action: 'new' } });
    },
    editMainDish(mainDish) {
      this.$router.push({ name: 'MainDishEdit', params: { action: 'edit', id: mainDish._id } });
    },
    deleteMainDish(mainDish) {
      this.$store.dispatch('mainDish/deleteMainDish', mainDish);
    },
  },
};
</script>

<style scoped>

</style>
