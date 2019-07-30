<template>
  <el-container>
    <el-header>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        style="padding-left: 50px"
      >
        <el-menu-item
          index="1"
          @click="goTo('/menu')"
        >
          Cardápio
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            Cadastro de Pratos
          </template>
          <el-menu-item
            index="2-1"
            @click="goTo('/dishes/mainDish')"
          >
            Prato Principal
          </el-menu-item>
          <el-menu-item
            index="2-2"
            @click="goTo('/dishes/sideDish')"
          >
            Acompanhamentos
          </el-menu-item>
          <el-menu-item
            index="2-3"
            @click="goTo('/dishes/salad')"
          >
            Saladas
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>

    <el-main>
      <div class="main-content">
        <router-view />
      </div>
    </el-main>

    <el-footer />
  </el-container>
</template>

<script>
export default {
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>

    .el-header {
        padding: 0;
    }

    .el-main {
      background-color: #efefef;
    }

    .main-content {
        width: 60%;
        display: inline-block;
        margin-top: 20px;
        height: 700px;
    }

    .el-footer {
        height: 20px !important;
        background-color: #b2b2b2;
    }

</style>
