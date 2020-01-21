<template>
  <div class="container">
    <h1>Películas populares</h1>
    <div v-for="(n,index) in movies" :key="index">
      <b-card :img-src="movies[index].poster" img-alt="Card image" img-left class="mb-3" img-width="250">
        <b-card-text>
          <h1>{{movies[index].title}}</h1>
          <!-- <p>{{movies[index].overview}}</p> -->
          <p> {{movies[index].geners}} </p>
          <p> {{movies[index].date}} </p>
          <p> {{movies[index].vote_average}} </p>
          <p> {{movies[index].vote_count}} </p>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios"; 
export default {
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
      //console.log(this.genres)

      let movie = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=60072f969fb698b98e7b36e86b4fcf58&language=es-MX&page=1');
      //console.log(movie.data.results)
      var movies = [];
      var info = {};
      var generosStr = '';
      for(var i in movie.data.results){
        info = {};
        info['title'] = movie.data.results[i].title;
        info['overview'] = movie.data.results[i].overview;
        info['poster'] = this.base_img+movie.data.results[i].poster_path;
        info['date'] = movie.data.results[i].release_date;
        info['vote_average'] = movie.data.results[i].vote_average;
        info['vote_count'] = movie.data.results[i].vote_count;
        info['id'] = movie.data.results[i].id;
        generosStr = '';
        //console.log(movie.data.results[i].genre_ids)
        for(var j in movie.data.results[i].genre_ids){
          //console.log(movie.data.results[i].genre_ids[j])
          generosStr += this.genres[movie.data.results[i].genre_ids[j]] + '/';
        }
        //console.log(generosStr)
        info['geners'] = generosStr;
        movies.push(info);
      }
      this.movies = movies;
      
    }
  }
}
</script>