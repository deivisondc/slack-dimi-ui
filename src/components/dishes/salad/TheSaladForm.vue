<template>
  <base-form-layout
    :form-model="form"
    :form-rules="formRules"
    @submitForm="saveForm"
    @cancelForm="cancelForm"
  >
    <template slot="title">
      Saladas
    </template>

    <template>
      <el-form-item label="Descrição" prop="description">
        <el-input v-model="form.description" />
      </el-form-item>
    </template>
  </base-form-layout>
</template>

<script>
import BaseFormLayout from '@/components/layout/BaseFormLayout';

import saladService from '@/services/modules/saladService';

export default {
  components: {
    BaseFormLayout,
  },
  data() {
    return {
      form: {
        _id: null,
        description: '',
      },
      formRules: {
        description: [
          { required: true, message: 'Descrição é requerida.' },
        ],
      },
    };
  },
  created() {
    if (this.$route.params.id) {
      saladService.find(this.$route.params.id)
        .then((res) => {
          this.form = res.data.result;
        });
    }
  },
  methods: {
    async saveForm() {
      if (this.$route.fullPath.includes('edit')) {
        saladService.update(this.form._id, this.form)
          .then(() => {
            this.$router.push({ name: 'SaladList' });
          })
          .catch(err => console.log(err));
      } else {
        saladService.create(this.form)
          .then(() => {
            this.$router.push({ name: 'SaladList' });
          })
          .catch(err => console.log(err));
      }
    },
    cancelForm() {
      this.$router.push({ name: 'SaladList' });
    },
  },
};
</script>

<style scoped>

</style>
