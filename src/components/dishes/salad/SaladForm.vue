<template>
  <app-form-layout
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
      listUrl: '/dishes/salad',
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
  created() {
    if (this.$route.params.id) {
      this.findById(this.$route.params.id);
    }
  },
  methods: {
    findById(id) {
      this.id = id;
    },
    save() {
      const [action] = this.$route.params;
      if (action === 'edit') {
        this.$router.push(this.listUrl);
      } else {
        this.$router.push(this.listUrl);
      }
    },
  },
};
</script>

<style scoped>

</style>
