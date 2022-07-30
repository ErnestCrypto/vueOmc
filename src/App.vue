<template>
  <!--pages-->
  <ViewMessages />
  <!--pages-->
</template>

<script>
import ViewMessages from './components/omc/view_messages.vue'
export default {
  name: 'App',
  components: {
    ViewMessages,
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
