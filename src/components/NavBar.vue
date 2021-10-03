<template>
  <v-app-bar id="nav-bar" app color="purple darken-4" dark>
    <div class="d-flex align-center">
      <router-link to="/"><h1>Punk Beer</h1></router-link>
    </div>
    <v-spacer></v-spacer>
    <router-link :to="{ name: 'favorites' }"
      >See your favorite beers</router-link
    >
  </v-app-bar>
</template>

<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
