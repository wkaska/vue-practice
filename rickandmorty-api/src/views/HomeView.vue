<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Rick and Morty API</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { response } from 'express';

export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return {

    }
  },
  mounted(){
    console.log('called')
    this.getTodos();
  },
  methods: {
    getTodos(){
      console.log('received')
      axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => {
        console.log(response)
      })
      // (response => response.json())
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
