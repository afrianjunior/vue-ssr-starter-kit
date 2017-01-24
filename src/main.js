import Vue from 'vue'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'
import auth from './auth'
import vuetify from 'vuetify'

Vue.use(vuetify)

sync(store, router, auth)

const app = new Vue({
  router,
  store,
  auth,
  ...App
})

export { app, store, router, auth }
