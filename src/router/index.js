import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main'
import VueMask from 'v-mask'

Vue.use(VueMask)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: main
    }
  ]
})
