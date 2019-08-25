<template>
  <base-list-layout
    :title="'Acompanhamento'"
    :sub-title="'Listagem de todos os acompanhamentos cadastrados'"
    :data-table="sideDishList"
    :columns="columns"
    :showButtonsCell="true"
    @newRegister="newSideDish"
    @editRegister="editSideDish"
    @deleteRegister="deleteSideDish"
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
    this.getAllSideDishes();
  },
  computed: {
    ...mapGetters('sideDish', ['sideDishList']),
  },
  methods: {
    getAllSideDishes() {
      this.$store.dispatch('sideDish/fetchSideDishList');
    },
    newSideDish() {
      this.$router.push({ name: 'SideDishNew', params: { action: 'new' } });
    },
    editSideDish(sideDish) {
      this.$router.push({ name: 'SideDishEdit', params: { action: 'edit', id: sideDish._id } });
    },
    deleteSideDish(sideDish) {
      this.$store.dispatch('sideDish/deleteSideDish', sideDish);
    },
  },
};
</script>

<style scoped>

</style>
