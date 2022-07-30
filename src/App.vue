<template>
  <!--pages-->
  <ViewStation />
  <!--pages-->
</template>

<script>
import ViewStation from './components/omc/view_station.vue'
export default {
  name: 'App',
  components: {
    ViewStation,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

[v-cloak] {
  display: none;
}
</style>
