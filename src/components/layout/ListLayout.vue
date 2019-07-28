<template>
  <el-card
    class="layout-content list-layout"
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

    <template v-if="showFilter">
      <el-row style="padding: 20px;">
        <el-input placeholder="Filtro" v-model="filterValue" class="input-with-select" @change="filter">
          <el-button slot="append" icon="el-icon-search" @click="filter"></el-button>
        </el-input>
      </el-row>
    </template>

    <slot name="secondaryFilter" />

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
    showFilter: {
      type: Boolean,
      required: false,
      default: false,
    },
    filterFunction: {
      type: Function,
      required: false,
    },
  },
  data() {
    return {
      filterValue: null,
    };
  },
  methods: {
    filter() {
      if (this.filterFunction) {
        this.filterFunction(this.filterValue);
      }
    },
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
  .list-layout {
    height: 100%
  }

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
