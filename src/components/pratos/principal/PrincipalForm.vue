<template>
  <app-form-layout
    :form-model="form"
    :on-submit="save"
  >
    <template slot="title">
      Prato principal
    </template>
    <template>
      <el-form-item label="Descrição">
        <el-input v-model="form.descricao" />
      </el-form-item>
    </template>
  </app-form-layout>
</template>

<script>
import FormLayout from '../../layout/FormLayout.vue';

export default {
  components: {
    AppFormLayout: FormLayout,
  },
  data() {
    return {
      form: {
        descricao: '',
      },
    };
  },
  methods: {
    save() {
      return true;
    },
  },
};
</script>

<style scoped>


</style>
