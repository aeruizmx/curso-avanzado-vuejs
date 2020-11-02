import Vue from 'vue'
// BootstrapVue
import './plugins/BootstrapVue'

// Vue Font-Awesome
import './plugins/fontAwesome'

// Custom directives
import './directives'

import App from './App.vue'
import router from './router'
import store from './store'

// Traer el css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// CSS global
import './assets/css/main.styl'

// Darlo de alta
Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    // Nuestra funcion
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  // Hook created
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
