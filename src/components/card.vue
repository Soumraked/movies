<template>
  <div>
    <b-card :img-src="movies.poster" img-alt="Card image" img-left class="mb-3" style="cursor:pointer;" img-width="150" v-on:click="movie(movies.id)">
        <b-card-text>
          <h2>{{movies.title}} ({{movies.date.slice(0,4)}})</h2><hr>
          <!-- <p>{{movies[index].overview}}</p> -->
          <genres v-bind:genres="movies.geners" /> <hr>  
          <h3><b-icon icon="star-fill" variant="warning">
             </b-icon>{{" " + movies.vote_average}}<h6>Votos: {{movies.vote_count}}</h6>
          </h3>
        </b-card-text>
      </b-card>
  </div>
</template>

<script>

import genres from "@/components/chips.vue"

export default {
  props: ['data_card'],
  name: 'card',
  components: {genres},
  data(){
    return{
      movies: {},
    }
  },
  created() {
    this.movies = this.data_card;
  },
  methods: {
    movie(id){
      this.$router.push(`/${id}`);
    }
  },
}
</script>