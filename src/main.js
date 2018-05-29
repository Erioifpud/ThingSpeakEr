import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$http = axios

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requiredKey)) {
    if (store.state.mainKey === '') {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

const store = new Vuex.Store({
  state: {
    mainKey: ''
  },
  mutations: {
    setMainKey (state, key) {
      state.mainKey = key
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
