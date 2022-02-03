<template>
  <portal to="modal">
    <div class="overlay">
      <div class="add-user">
        <img src="@/assets/mdi_close-circle-outline.svg" alt="" class="add-user__close" @click="closeModal">
        <p class="add-user__title">Добавление пользователя</p>
        <form action="" class="add-user__form form">
          <input type="text" class="form__name" v-model="form.name">
          <input type="text" class="form__phone" v-model="form.phone">
          <select class="form__parent-name" v-model="form.parentName">
            <option disabled :value="null">no</option>
            <option value="0">1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </form>
        <button class="add-user__btn-save btn">Сохранить</button>
      </div>
    </div>
  </portal>
</template>

<script>
export default {
  name: 'modal-add-user',
  data () {
    return {
      form: {
        name: '',
        phone: '',
        parentName: ''
      }
    }
  },
  methods: {
    closeModal () {
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss">
.add-user {
  position: relative;

  min-height: 200px;
  min-width: 300px;
  max-width: 500px;
  width: 50%;

  background: #fff;
  padding: 20px;
  border-radius: 0 15px;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;

    cursor: pointer;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  &__name,
  &__phone,
  &__parent-name {
    border: 1px solid teal;
    border-radius: 5px;
    background: none;
    padding: 7px 5px;

  }
}
</style>
