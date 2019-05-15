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
            Agapanto Comunicación Digital nace en el año 2015 con la idea de facilitar la Comunicación Digital Efectiva a través de plataformas web, gestionando desde la imagen de marca(logos, tipografias, colores) hasta las publicaciones en redes sociales, con un fuerte enfasis en el desarrollo de tecnologia personalizada para solucionar cada problemática en particular.
          </p>
          <p>
            Tal vez tengas solo una idea, pero creemos que esa idea merece el mejor de los desarrollos y por eso estamos aquí para ayudarte a llegar más lejos.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8 offset-md-2">
          <img class="img-fluid" alt="" src="./assets/comunicaciondigital.png">
        </div>
      </div>

    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12 offset-md-0">
          <Portfolio v-for="portfolio in portfolios" v-bind:key="portfolio.id" v-bind:unique_id="portfolio.unique_id" v-bind:title="portfolio.name" v-bind:description="portfolio.description" />
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
import store from './datastore.js'

import Portfolio from './components/Portfolio.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  data: function () {
    return {
      portfolios: []
    }
  },
  created() {
    store.findAll(
        'Portfolio',
        {
          'current_status': 'published',
          'ordering': 'name',
        }
    ).then(
      data => {
        this.portfolios = data
      },
      // errors => {
      //   console.warn(errors)
      // }
    )
  },
  components: {
    Portfolio,
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
