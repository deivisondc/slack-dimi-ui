<template>
  <app-form-layout
    :form-model="form"
    :form-rules="formRules"
    :on-submit="save"
  >
    <template slot="title">
      Saladas
    </template>

    <template>
      <el-form-item label="Descrição" prop="description">
        <el-input v-model="form.description" />
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
        description: '',
      },
      formRules: {
        description: [
          { required: true, message: 'Descrição é requerida.' }
        ]
      }
    };
  },
  methods: {
    save() {
      this.$router.push('/cadastro/prato/salada')
    },
  },
};
</script>

<style scoped>

</style>
