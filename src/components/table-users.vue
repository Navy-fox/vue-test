<template>
  <div class="table-users">
    <div class="user-item">
      <div class="user-item__title" @click="setSortUsers">
        <span>Имя</span>
        <img src="@/assets/mdi-light_chevron-down.svg" class="arrow"
             :class="{'arrow--up': getSortUsers === -1, 'arrow--down': getSortUsers === 1}" alt="">
      </div>

      <span class="user-item__title">Телефон</span>
    </div>
    <UserItem v-for="i in userTree" :key="i.id" :nesting="0" :user="i"/>
  </div>
</template>

<script>

import UserItem from './user-item'

export default {
  name: 'table-users',
  components: {UserItem},
  data () {
    return {}
  },
  computed: {
    userTree () {
      return this.$store.getters.GET_USERS_TREE
    },
    getSortUsers () {
      return this.$store.getters.GET_SORT_USERS
    }
  },
  methods: {
    setSortUsers () {
      this.$store.commit('SET_SORT_USERS')
    }
  }
}
</script>

<style lang="scss" scoped>
.table-users {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  text-align: start;
}

</style>
