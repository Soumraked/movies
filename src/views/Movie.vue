<template>
  <div class="container">
    <b-card :img-src="movie2.poster" img-alt="Card image" img-left class="mb-3" img-height="400">
      <b-card-text>
        <h2>{{movie.title}} ({{movie2.date}})</h2><hr>
        <p> {{movie.overview}} </p><hr>
        <genres v-bind:genres="genres" /> <hr>
        <h3><b-icon icon="star-fill" variant="warning">
          </b-icon>{{" " + movie.vote_average}}<h6>Votos: {{movie.vote_count}}</h6>
        </h3> 
        <a :href="movie.homepage">Página oficial de la película</a>
      </b-card-text>
    </b-card>

    <b-card>
      <b-card-text>
        <h6>Título original: {{movie.original_title}}</h6>
        <h6>Lenguaje original: {{movie.original_language}}</h6>
        <h6>Duración: {{movie.runtime}} minutos </h6>
        <h6>Fecha estreno: {{movie2.allDate}}</h6>
        <h6>Presupuesto (USD): $ {{movie2.budget}}</h6>
        <h6>Ingresos (USD): $ {{movie2.revenue}}</h6>
        <hr><h4>Compañias productoras:</h4><hr>
        <genres v-bind:genres="p_companies" />
        <hr><h4>Paises productoras:</h4><hr>
        <genres v-bind:genres="p_countries" /> <hr>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import genres from "@/components/chips.vue" 
export default {
  name: 'genres_list',
  components: {genres},
  data(){
    return{
      id: this.$route.params.id,
      api_key: '60072f969fb698b98e7b36e86b4fcf58',
      base_img: 'https://image.tmdb.org/t/p/w500',
      movie: {},
      genres: [],
      movie2: {},
      p_companies: [],
      p_countries: [],
    }
  },
  created(){
    this.datosPelicula();
  },
  methods:{
    async datosPelicula(){
      let movie = await axios.get('https://api.themoviedb.org/3/movie/'+this.id+'?api_key='+this.api_key+'&language=es-MX');
      //console.log(movie.data);
      this.movie = movie.data;
      this.movie2['poster'] = this.base_img + movie.data.poster_path;
      this.movie2['date'] = movie.data.release_date.slice(0,4);
      this.movie2['allDate'] = movie.data.release_date.slice(8)+'-'+movie.data.release_date.slice(5,7)+'-'+movie.data.release_date.slice(0,4);
      for(var i in movie.data.genres){
        this.genres.push(movie.data.genres[i].name)
      }
      for(var i in movie.data.production_companies){
        this.p_companies.push(movie.data.production_companies[i].name)
      }
      for(var i in movie.data.production_countries){
        this.p_countries.push(movie.data.production_countries[i].name)
      }
      this.movie2['budget'] = movie.data.budget.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",");
      this.movie2['revenue'] = movie.data.revenue.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",")
    }
  }
}
</script>