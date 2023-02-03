<template>
    <div class="locations">
      <h1>This is an different Locations page</h1>
      <input type="text" v-model="searchQuery" placeholder="Поиск...">
      <div class="wrapper">
      <div class="wrapper__blog" v-for="(location, index) in filterSearch" :key="index">
        <div>
          <h2> {{ location.name }} </h2>
          <h3> {{ location.type }} </h3>
          <h3> {{ location.dimension }} </h3>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
import axios from 'axios'

export default {
  name: 'LocationsView',
  components: {
  },
  data(){
    return {
      searchQuery: '',
      locations: []
    }
  },
  components: {
    created() {
      this.getTodos(this.page)
    }
  },
  mounted(){
    this.getTodos();
  },
  methods: {
    getTodos(){
      axios
      .get('https://rickandmortyapi.com/api/location', {
      })
      .then(response => {
        (this.locations = response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  computed: {
    filterSearch(){
      return this.locations.filter(post => post.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  }
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
	border: 0;
}
*, *:before, *:after{
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}
nav,footer,header,aside{display: block;}
html,body{
	height: 100%;
	width: 100%;
	font-size: 100%;
	line-height: 1;
	font-size: 14px;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}
input,button,textarea{font-family: inherit;}
input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner {padding: 0;border: 0}
a, a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;}
h1,h2,h3,h4,h5,h6{font-size: inherit;font-weight: 400;}
/* -------------------------- */
body{
	font-family: Lato;
  background: rgb(1,33,0);
  background: linear-gradient(90deg, rgba(1,33,0,1) 0%, rgba(58,121,9,1) 35%, rgba(0,67,80,1) 100%);
}
h1{
  font-weight: 700;
  font-size: 36px;
  color: greenyellow;
  padding: 30px 15px 30px 15px;
  text-transform: uppercase;
}
h2{
  font-size: 20px;
  font-weight: 600;
  color: rgb(151, 212, 58);
}
h3{
  font-size: 20px;
  color: rgb(13, 236, 98);
}
.img{
  width: 300px;
}
.wrapper{
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
}
.wrapper__blog{
  padding: 35px 20px 35px 20px;
}
.wrapper__blog img {
  margin-bottom: 25px;
  border: 1px solid black;
  border-radius: 30%;
  width: 276px;
}
</style>