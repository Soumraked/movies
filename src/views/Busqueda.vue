<template>
  <div class="container">

    <br><h1>Resultados de la búsqueda</h1><br>

    <div v-if="this.moviesSearch.length != 0">
      <div v-for="(n,index) in moviesSearch" :key="index">
        <Card v-bind:data_card="moviesSearch[index]"/>
      </div>
    </div>
    <div v-else>
      <b-alert show variant="info">No existe resultado para la búsqueda.</b-alert>
    </div>

  </div>
</template>

<script>
import axios from "axios"; 
import genres from "@/components/chips.vue"
import Card from "@/components/card.vue"

export default {
  name: 'genres_list',
  components: {Card},
  data(){
    return{
      api_key: '60072f969fb698b98e7b36e86b4fcf58',
      busqueda: this.$route.params.search,
      base_img: 'https://image.tmdb.org/t/p/w500',
      genres: {},
      moviesSearch: [],
    }
  },
  created(){
    this.buscar();
  },
  methods:{
    async buscar(){
      let genres = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key='+this.api_key+'&language=es-MX');
      var generos = {};
      for(var i in genres.data.genres){
        generos[genres.data.genres[i].id] = genres.data.genres[i].name;
      }
      this.genres = generos;

      let movie = await axios.get('https://api.themoviedb.org/3/search/movie?api_key='+this.api_key+'&language=es-MX&query='+this.busqueda+'&page=1&include_adult=false');
      var movies = [];
      var info = {};
      var generosList = [];
      for(var i in movie.data.results){
        info = {};
        info['title'] = movie.data.results[i].title;
        info['overview'] = movie.data.results[i].overview;
        info['poster'] = this.base_img+movie.data.results[i].poster_path;
        info['date'] = movie.data.results[i].release_date;
        info['vote_average'] = movie.data.results[i].vote_average;
        info['vote_count'] = movie.data.results[i].vote_count;
        info['id'] = movie.data.results[i].id;
        generosList = [];
        for(var j in movie.data.results[i].genre_ids){
          generosList.push(this.genres[movie.data.results[i].genre_ids[j]]);
        }
        info['geners'] = generosList;
        movies.push(info);
      }
      this.moviesSearch = movies;
    },
  }
}
</script>