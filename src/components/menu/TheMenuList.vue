<template>
  <base-list-layout
    :title="'Cardápio'"
    :sub-title="'Listagem do cardápio por dias da semana'"
    :data-table="filterMenuByWeekday(selectedWeekdayFilter)"
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

import { weekdays } from '@/constants';

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
      filterOptions: weekdays,
    };
  },
  created() {
    if (this.$route.query.weekday) {
      this.selectedWeekdayFilter = this.$route.query.weekday;
    } else {
      const dayOfWeek = new Date().getDay();
      this.selectedWeekdayFilter = dayOfWeek >= 1 && dayOfWeek <= 5 ? dayOfWeek : 1;
    }

    this.getAllMenus();
  },
  computed: {
    ...mapGetters('menu', ['filterMenuByWeekday', 'filterResults']),
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
      this.$store.dispatch('menu/applyFilter', filterValue);
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
