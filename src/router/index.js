import Vue from 'vue'
import Router from 'vue-router'
import tableUser from '../components/table-user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TableUser',
      component: tableUser
    }
  ]
})
