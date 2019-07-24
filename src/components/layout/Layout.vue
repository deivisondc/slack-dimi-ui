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
          @click="goTo('/cardapio')"
        >
          Cardápio
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            Cadastro de Pratos
          </template>
          <el-menu-item
            index="2-1"
            @click="goTo('/cadastro/prato/principal')"
          >
            Principal
          </el-menu-item>
          <el-menu-item
            index="2-2"
            @click="goTo('/cadastro/prato/acompanhamento')"
          >
            Acompanhamento
          </el-menu-item>
          <el-menu-item
            index="2-3"
            @click="goTo('/cadastro/prato/salada')"
          >
            Salada
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
// import Cardapio from '../cardapio/Cardapio.vue'
// import SaladaForm from '../pratos/salada/SaladaForm.vue'

export default {
  // components: {
  //     appCardapio: Cardapio
  // }
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

    .main-content {
        width: 60%;
        display: inline-block;
    }

    .el-footer {
        height: 20px !important;
        background-color: #b2b2b2;
    }

</style>
