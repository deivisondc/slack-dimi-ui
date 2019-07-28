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
import FormLayout from '../../layout/FormLayout.vue';

export default {
  components: {
    AppFormLayout: FormLayout,
  },
  data() {
    return {
      listUrl: '/cadastro/prato/principal',
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
  created() {
    if (this.$route.params.id) {
      const [id] = this.$route.params;
      this.findById(id);
    }
  },
};
</script>

<style scoped>


</style>
