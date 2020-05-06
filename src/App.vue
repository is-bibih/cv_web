<template>
  <div id="app">
    <div id="nav">
      <h1>viviana maldonado estrada</h1>
      <router-link to="/">inicio</router-link> ⋆
      <router-link to="/estudios">estudios</router-link> ⋆
      <router-link to="/experiencia">experiencia</router-link> ⋆
      <router-link to="/conocimientos">conocimientos</router-link> ⋆
      <router-link to="/contacto">dejar un mensaje</router-link> ⋆
      <router-link to="/portafolio">portafolio</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 100px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
