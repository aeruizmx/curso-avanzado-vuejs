import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

// Traer el css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// CSS global
import './assets/css/main.styl'
// Darlo de alta
Vue.use(BootstrapVue)
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
