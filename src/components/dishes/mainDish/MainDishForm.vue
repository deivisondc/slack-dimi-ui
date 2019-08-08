<template>
  <app-form-layout
    :form-model="form"
    :form-rules="formRules"
    :on-submit="save"
    :list-url="listUrl"
  >
    <template slot="title">
      Prato Principal
    </template>
    <template>
      <el-form-item label="Descrição" prop="description">
        <el-input v-model="form.description" />
      </el-form-item>
    </template>
  </app-form-layout>
</template>

<script>
import FormLayout from '@/components/layout/FormLayout.vue';

import mainDishService from '@/services/modules/mainDishService';

export default {
  components: {
    AppFormLayout: FormLayout,
  },
  data() {
    return {
      listUrl: '/dishes/mainDish',
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
    save() {
      if (this.$route.params.action === 'edit') {
        mainDishService.update(this.form._id, this.form)
          .then(() => {
            this.$router.push(this.listUrl);
          })
          .catch(err => console.log(err));
      } else {
        mainDishService.create(this.form)
          .then(() => {
            this.$router.push(this.listUrl);
          })
          .catch(err => console.log(err));
      }
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
