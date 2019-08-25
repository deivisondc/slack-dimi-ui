<template>
  <el-container>
    <el-header v-show="!isLoginRoute" class="flex">
      <el-menu
        class="el-menu"
        mode="horizontal"
        style="padding-left: 50px"
        background-color="#ffffff"
        active-text-color="#153f8a"
        :default-active="activeMenu"
      >
        <el-menu-item
          index="1"
          @click="goTo('/menu')"
        >
          Cardápio
        </el-menu-item>
        <el-menu-item
          index="2"
          @click="goTo('/dishes/mainDish')"
        >
          Prato Principal
        </el-menu-item>
        <el-menu-item
          index="3"
          @click="goTo('/dishes/sideDish')"
        >
          Acompanhamentos
        </el-menu-item>
        <el-menu-item
          index="4"
          @click="goTo('/dishes/salad')"
        >
          Saladas
        </el-menu-item>
      </el-menu>

        <div class="logout-flex">
          <el-button
            type="danger"
            round
            @click="logout"
            icon="el-icon-lock"
          >
            Logout
          </el-button>
        </div>
    </el-header>

    <el-main>
      <div class="main-content">
        <router-view />
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch('logout');
      this.goTo('/login');
    },
  },
  computed: {
    isLoginRoute() {
      return this.$route.fullPath.includes('/login');
    },
    activeMenu() {
      const fullPath = this.$route.fullPath;
      let defaulIndex = "1";

      if (fullPath.includes('/mainDish')) defaulIndex = "2";
      if (fullPath.includes('/sideDish')) defaulIndex = "3";
      if (fullPath.includes('/salad')) defaulIndex = "4";

      return defaulIndex;
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
        /* height: 700px; */
    }

    .el-footer {
        height: 20px !important;
        background-color: #b2b2b2;
    }
    .el-menu-item {
      transition: 0.25s;
    }
    .el-menu-item:hover, .el-menu-item:focus {
      background-color: #ffffff !important;
      color: #153f8a !important;
      border-bottom-color: #153f8a !important;
    }

    .el-menu {
      border-bottom: solid 3px #153f8a !important;
      height: 60px;
    }

    .flex {
      display: flex;
      flex-direction: row;
      height: 63px !important;
    }

    .flex .el-menu {
      flex-grow: 1;
    }

    .logout-flex {
      display: flex;
      flex-direction: row-reverse;
      height: 60px;
      align-items: center;
      padding-right: 10px;
      background-color: #ffffff;
      border-bottom: solid 3px #153f8a !important;
    }

</style>
