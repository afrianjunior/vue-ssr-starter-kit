import Vue from 'vue'
import Router from 'vue-router'

// Components
import Home from '../modules/Home/Pages/Base.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehaviour: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: Home
    },
    { path: '*', redirect: '/' }
  ]
})
