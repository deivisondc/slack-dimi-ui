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
import { mapGetters } from 'vuex';

import BaseListLayout from '@/components/layout/BaseListLayout';

export default {
  components: {
    BaseListLayout,
  },
  data() {
    return {
      columns: [
        {
          name: 'Prato',
          value: 'fullDescription',
        },
      ],
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
  computed: {
    ...mapGetters('menu', ['menuList']),
    filterMenuByWeekday() {
      const copyDataTable = this.filteredDataTable || this.menuList;
      return copyDataTable.filter(item => item.weekday === parseInt(this.selectedWeekdayFilter, 10));
    },
  },
  methods: {
    getAllMenus() {
      this.$store.dispatch('menu/fetchMenuList');
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
      this.$store.dispatch('menu/deleteMenu', menu);
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
