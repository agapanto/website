<template>
  <div class="col-12 col-md-4 my-2 my-md-3">
    <div class="gallery-shadow">
      <a v-bind:href='url' target="_blank">
        <img v-bind:alt='description' v-bind:src='image' class="img-fluid">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: {
    name: String,
    description: String,
    image: {
        type: String,
        required: false,
        default: '../assets/blank_image.png'
    },
    url: {
        type: String,
        required: false
    }
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
