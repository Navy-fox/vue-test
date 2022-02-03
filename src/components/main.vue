<template>
  <div class="main">
    <TableUsers/>
    <button class="btn" @click="isOpen =true">Добавить пользователя</button>
    <portal-target name="modal">
      <ModalAddUser v-model="isOpen" v-if="isOpen"/>
    </portal-target>
  </div>
</template>

<script>
import TableUsers from './table-users'
import ModalAddUser from './modal-add-user'

export default {
  name: 'main',
  components: {TableUsers, ModalAddUser},
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 20px;
}
</style>
