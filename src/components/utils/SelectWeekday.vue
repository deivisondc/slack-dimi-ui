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
import { weekdays, weekend } from '@/constants'
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
  computed: {
    weekdaysFiltered() {
      if (this.showWeekend) {
        return Object.assign(weekdays, weekend);
      }
      return weekdays;
    },
  },
};
</script>

<style scoped>

</style>
