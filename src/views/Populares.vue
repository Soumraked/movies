<template>
  <div class="container">
    <h1>Películas populares</h1>
    <div v-for="(n,index) in movies" :key="index">
      <b-card :img-src="movies[index].poster" img-alt="Card image" img-left class="mb-3" style="cursor:pointer;" img-width="150" v-on:click="movie(movies[index].id)">
        <b-card-text>
          <h2>{{movies[index].title}} ({{movies[index].date.slice(0,4)}})</h2><hr>
          
          <!-- <p>{{movies[index].overview}}</p> -->
          <genres v-bind:genres="movies[index].geners" /> <hr>  
          <h3><b-icon icon="star-fill" variant="warning">
             </b-icon>{{" " + movies[index].vote_average}}<h6>Votos: {{movies[index].vote_count}}</h6>
          </h3>
          

          <p>  </p>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios"; 
import genres from "@/components/chips.vue"

export default {
  name: 'genres_list',
  components: {genres},
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
      
    },
    movie(id){
      this.$router.push(`/${id}`);
    }
  }
}
</script>