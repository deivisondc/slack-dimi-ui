<template>
  <div>
    <el-table
      empty-text="Nenhum registro encontrado"
      :data="dataTable"
      ref="myTable"
      stripe
    >
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
            <el-button
              icon="el-icon-edit"
              class="btn-edit"
              circle
              size="small"
              @click.stop="doEditData(scope.row)"/>
            <el-button
              icon="el-icon-copy-document"
              class="btn-copy"
              circle
              size="small"
              @click.stop="doCopyData(scope.row)"
              v-if="showCopyButton"/>
            <el-button
              icon="el-icon-delete"
              class="btn-delete"
              circle
              size="small"
              @click.stop="dialogVisible = true"/>
          </div>

          <el-dialog
            title="Confirmação"
            :visible.sync="dialogVisible"
            :close-on-click-modal="false"
            width="30%"
          >
          <span>Tem certeza que deseja excluir este registro?</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Não</el-button>
            <el-button type="primary" @click="doDeleteData(scope.row)">Sim</el-button>
          </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <el-pagination
      layout="prev, pager, next"
      :page-size=10
      :total=10
      :hide-on-single-page=false
    />
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
      default: false,
    },
    deleteFunction: {
      type: Function,
      required: false,
    },
    formRoutes: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    doEditData(data) {
      if (data._id && this.formRoutes.edit) {
        this.goTo(`${this.formRoutes.edit}/${data._id}`);
      }
    },
    doCopyData(data) {
      if (data._id && this.formRoutes.copy) {
        this.goTo(`${this.formRoutes.copy}/${data._id}`);
      }
    },
    doDeleteData(data) {
      if (data._id && this.deleteFunction) {
        this.deleteFunction(data._id);
      }
      this.dialogVisible = false;
    },
    goTo(route) {
      this.$router.push(route);
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
