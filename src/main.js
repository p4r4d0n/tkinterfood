// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueCarousel from 'vue-carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'lightbox2/dist/css/lightbox.min.css'
import 'lightbox2/dist/js/lightbox.min'

window.Vue = Vue

Vue.use(VueCarousel)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC5lHJ78QZHKv7GUO2H8IcYyjhQ8DkfSPY',
    v: '3.29'
  }
})

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
