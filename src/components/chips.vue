<template>
  <div class="container">
    <div class="row row-cols-2 justify-content-md-center">
      <div class="col-sm-auto" v-for="(g,i) in genres" :key="i">
        <h5><b-badge pill variant="info">{{g}}</b-badge></h5>
      </div>

    </div>
    
  </div>
</template>

<script>
export default {
  props: ['genres'],
  name: 'genres',
  data(){
    return{

    }
  },
  created() {
    
  },
  methods: {
    
  },
}
</script>