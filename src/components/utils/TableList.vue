<template>
  <div>
    <el-table
      :data="dataTable"
      stripe
    >
      <template v-if="!showTable">
        <el-table-column>Nenhum registro encontrado</el-table-column>
      </template>
      <template v-if="showTable">
        <el-table-column
          v-for="column in columns"
          :key="column.name"
          :prop="column.value"
          :label="column.name"
        />
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    dataTable: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },
  computed: {
    showTable() {
      return this.dataTable.length > 0 && this.columns.length > 0;
    },
  },
};
</script>

<style scoped>

</style>
