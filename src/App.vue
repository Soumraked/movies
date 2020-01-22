<template>
  <div id="app">

    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        
        <img class="mr-4" src="./assets/image.png" width="50px" id="img_logomaster">
        <b-navbar-brand>MejoresMovies</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item active v-if="this.$route.name == 'populares'"  href="/">Populares</b-nav-item>
            <b-nav-item v-if="this.$route.name != 'populares'" href="/">Populares</b-nav-item>
          </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                    <b-form-input autocomplete="off" size="sm" v-model="busqueda" type="text" placeholder="Buscar" v-on:change="buscar()" debounce="5" ></b-form-input>
                    <b-input-group-append>
                        <b-button size="sm" v-on:click="buscar()" variant="dark"><b-icon icon="search"></b-icon></b-button>
                    </b-input-group-append>
                <b-form-input style="display:none;"></b-form-input>
              </b-nav-form>
            </b-navbar-nav>

          </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      busqueda: '',
    }
  },
  methods:{
    buscar(){
      if (this.$route.name == 'busqueda') {
        this.$router.push(`/search/${this.busqueda}`); 
        location.reload();
      } else {
        this.$router.push(`/search/${this.busqueda}`);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
