<template>
  <div id="app">
    <app-layout />
  </div>
</template>

<script>
import Layout from './components/layout/Layout.vue';

export default {
  name: 'App',
  components: {
    appLayout: Layout,
  },
};
</script>

<style>

* {
      padding:0;
      margin:0;
      vertical-align:baseline;
      list-style:none;
      border:0
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
