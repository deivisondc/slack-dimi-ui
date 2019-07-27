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
        <el-table-column
          v-if="showButtonsCell"
          label=""
          width="150">
          <template slot-scope="scope">
            <div class="buttons-cell-align-right">
              <el-button icon="el-icon-edit" class="btn-edit" circle size="small"/>
              <el-button icon="el-icon-copy-document" class="btn-copy" circle size="small" v-if="showCopyButton"/>
              <el-button icon="el-icon-delete" class="btn-delete" circle size="small"/>
            </div>
          </template>
        </el-table-column>
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
    showButtonsCell: {
      type: Boolean,
      required: false,
      default: false,
    },
    showCopyButton: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    showTable() {
      return this.dataTable.length > 0 && this.columns.length > 0;
    },
  },
};
</script>

<style scoped>
  .buttons-cell-align-right {
    text-align: right
  }

  .btn-delete:hover {
    color: white;
    background-color: #dd6161;
    border-color: #dd6161;
  }

  .btn-edit:hover {
    color: white;
    background-color: #3a8ee6;
    border-color: #3a8ee6;
  }

  .btn-copy:hover {
    color: white;
    background-color: #5daf34;
    border-color: #5daf34;
  }
</style>
