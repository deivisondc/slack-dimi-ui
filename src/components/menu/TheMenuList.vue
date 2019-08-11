<template>
  <base-list-layout
    :title="'Cardápio'"
    :sub-title="'Listagem do cardápio por dias da semana'"
    :data-table="filterMenuByWeekday"
    :columns="columns"
    :showFilter="true"
    :showButtonsCell="true"
    :showCopyButton="true"
    @newRegister="newMenu"
    @editRegister="editMenu"
    @copyRegister="copyMenu"
    @deleteRegister="deleteMenu"
    @filter="applyFilter">

    <template slot="secondaryFilter">
      <el-row>
        <el-radio-group v-model="selectedWeekdayFilter">
          <el-badge
            v-for="(weekday, index) in filterOptions"
            :key="index"
            :value="filterResults[index]"
            class="item"
            type="primary"
            :hidden="!filterResults[index] > 0"
          >
            <el-radio-button size="small" :label="index">
              {{ weekday }}
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
      filterOptions: {
        1: 'Segunda-feira',
        2: 'Terça-feira',
        3: 'Quarta-feira',
        4: 'Quinta-feira',
        5: 'Sexta-feira',
      },
      filterResults: null,
      filteredDataTable: null,
    };
  },
  computed: {
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
      menuService.all()
        .then((res) => {
          this.dataTable = res.data.result;

          this.dataTable.forEach((el) => {
            const mainDishDescription = lodash.find(this.mainDishList, (o => o._id === el.main_dish_id)).description;
            const sideDishesCounter = el.side_dishes.length;
            const saladsCounter = el.salads.length;

            el.fullDescription = `${mainDishDescription} `;
            el.fullDescription += `com ${sideDishesCounter} acompanhamentos e ${saladsCounter} saladas`;
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
    newMenu() {
      this.$router.push({ name: 'MenuNew', params: { action: 'new' }, query: { weekday: this.selectedWeekdayFilter } });
    },
    editMenu(menu) {
      this.$router.push({ name: 'MenuEdit', params: { action: 'edit', id: menu._id } });
    },
    copyMenu(menu) {
      this.$router.push({ name: 'MenuCopy', params: { action: 'copy', id: menu._id } });
    },
    deleteMenu(menu) {
      menuService.delete(menu._id)
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

      for (let i = 1; i <= 5; i += 1) {
        this.filterResults[i] = this.filteredDataTable.filter(item => item.weekday === i).length;
      }

      return true;
    },
    resetFilterVariables() {
      this.filteredDataTable = null;
      this.filterResults = {};
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
