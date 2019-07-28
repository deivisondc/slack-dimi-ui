<template>
  <app-form-layout
    :form-model="form"
    :form-rules="formRules"
    :on-submit="save"
    :list-url="listUrl"
  >
    <template slot="title">
      Acompanhamento
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
      listUrl: '/cadastro/prato/acompanhamento',
      form: {
        description: '',
      },
      formRules: {
        description: [
          { required: true, message: 'Descrição é requerida.' },
        ],
      },
    };
  },
  methods: {
    save() {
      const action = this.$route.params.action;
      if (action === 'edit') {
        this.$router.push(this.listUrl);
      } else {
        this.$router.push(this.listUrl);
      }
    },
  },
  created() {
    if (this.$route.params.id) {
      const id = this.$route.params.id;
    }
  },
};
</script>

<style scoped>

</style>
