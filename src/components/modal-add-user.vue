<template>
  <portal to="modal">
    <div class="overlay">
      <div class="add-user">
        <img src="@/assets/mdi_close-circle-outline.svg" alt="" class="add-user__close" @click="closeModal">
        <p class="add-user__title">Добавление пользователя</p>
        <form action="" class="add-user__form form">
          <fieldset class="form__fieldset">
            <legend class="form__legend">Имя</legend>
            <input type="text" class="form__name" v-model="form.name">
          </fieldset>
          <fieldset class="form__fieldset">
            <legend class="form__legend">Телефон</legend>
            <input placeholder="+7" type="text" class="form__phone" v-model="form.phone" v-mask="mask.phone">
          </fieldset>
          <fieldset class="form__fieldset">
            <legend class="form__legend">Начальник</legend>
            <select class="form__parent-name" v-model="form.parent">
              <option disabled :value="null">no</option>
              <option v-for="i in getUsers" :value="i.id" :key="i.id">{{ i.name }}</option>
            </select>
          </fieldset>
        </form>
        <button class="add-user__btn-save btn" @click="addUser">Сохранить</button>
      </div>
    </div>
  </portal>
</template>

<script>
export default {
  // TODO: добавить маску и проверку типа вводимых данных на поле ввода номера
  name: 'modal-add-user',
  data () {
    return {
      form: {
        name: '',
        phone: '',
        parent: null
      },
      mask: {
        phone: ['+7 (', /\d/, /\d/, /\d/, ') ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
      }
    }
  },
  methods: {
    closeModal () {
      this.$emit('input', false)
    },
    addUser () {
      this.$store.commit('ADD_USER', this.form)
      this.closeModal()
    }
  },
  computed: {
    getUsers () {
      return this.$store.getters.GET_USERS
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

  &__fieldset {
    //border: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    border: 1px solid teal;
    border-radius: 5px;
  }

  &__legend {
    font-size: 14px;
    margin-left: 10px;
  }

  &__name,
  &__phone,
  &__parent-name {
    border: none;
    background: none;
    padding: 0 0 10px 10px;
    width: 99%;

  }
}
</style>
