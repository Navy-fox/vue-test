<template>
  <div>
    <div class="user-item"  @click.stop="toggleOpenChildren">
      <div class="user-item__name" :style="`margin-left: ${nesting*15}px`">
        <p>{{user.name}}</p>
        <img src="@/assets/mdi-light_chevron-down.svg" class="arrow" :class="{'arrow--revert': openChildren}" alt="" v-if="isParent">
      </div>
      <span class="user-item__phone">{{user.phone}}</span>
    </div>
    <user-item :nesting="nesting + 1" v-for="(item, key) in user.children" :key="key" :user="item" v-if="openChildren"/>
  </div>

</template>

<script>

export default {
  name: 'user-item',
  props: {
    nesting: {
      type: Number,
      required: true,
      default: 0
    },
    user: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  data: () => ({
    openChildren: false
  }),

  computed: {
    isParent () {
      return this.user.children && this.user.children.length
    }
  },

  methods: {
    toggleOpenChildren () {
      if (this.isParent) {
        this.openChildren = !this.openChildren
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.arrow {
  transform: rotate(-90deg);
  &--revert {
    transform: rotate(0deg);
  }
}

</style>
