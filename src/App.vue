<template>
  <div id="app" class="wrapper">
    <router-view/>
  </div>
</template>

<script>
import '@/assets/scss/style.scss'

export default {
  name: 'App'
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

input {
  border: none;
  outline: none;
  background: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
