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
      type="success"
      round
      @click="$emit('newRegister')"
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

    <base-table-list
      :data-table="dataTable"
      :columns="columns"
      :showButtonsCell="showButtonsCell"
      :showCopyButton="showCopyButton"
      @editRegister="$emit('editRegister', $event)"
      @copyRegister="$emit('copyRegister', $event)"
      @deleteRegister="$emit('deleteRegister', $event)"
    />
  </el-card>
</template>

<script>
import BaseTableList from '@/components/utils/BaseTableList';

export default {
  components: {
    BaseTableList,
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
    showFilter: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      filterValue: null,
    };
  },
  methods: {
    filter() {
      this.$emit('filter', this.filterValue);
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
