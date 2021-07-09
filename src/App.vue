<template>
  <div id="app">
    <div id="nav" class="text-2xl flex justify-center items-baseline">
      <a href="https://the-scrum-moose.yolasite.com/" target="_blank">
        <img src="./assets/zoo-logo.png" class="mx-3 h-28">
      </a>
      <router-link class="mx-2" to="/">Honey Badger Intro</router-link> |
      <router-link class="mx-2" to="/image-gallery">Image Gallery</router-link> |
      <router-link class="mx-2" to="/habitat-distribution">
        Distribution &amp; Habitat
      </router-link> |
      <router-link class="mx-2" to="/behavior">Behavior</router-link> |
      <router-link class="mx-2" to="/diet">Diet</router-link>
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #42b983;
}

#nav a.router-link-exact-active {
  text-decoration: underline;
}
</style>
