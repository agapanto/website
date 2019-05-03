<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-branding">
    <div class="container">
      <a class="navbar-brand logo" href="{% url 'index' %}">
        agapanto
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">

          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="far fa-user"></i> username
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <!-- <a class="dropdown-item" href="#">
                  <i class="fas fa-user"></i> Edit account
                </a>
                <div class="dropdown-divider"></div> -->
                <a class="dropdown-item" href="">
                  <i class="fas fa-sign-out-alt"></i> Logout
                </a>
              </div>
            </li>

          </ul>

      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  props: {
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
