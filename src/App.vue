<template>
  <!--pages-->
  <UpdateAttendants />
  <!--pages-->
</template>

<script>
import UpdateAttendants from './components/omc/update_attendants.vue'
export default {
  name: 'App',
  components: {
    UpdateAttendants,
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
