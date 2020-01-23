<template>
  <div>
    <div>
      <b-card no-body class="mb-3" style="cursor:pointer;" v-on:click="movie(movies.id)">
        <b-row no-gutters>
          <b-col md="2">
            <b-card-img :src="movies.poster" style="max-width: 200px;" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="10">
            <b-card-text class="mt-3">
              <h2>{{movies.title}} ({{movies.date.slice(0,4)}})</h2><hr>
              <genres v-bind:genres="movies.geners" /> <hr>  
              <h3><b-icon icon="star-fill" variant="warning">
                  </b-icon>{{" " + movies.vote_average}}<h6>Votos: {{movies.vote_count}}</h6>
              </h3>
            </b-card-text>
          </b-col>
        </b-row>
      </b-card>
    </div>
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

