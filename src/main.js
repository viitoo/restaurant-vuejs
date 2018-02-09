import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

Vue.filter('mayusculas', (value)=> value.toUpperCase());

new Vue({
  el: '#app',
  data: {
    fotos: null,
    texto: "hola mundo desde vuejs",
    buscadorFoto: '',
  },
  render: h => h(App)
})

