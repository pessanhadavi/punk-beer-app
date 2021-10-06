<template>
  <v-app-bar id="nav-bar" app color="red darken-4" dark>
    <div class="d-flex align-center">
      <router-link to="/"><h1>Punk Beer</h1></router-link>
    </div>
    <v-spacer></v-spacer>
    <router-link :to="{ name: 'favorites' }" class="fave-link">
      <h4>Favorite beers</h4></router-link
    >
  </v-app-bar>
</template>

<style lang="scss" scoped>
h1,
h4 {
  color: white;
}

.fave-link:hover {
  border-bottom: 3px solid white;
}
</style>
