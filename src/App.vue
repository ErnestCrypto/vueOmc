<template>

  <!--pages-->
  <CreateMessages />
  <!--pages-->

</template>

<script>
import CreateMessages from './components/omc/create_message.vue'

export default {
  name: 'App',
  components: {
    CreateMessages,
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
