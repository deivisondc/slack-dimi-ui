<template>
  <div>
    <el-select
      v-model="model.weekDay"
      :placeholder="placeholder"
      style="width: 100%"
    >
      <el-option 
        v-for="(weekDay, index) in weekDaysFiltered"
        :key="index"
        :label="weekDay"
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
  },
  data() {
    return {
      weekDays: {
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
    weekDaysFiltered() {
      if (!this.showWeekend) {
        let weekDaysFiltered = Object.assign({}, this.weekDays);
        delete weekDaysFiltered[0];
        delete weekDaysFiltered[6];
        return weekDaysFiltered;
      }
      return this.weekDays;
    },
  }
}
</script>

<style scoped>

</style>
