<template>
  <div id="app">
    <base-layout />
  </div>
</template>

<script>
import BaseLayout from '@/components/layout/BaseLayout';

export default {
  name: 'App',
  components: {
    BaseLayout,
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
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #efefef;
}
</style>
