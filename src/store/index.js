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
    },

    GET_USERS_TREE: state => {
      const generateUserAndChild = (user) => {
        return {
          id: user.id,
          name: user.name,
          phone: user.phone,
          children: state.users.filter(i => i.parent === user.id).map(i => generateUserAndChild(i))
        }
      }

      return state.users.filter(i => !i.parent).map(i => generateUserAndChild(i))
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
})
