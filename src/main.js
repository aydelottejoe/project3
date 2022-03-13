import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'
import apparel from './apparel.js'

let data = {
  products: mock,
  apparels: apparel,
  cart: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')