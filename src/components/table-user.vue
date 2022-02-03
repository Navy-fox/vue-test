<template>
  <div class="table-user">
    <button class="btn" @click="isOpen =true">Open modal</button>
    <portal-target name="modal">
      <ModalAddUser v-model="isOpen" v-if="isOpen"/>
    </portal-target>
  </div>
</template>

<script>
import ModalAddUser from './modal-add-user'

export default {
  name: 'table-user',
  components: {ModalAddUser},
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>

</style>
