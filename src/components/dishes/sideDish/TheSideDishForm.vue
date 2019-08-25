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
import { mapGetters } from 'vuex';

import BaseFormLayout from '@/components/layout/BaseFormLayout';

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
      this.form = this.sideDishById(this.$route.params.id);
    }
  },
  computed: {
    ...mapGetters('sideDish', ['sideDishById']),
  },
  methods: {
    saveForm() {
      const operation = this.$route.fullPath.includes('edit') ? 'edit' : 'create';
      this.$store.dispatch('sideDish/saveSideDish', { sideDish: this.form, operation });
    },
    cancelForm() {
      this.$router.push({ name: 'SideDishList' });
    },
  },
};
</script>

<style scoped>

</style>
