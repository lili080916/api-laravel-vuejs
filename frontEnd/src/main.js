// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import store from './store'

import router from './router'

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if (authUser && authUser.access_token) {
      next()
    } else {
      next({name: 'Home'})
    }
  }
  next()
})

new Vue({
  router, store
}).$mount('#app')
