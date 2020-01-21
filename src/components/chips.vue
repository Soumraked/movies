<template>
  <div>
    <div v-for="(g,i) in genres" :key="i">
      <b-badge pill variant="info">{{g[i]}}</b-badge>
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