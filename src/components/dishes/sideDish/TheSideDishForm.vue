<template>
  <base-form-layout
    :form-model="form"
    :form-rules="formRules"
    @submitForm="saveForm"
    @cancelForm="cancelForm"
  >
    <template slot="title">
      Acompanhamento
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

import sideDishService from '@/services/modules/sideDishService';

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
  methods: {
    saveForm() {
      if (this.$route.fullPath.includes('edit')) {
        sideDishService.update(this.form._id, this.form)
          .then(() => {
            this.$router.push({ name: 'SideDishList' });
          })
          .catch(err => console.log(err));
      } else {
        sideDishService.create(this.form)
          .then(() => {
            this.$router.push({ name: 'SideDishList' });
          })
          .catch(err => console.log(err));
      }
    },
    cancelForm() {
      this.$router.push({ name: 'SideDishList' });
    },
  },
  created() {
    if (this.$route.params.id) {
      sideDishService.find(this.$route.params.id)
        .then((res) => {
          this.form = res.data.result;
        })
        .catch(err => console.log(err));
    }
  },
};
</script>

<style scoped>

</style>
