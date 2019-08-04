<template>
  <div class="login-layout">
    <el-card
      class="layout-content"
      shadow="always"
    >
      <el-card class="card-title">
        <h2>Login</h2>
        <p>Digite suas credenciais para acessar o sistema</p>
      </el-card>
      <el-main>
        <div class="main-content">
          <el-input class="login-input" v-model="login" placeholder="Email"/>
          <br>
          <el-input
            type="password"
            class="login-input"
            v-model="password"
            placeholder="Senha"/>
        </div>

        <el-button
          class="login-button"
          type="success"
          round
          @click="logon"
          icon="el-icon-unlock"
        >
          Login
        </el-button>
      </el-main>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      password: '',
    };
  },
  methods: {
    logon() {
      this.$router.push('/menu');
    },
  },
};
</script>

<style scoped>
  .login-layout {
    height: 100%;
    width: 60%;
    top: 50%;
    left: 50%;
    display: inline-block;
  }

  .card-title {
    margin-top: -35px;
    background-color: darkblue;
    border-radius: 15px;
    color: #fff;
    text-align: left;
    padding: 5px;
  }

  .el-card {
    overflow: unset;
  }

  .login-input >>> .el-input__inner {
    padding: 20px;
    border-radius: 20px;
    margin-top: 20px;
    width: 80%;
    text-align: center;
  }

  .login-button {
    margin-top: 20px
  }
</style>
