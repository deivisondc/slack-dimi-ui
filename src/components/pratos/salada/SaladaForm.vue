<template>
  <app-form-layout>
    <template slot="title">
      Saladas
    </template>

    <template>
      <el-form-item label="Descrição">
        <el-input v-model="form.descricao" />
      </el-form-item>

      <el-form-item>
        <el-button>Cancelar</el-button>
        <el-button
          type="primary"
          @click="onSubmit"
        >
          Salvar
        </el-button>
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
    onSubmit() {

    },
  },
};
</script>

<style scoped>

</style>
