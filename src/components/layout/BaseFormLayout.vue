<template>
  <el-card
    class="layout-content"
    shadow="always"
  >
    <el-card class="form-title">
      <h2><slot name="title" /></h2>
      <p>Dados cadastrais</p>
    </el-card>
    <el-form
      ref="form"
      :model="formModel"
      :rules="formRules"
      :validate-on-rule-change="false"
      label-width="150px"
      class="form-content"
    >
      <slot />
      <el-form-item>
        <el-button @click="cancelForm">
          Cancelar
        </el-button>
        <el-button
          type="primary"
          @click="submitForm"
        >
          Salvar
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  props: {
    formModel: {
      type: Object,
      required: true,
    },
    formRules: {
      type: Object,
      required: false,
      default: null,
    },
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('submitForm');
        }
      });
    },
    cancelForm() {
      this.$emit('cancelForm');
    },
  },
};
</script>

<style scoped>
    .form-title {
        margin-top: -35px;
        background-color: darkblue;
        border-radius: 15px;
        color: #fff;
        text-align: left;
        padding: 5px;
    }

    .form-content {
        margin-top: 20px;
        text-align: right;
    }

    .el-card {
        overflow: unset;
    }

    .el-form >>> .el-form-item__label {
      font-weight: bold;
    }
</style>
