<template>
  <app-list-layout
    :title="'Cardápio'"
    :sub-title="'Listagem do cardápio por dias da semana'"
    :data-table="filterMenuByWeekDay"
    :columns="columns"
    :form-routes="formRoutes"
    :showFilter="true"
    :filterFunction="applyFilter"
    :showButtonsCell="true"
    :showCopyButton="true">

    <template slot="secondaryFilter">
      <el-row>
        <el-radio-group v-model="selectedWeekDayFilter">
          <el-badge :value="filterResults[1]" class="item" type="primary" :hidden="!filterResults[1] > 0">
            <el-radio-button size="small" label="1">
              Segunda-feira
            </el-radio-button>
          </el-badge>
          <el-badge :value="filterResults[2]" class="item" type="primary" :hidden="!filterResults[2] > 0">
            <el-radio-button size="small" label="2">
              Terça-feira
            </el-radio-button>
          </el-badge>
          <el-badge :value="filterResults[3]" class="item" type="primary" :hidden="!filterResults[3] > 0">
            <el-radio-button size="small" label="3">
              Quarta-feira
            </el-radio-button>
          </el-badge>
          <el-badge :value="filterResults[4]" class="item" type="primary" :hidden="!filterResults[4] > 0">
            <el-radio-button size="small" label="4">
              Quinta-feira
            </el-radio-button>
          </el-badge>
          <el-badge :value="filterResults[5]" class="item" type="primary" :hidden="!filterResults[5] > 0">
            <el-radio-button size="small" label="5">
              Sexta-feira
            </el-radio-button>
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
          _id: '1',
          weekday: 1,
          menuItem: 'Churrasco com medalhão de frango fritas e vinagrete',
        },
        {
          _id: '2',
          weekday: 1,
          menuItem: 'Medalhão de frango',
        },
        {
          _id: '3',
          weekday: 1,
          menuItem: 'Frango grelhado',
        },
        {
          _id: '4',
          weekday: 1,
          menuItem: 'Teste',
        },
        {
          _id: '5',
          weekday: 2,
          menuItem: 'Churrasco com medalhão de frango fritas e vinagrete',
        },
        {
          _id: '6',
          weekday: 2,
          menuItem: 'Estrogonofe',
        },
        {
          _id: '7',
          weekday: 3,
          menuItem: 'Churrasco com medalhão de frango fritas e vinagrete',
        },
        {
          _id: '8',
          weekday: 3,
          menuItem: 'Bife Grelhado',
        },
        {
          _id: '9',
          weekday: 3,
          menuItem: 'Frango Parmegiana',
        },
        {
          _id: '10',
          weekday: 3,
          menuItem: 'Teste 2',
        },
        {
          _id: '11',
          weekday: 4,
          menuItem: 'Churrasco com medalhão de frango fritas e vinagrete',
        },
        {
          _id: '12',
          weekday: 4,
          menuItem: 'Panqueca de Queijo',
        },
        {
          _id: '13',
          weekday: 4,
          menuItem: 'Panqueca de Frango',
        },
        {
          _id: '14',
          weekday: 4,
          menuItem: 'Panqueca de Calabresa',
        },
        {
          _id: '15',
          weekday: 4,
          menuItem: 'Teste',
        },
        {
          _id: '16',
          weekday: 4,
          menuItem: 'Teste 2',
        },
        {
          _id: '17',
          weekday: 5,
          menuItem: 'Churrasco com medalhão de frango fritas e vinagrete',
        },
        {
          _id: '18',
          weekday: 5,
          menuItem: 'Medalhão',
        },
        {
          _id: '19',
          weekday: 5,
          menuItem: 'Cupim',
        },
        {
          _id: '20',
          weekday: 5,
          menuItem: 'Frango',
        },
        {
          _id: '21',
          weekday: 5,
          menuItem: 'Teste',
        },
        {
          _id: '22',
          weekday: 5,
          menuItem: 'Teste 2',
        },
      ],
      columns: [
        {
          name: 'Prato',
          value: 'menuItem',
        },
      ],
      selectedWeekDayFilter: 1,
      filterResults: null,
      filteredDataTable: null,
    };
  },
  computed: {
    formRoutes() {
      return {
        new: `/menu/new?weekDay=${this.selectedWeekDayFilter}`,
        edit: '/menu/edit',
        copy: '/menu/copy',
      };
    },
    filterMenuByWeekDay() {
      const copyDataTable = this.filteredDataTable || this.dataTable;
      return copyDataTable.filter(item => item.weekday === parseInt(this.selectedWeekDayFilter, 10));
    },
  },
  created() {
    this.resetFilterVariables();
    if (this.$route.query.weekDay) {
      this.selectedWeekDayFilter = this.$route.query.weekDay;
    } else {
      const dayOfWeek = new Date().getDay();
      this.selectedWeekDayFilter = dayOfWeek >= 1 && dayOfWeek <= 5 ? dayOfWeek : 1;
    }
  },
  methods: {
    applyFilter(filterValue) {
      if (!filterValue) return this.resetFilterVariables();
      this.filteredDataTable = this.dataTable.filter(
        item => item.menuItem.toLowerCase().includes(filterValue.toLowerCase()),
      );

      this.filterResults[1] = this.filteredDataTable.filter(item => item.weekday === 1).length;
      this.filterResults[2] = this.filteredDataTable.filter(item => item.weekday === 2).length;
      this.filterResults[3] = this.filteredDataTable.filter(item => item.weekday === 3).length;
      this.filterResults[4] = this.filteredDataTable.filter(item => item.weekday === 4).length;
      this.filterResults[5] = this.filteredDataTable.filter(item => item.weekday === 5).length;

      return true;
    },
    resetFilterVariables() {
      this.filteredDataTable = null;
      this.filterResults = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };
    },
  },
};
</script>

<style scoped>
  .el-badge >>> sup {
    right: 20px !important;
  }
  .el-badge >>> .el-radio-button__inner{
    border-radius: 0px;
  }
  .el-badge:first-child >>> .el-radio-button__inner{
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .el-badge:last-child >>> .el-radio-button__inner{
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
</style>
