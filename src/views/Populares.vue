<template>
  <div class="container">
    <br>
    <h1>Top 20 de películas</h1>
    <br>
    
    <div v-for="(n,index) in movies" :key="index">
      <Card v-bind:data_card="movies[index]"/>
    </div>
  </div>
</template>

<script>
import axios from "axios"; 
import Card from "@/components/card.vue"

export default {
  name: 'populares',
  components: {Card},
  data() {
    return {
      api_key: '60072f969fb698b98e7b36e86b4fcf58',
      base_img: 'https://image.tmdb.org/t/p/w500',
      genres: {},
      movies: [],
    }
  },
  created(){
    this.moviePopular();
  },
  methods: {
    async moviePopular(){
      let genres = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key='+this.api_key+'&language=es-MX');
      var generos = {};
      for(var i in genres.data.genres){
        generos[genres.data.genres[i].id] = genres.data.genres[i].name;
      }
      this.genres = generos;

      let movie = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=60072f969fb698b98e7b36e86b4fcf58&language=es-MX&page=1');
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
      this.movies = movies;
      console.log('hola');
      
    },
  }
}
</script>