<template>
  <base-list-layout
    :title="'Cardápio'"
    :sub-title="'Listagem do cardápio por dias da semana'"
    :data-table="filterMenuByWeekday"
    :columns="columns"
    :form-routes="formRoutes"
    :showFilter="true"
    :filterFunction="applyFilter"
    :showButtonsCell="true"
    :showCopyButton="true"
    :deleteFunction="deleteMenu">

    <template slot="secondaryFilter">
      <el-row>
        <el-radio-group v-model="selectedWeekdayFilter">
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
  </base-list-layout>
</template>

<script>
import lodash from 'lodash';

import BaseListLayout from '@/components/layout/BaseListLayout';

import menuService from '@/services/modules/menuService';
import mainDishService from '@/services/modules/mainDishService';
import sideDishService from '@/services/modules/sideDishService';
import saladService from '@/services/modules/saladService';

export default {
  components: {
    BaseListLayout,
  },
  data() {
    return {
      dataTable: [],
      columns: [
        {
          name: 'Prato',
          value: 'fullDescription',
        },
      ],
      mainDishList: [],
      sideDishList: [],
      saladList: [],
      selectedWeekdayFilter: 1,
      filterResults: null,
      filteredDataTable: null,
    };
  },
  computed: {
    formRoutes() {
      return {
        new: `/menu/new?weekday=${this.selectedWeekdayFilter}`,
        edit: '/menu/edit',
        copy: '/menu/copy',
      };
    },
    filterMenuByWeekday() {
      const copyDataTable = this.filteredDataTable || this.dataTable;
      return copyDataTable.filter(item => item.weekday === parseInt(this.selectedWeekdayFilter, 10));
    },
  },
  created() {
    this.resetFilterVariables();
    if (this.$route.query.weekday) {
      this.selectedWeekdayFilter = this.$route.query.weekday;
    } else {
      const dayOfWeek = new Date().getDay();
      this.selectedWeekdayFilter = dayOfWeek >= 1 && dayOfWeek <= 5 ? dayOfWeek : 1;
    }

    this.getAllMenus();
  },
  methods: {
    async getAllMenus() {
      await this.getAllMainDishes();
      await this.getAllSideDishes();
      await this.getAllSalads();
      menuService.all()
        .then((res) => {
          this.dataTable = res.data.result;

          this.dataTable.forEach((el) => {
            el.mainDishDescription = lodash.find(this.mainDishList, (o => o._id === el.main_dish_id)).description;

            el.fullDescription = `${el.mainDishDescription} com <`;

            let first = true;
            el.side_dishes.forEach((sideDishId) => {
              const { description } = lodash.find(this.sideDishList, (o => o._id === sideDishId));
              el.fullDescription += first ? description : ` OU ${description}`;
              first = false;
            });

            el.fullDescription += '> + <';

            first = true;
            el.salads.forEach((saladId) => {
              const { description } = lodash.find(this.saladList, (o => o._id === saladId));
              el.fullDescription += first ? description : ` OU ${description}`;
              first = false;
            });

            el.fullDescription += '>';
          });
        })
        .catch(err => console.log(err));
    },
    getAllMainDishes() {
      return mainDishService.all()
        .then((res) => {
          this.mainDishList = res.data.result;
        })
        .catch(err => console.log(err));
    },
    getAllSideDishes() {
      return sideDishService.all()
        .then((res) => {
          this.sideDishList = res.data.result;
        })
        .catch(err => console.log(err));
    },
    getAllSalads() {
      return saladService.all()
        .then((res) => {
          this.saladList = res.data.result;
        })
        .catch(err => console.log(err));
    },
    deleteMenu(id) {
      menuService.delete(id)
        .then(() => {
          this.getAllMenus();
        })
        .catch(err => console.log(err));
    },
    applyFilter(filterValue) {
      if (!filterValue) return this.resetFilterVariables();
      this.filteredDataTable = this.dataTable.filter(
        item => item.fullDescription.toLowerCase().includes(filterValue.toLowerCase()),
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
