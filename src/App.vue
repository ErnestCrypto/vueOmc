<template>
  <!--pages-->
  <DeletedMessages />
  <!--pages-->
</template>

<script>
import DeletedMessages from './components/omc/deleted_messages.vue'
export default {
  name: 'App',
  components: {
    DeletedMessages,
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
