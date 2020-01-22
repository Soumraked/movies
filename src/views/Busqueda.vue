<template>
  <div>
    
  </div>
</template>

<script>
import axios from "axios"; 
export default {
  data(){
    return{
      api_key: '60072f969fb698b98e7b36e86b4fcf58',
      busqueda: this.$route.params.search,
      moviesSearch: [],
    }
  },
  created(){
    this.buscar();
  },
  methods:{
    async buscar(){
      let movies = await axios.get('https://api.themoviedb.org/3/search/movie?api_key='+this.api_key+'&language=es-MX&query='+this.busqueda+'&page=1&include_adult=false');
      this.moviesSearch = movies.data.results;
      console.log(movies.data.results);
    }
  }
}
</script>