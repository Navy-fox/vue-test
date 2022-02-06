import Vue from 'vue'
import Vuex from 'vuex'
import {User} from '../classes/User'
import {generateUserId} from '../utils/generateId'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    sortUsers: 0 // -1 | 0 | 1
  },
  mutations: {
    ADD_USER (state, payload) {
      try {
        const newUser = new User(generateUserId(state.users), payload)
        state.users.push(newUser)
      } catch (e) {
        console.error(e)
      }
    },
    SET_SORT_USERS (state) {
      switch (state.sortUsers) {
        case 0:
          state.sortUsers = 1
          break
        case -1:
          state.sortUsers = 0
          break
        case 1:
          state.sortUsers = -1
          break
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
      const compareSortFunction = (a, b) => a.name > b.name ? state.sortUsers : -1 * state.sortUsers
      const generateUserAndChild = (user) => {
        let children = []
        if (state.sortUsers) {
          children = state
            .users
            .filter(i => i.parent === user.id)
            .sort(compareSortFunction)
            .map(i => generateUserAndChild(i))
        } else {
          children = state
            .users
            .filter(i => i.parent === user.id)
            .map(i => generateUserAndChild(i))
        }

        return {
          id: user.id,
          name: user.name,
          phone: user.phone,
          children: children
        }
      }

      if (state.sortUsers) {
        return state.users
          .filter(i => !i.parent)
          .sort(compareSortFunction)
          .map(i => generateUserAndChild(i))
      } else {
        return state.users
          .filter(i => !i.parent)
          .map(i => generateUserAndChild(i))
      }
    },

    GET_SORT_USERS: state => {
      return state.sortUsers
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
})
