<template>
  <div id="app">
    <router-view/>
    <ModalAddUser/>
  </div>
</template>

<script>
import ModalAddUser from './components/modal-add-user'

export default {
  name: 'App',
  components: {ModalAddUser}
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
