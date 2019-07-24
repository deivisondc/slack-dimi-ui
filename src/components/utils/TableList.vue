<template>
  <div>
    <el-table
      :data="dataTable"
      stripe
    >
      <el-table-column
        v-for="column in columns"
        :key="column.name"
        :prop="column.value"
        :label="column.name"
      />
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
};
</script>

<style scoped>

</style>
