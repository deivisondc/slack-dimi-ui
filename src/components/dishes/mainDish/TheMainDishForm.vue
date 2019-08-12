<template>
  <base-form-layout
    :form-model="form"
    :form-rules="formRules"
    @submitForm="saveForm"
    @cancelForm="cancelForm"
  >
    <template slot="title">
      Prato Principal
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

import mainDishService from '@/services/modules/mainDishService';

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
        mainDishService.update(this.form._id, this.form)
          .then(() => {
            this.$router.push({ name: 'MainDishList' });
          })
          .catch(err => console.log(err));
      } else {
        mainDishService.create(this.form)
          .then(() => {
            this.$router.push({ name: 'MainDishList' });
          })
          .catch(err => console.log(err));
      }
    },
    cancelForm() {
      this.$router.push({ name: 'MainDishList' });
    },
  },
  created() {
    if (this.$route.params.id) {
      mainDishService.find(this.$route.params.id)
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
