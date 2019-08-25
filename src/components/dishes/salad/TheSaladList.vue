<template>
  <base-list-layout
    :title="'Saladas'"
    :sub-title="'Listagem de todas as saladas cadastradas'"
    :data-table="saladList"
    :columns="columns"
    :showButtonsCell="true"
    @newRegister="newSalad"
    @editRegister="editSalad"
    @deleteRegister="deleteSalad"
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
  computed: {
    ...mapGetters('salad', ['saladList']),
  },
  created() {
    this.getAllSalads();
  },
  methods: {
    getAllSalads() {
      this.$store.dispatch('salad/fetchSaladList');
    },
    newSalad() {
      this.$router.push({ name: 'SaladNew', params: { action: 'new' } });
    },
    editSalad(salad) {
      this.$router.push({ name: 'SaladEdit', params: { action: 'edit', id: salad._id } });
    },
    deleteSalad(salad) {
      this.$store.dispatch('salad/deleteSalad', salad);
    },
  },
};
</script>

<style scoped>

</style>
