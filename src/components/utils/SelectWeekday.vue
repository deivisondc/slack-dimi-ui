<template>
  <div>
    <el-select
      v-model="model.weekday"
      :placeholder="placeholder"
      :multiple="multiple"
      style="width: 100%"
    >
      <el-option
        v-for="(weekday, index) in weekdaysFiltered"
        :key="index"
        :label="weekday"
        :value="index"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    showWeekend: {
      type: Boolean,
      required: false,
      default: true,
    },
    model: {
      type: Object,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      weekdays: {
        0: 'Domingo',
        1: 'Segunda-feira',
        2: 'Terça-feira',
        3: 'Quarta-feira',
        4: 'Quinta-feira',
        5: 'Sexta-feira',
        6: 'Sábado',
      },
    };
  },
  computed: {
    weekdaysFiltered() {
      if (!this.showWeekend) {
        const weekdaysFiltered = Object.assign({}, this.weekdays);
        delete weekdaysFiltered[0];
        delete weekdaysFiltered[6];
        return weekdaysFiltered;
      }
      return this.weekdays;
    },
  },
};
</script>

<style scoped>

</style>
