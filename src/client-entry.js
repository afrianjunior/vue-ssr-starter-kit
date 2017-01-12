require('es6-promise').polyfill()
import { app, store, auth } from './main'

store.replaceState(window.__INITIAL_STATE__)

app.$mount('#app')
