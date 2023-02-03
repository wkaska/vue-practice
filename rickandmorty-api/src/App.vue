<template>
  <nav>
    <router-link to="/characters">Characters</router-link> |
    <router-link to="/episodes">Episodes</router-link> |
    <router-link to="/locations">Locations</router-link>
  </nav>
  <router-view/>
</template>
<script>

</script>
<style>
#app {
  font-family: Lato;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: greenyellow;
  text-transform: uppercase;
  font-size: 24px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
input{
  width: 300px;
  padding: 10px;
  border-radius: 10px;
}
input:focus{
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.6);
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
  width: 275px;
}
</style>
