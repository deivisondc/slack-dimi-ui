<template>
  <app-list-layout
    :title="'Cardápio'"
    :sub-title="'Listagem do cardápio por dias da semana'"
    :data-table="dataTable"
    :columns="columns"
    :form-route="formRoute"
    :showFilter="true"
    :filterFunction="applyFilter">

    <template slot="secondaryFilter">
      <el-row>
        <el-radio-group v-model="selectedWeekDayFilter">
          <el-badge :value="1" class="item" type="primary" :hidden="!filterResults">
            <el-radio-button size="small" label="1">Segunda-feira</el-radio-button>
          </el-badge>
          <el-badge :value="1" class="item" type="primary" hidden>
            <el-radio-button size="small" label="2">Terça-feira</el-radio-button>
          </el-badge>
          <el-badge :value="2" class="item" type="primary" :hidden="!filterResults">
            <el-radio-button size="small" label="3">Quarta-feira</el-radio-button>
          </el-badge>
          <el-badge :value="3" class="item" type="primary" :hidden="!filterResults">
            <el-radio-button size="small" label="4">Quinta-feira</el-radio-button>
          </el-badge>
          <el-badge :value="1" class="item" type="primary" hidden>
            <el-radio-button size="small" label="5">Sexta-feira</el-radio-button>
          </el-badge>
        </el-radio-group>
      </el-row>
    </template>
  </app-list-layout>
</template>

<script>
import ListLayout from '../layout/ListLayout.vue';

export default {
  components: {
    AppListLayout: ListLayout,
  },
  data() {
    return {
      dataTable: [
        {
          weekday: 'Segunda-feira',
          menuItem: 'Churrasco com medalhão de frango fritas e vinagrete'
        }
      ],
      columns: [
        {
          name: 'Prato',
          value: 'menuItem'
        },
      ],
      formRoute: '/cadastro/cardapio/new',
      selectedWeekDayFilter: 1,
      filterResults: '',
    };
  },
  methods: {
    applyFilter(filterValue) {
      this.filterResults = filterValue;
    }
  }
};
</script>

<style scoped>
  .el-badge >>> sup {
    right: 20px !important;
  }
</style>
