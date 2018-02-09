<template>
  <div id="app">

      <h1>Listado</h1>
      <input type="search" v-model="buscadorFoto" placeholder="Encuentra tu empresa">
      <ul v-if="fotos">
        <li v-for="(foto, index) in buscarFoto">
          {{foto.id }} - {{foto.title}}
        </li>
      </ul>
      <span v-else>cargando los datos espere un seg</span>
      <hr>
  </div>
</template>

<script>

import axios from 'axios';

export default {

  name: 'app',
    mounted(){
    axios.get('https://jsonplaceholder.typicode.com/photos')
          .then((respuesta)=>{
            this.fotos =respuesta.data
          });
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      fotos: null,
      buscadorFoto: '',

    }
  },
  computed: {
  buscarFoto(){
    return this.fotos.filter((foto => foto.title.includes(this.buscadorFoto)))
  }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left ;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}


a {
  color: #42b983;
}
</style>
