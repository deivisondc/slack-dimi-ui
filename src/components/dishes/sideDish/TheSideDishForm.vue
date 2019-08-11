<template>
  <base-form-layout
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
      listUrl: '/dishes/sideDish',
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
    findById(id) {
      this.id = id;
    },
    save() {
      if (this.$route.params.action === 'edit') {
        sideDishService.update(this.form._id, this.form)
          .then(() => {
            this.$router.push(this.listUrl);
          })
          .catch(err => console.log(err));
      } else {
        sideDishService.create(this.form)
          .then(() => {
            this.$router.push(this.listUrl);
          })
          .catch(err => console.log(err));
      }
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
