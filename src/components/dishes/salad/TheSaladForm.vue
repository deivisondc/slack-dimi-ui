<template>
  <base-form-layout
    :form-model="form"
    :form-rules="formRules"
    :on-submit="save"
    :list-url="listUrl"
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
      listUrl: '/dishes/salad',
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
    async save() {
      if (this.$route.params.action === 'edit') {
        saladService.update(this.form._id, this.form)
          .then(() => {
            this.$router.push(this.listUrl);
          })
          .catch(err => console.log(err));
      } else {
        saladService.create(this.form)
          .then((res) => {
            console.log(res);
            this.$router.push(this.listUrl);
          })
          .catch(err => console.log(err));
      }
    },
  },
};
</script>

<style scoped>

</style>
