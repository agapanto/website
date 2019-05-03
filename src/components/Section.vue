<template>
  <div class="projects row my-4">
    <div class="col-md-12 mb-4">
      <h2>
        {{ title }}
      </h2>
      <p>
        {{ description }}
      </p>
      <!-- <p class="">
        <a href="#" class="btn btn-primary">
          Solicita tu cotización
        </a>
      </p> -->
      <SectionGallery />
    </div>
  </div>
</template>

<script>
import SectionGallery from './SectionGallery.vue'

export default {
  name: 'Section',
  props: {
    title: String,
    description: String
  },
  components: {
    SectionGallery,
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
