<template>
  <div class="table-users">
    <div class="user-item">
      <span class="user-item__title">Имя</span>
      <span class="user-item__title">Телефон</span>
    </div>
    <UserItem v-for="i in USER_TREE" :key="i.id" :nesting="0" :user="i"/>
  </div>
</template>

<script>

import UserItem from './user-item'

export default {
  name: 'table-users',
  components: {UserItem},
  data () {
    return {
      isOpen: {
        group1: false,
        group2: false,
        group3: false
      }
    }
  },
  computed: {
    USER_TREE () {
      return this.$store.getters.GET_USERS_TREE
    }
  }
}
</script>

<style lang="scss">
.table-users {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  text-align: start;
}
</style>
