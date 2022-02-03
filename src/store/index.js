import Vue from 'vue'
import Vuex from 'vuex'
import {User} from '../classes/User'
import {generateUserId} from '../utils/generateId'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    ADD_USER (state, payload) {
      try {
        const newUser = new User(generateUserId(state.users), payload)
        state.users.push(newUser)
      } catch (e) {
        console.error(e)
      }
    }
  },
  getters: {
    GET_USERS: state => {
      if (state.users.length !== 0) {
        return state.users
      }
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
})
