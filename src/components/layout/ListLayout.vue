<template>
  <el-card
    class="layout-content"
    shadow="always"
  >
    <el-card class="form-title">
      <h2>{{ title }}</h2>
      <p>{{ subTitle }}</p>
    </el-card>

    <br>
    <el-button
      v-if="formRoute"
      type="success"
      round
      @click="goTo(formRoute)"
    >
      Cadastrar
    </el-button>

    <app-table-list
      :data-table="dataTable"
      :columns="columns"
    />
  </el-card>
</template>

<script>
import TableList from '../utils/TableList.vue';

export default {
  components: {
    AppTableList: TableList,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    dataTable: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    formRoute: {
      type: String,
      default: '',
      required: false,
    },
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
    .form-title {
        margin-top: -35px;
        background-color: darkblue;
        border-radius: 15px;
        color: #fff;
        text-align: left;
        padding: 5px;
    }

    .form-content {
        margin-top: 20px;
        text-align: right;
    }

    .el-card {
        overflow: unset;
    }
</style>
