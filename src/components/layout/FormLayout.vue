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
      :model="form"
      label-width="200px"
      class="form-content"
    >
      <slot />
    </el-form>
  </el-card>
</template>

<script>
export default {

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
</style>
