<template>
  <div class="table-users">
    <div class="user-item">
      <span class="user-item__title">Имя</span>
      <span class="user-item__title">Телефон</span>
    </div>
    <UserItem/>
    <div class="user-item">
      <div class="user-item__name user-item__name--1">
        <p>user2</p>
      <img src="@/assets/mdi-light_chevron-down.svg" alt="">
      </div>
      <span class="user-item__phone">911</span>
    </div>
    <div class="user-item">
      <div class="user-item__name">
        <p>user3</p>
        <img src="@/assets/mdi-light_chevron-down.svg" alt="">
      </div>
      <span class="user-item__phone">303</span>
    </div>
    <div class="user-item">
      <div class="user-item__name user-item__name--1">
        <p>user4</p>
        <img src="@/assets/mdi-light_chevron-down.svg" alt="">
      </div>
      <span class="user-item__phone">999</span>
    </div>
    <div class="user-item">
      <div class="user-item__name user-item__name--2">
        <p>user5</p>
        <img src="@/assets/mdi-light_chevron-down.svg" alt="">
      </div>
      <span class="user-item__phone">666</span>
    </div>
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
  }
}
</script>

<style lang="scss">
.table-users {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  text-align: start;
}
</style>
