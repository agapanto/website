<template>
  <div id="app">
    <Navbar class="mb-4" />

    <div class="container">
      <div class="row">
        <div class="col-md-12 offset-md-0">
          <h1>
            Comunicación Digital
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12 offset-md-0">
          <Section v-for="section in sections" v-bind:key="section.id" v-bind:title="section.name" v-bind:description="section.description" />
        </div>
      </div>

    </div>

    <div class="container text-center my-4 py-4">
      <p>
        Sitio creado por <a href="#">agapanto comunicacion digital</a>
      </p>
    </div>

  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Section from './components/Section.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  data: function () {
    return {
      sections: [
          {
            "name": "Sitios web",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
      ]
    }
  },
  components: {
    Section,
    Navbar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Biryani');
@import url('https://fonts.googleapis.com/css?family=Bungee');

body {
  background: #fcfcfc;
}

#app {
  font-family: 'Biryani', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2, h3, h4, h5, h6{
  font-family: 'Bungee', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #490057;
}

.gallery-shadow{
  box-shadow: 0px 2px 4px #666;
  border-radius: 1rem;
  overflow: hidden;
}

.bg-branding{
  background-color: #4a0d56;
}
</style>
