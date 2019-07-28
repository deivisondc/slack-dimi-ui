<template>
  <app-list-layout
    :title="'Cardápio'"
    :sub-title="'Listagem do cardápio por dias da semana'"
    :data-table="dataTable"
    :columns="columns"
    :form-routes="formRoutes"
    :showFilter="true"
    :filterFunction="applyFilter"
    :showButtonsCell="true"
    :showCopyButton="true">

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
          _id: '123',
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
      selectedWeekDayFilter: 1,
      filterResults: '',
    };
  },
  computed: {
    formRoutes() {
      return {
        new: `/cadastro/cardapio/new?weekDay=${this.selectedWeekDayFilter}`,
        edit: `/cadastro/cardapio/edit`,
        copy: `/cadastro/cardapio/copy`,
      };
    },
  },
  methods: {
    applyFilter(filterValue) {
      this.filterResults = filterValue;
    }
  },
  created() {
    if (this.$route.query.weekDay) {
      this.selectedWeekDayFilter = this.$route.query.weekDay;
    } else {
      let dayOfWeek = new Date().getDay();
      this.selectedWeekDayFilter = dayOfWeek >= 1 && dayOfWeek <= 5 ? dayOfWeek : 1;
    }

  },
};
</script>

<style scoped>
  .el-badge >>> sup {
    right: 20px !important;
  }
</style>
