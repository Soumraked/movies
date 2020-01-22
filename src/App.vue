<template>
  <div id="app">

    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        
        <img class="mr-4" src="./assets/image.png" width="50px" id="img_logomaster">
        <b-navbar-brand href="/">Movies</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav>
            <b-nav-item href="/">Populares</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" value="" placeholder="Buscar"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="dark"><b-icon icon="search"></b-icon></b-button>
            </b-nav-form>
          </b-navbar-nav>

        </b-collapse>

      </b-navbar>
    </div>

    <router-view/>
  </div>
</template>

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
