<template>
  <div class="projects row my-4">
    <div class="col-md-12 mb-4">
      <h2>
        {{ title }}
      </h2>
      <p>
        {{ description }}
      </p>
      <div class="row">
        <PortfolioItem v-for='item in portfolio_items' v-bind:key='item.id' v-bind:name='item.name' v-bind:description='item.description' v-bind:image='item.image' v-bind:url='item.url' />
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioItem from './PortfolioItem.vue'
import store from '../datastore.js'

export default {
  name: 'Portfolio',
  props: {
    unique_id: String,
    title: String,
    description: String
  },
  data: function() {
    return {
      portfolio_items: []
    }
  },
  created() {
    store.findAll(
      'PortfolioItem',
      {
        'current_status': 'published',
        'portfolio__unique_id': this.unique_id,
        'ordering': 'name',
      }
    ).then(
      data => {
        this.portfolio_items = data
      },
      // errors => {
      //   console.warn(errors)
      // }
    )
  },
  components: {
    PortfolioItem,
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
