<template>
  <div>
    <div v-if="faveBeers.length">
      <h1 class="my-6">Your favorite beer(s):</h1>
    </div>
    <div v-else class="no-fave-beers d-flex justify-center">
      <h1>I guess you are a juice person...?</h1>
    </div>

    <v-row>
      <v-col cols="12" class="d-flex flex-wrap justify-center">
        <BeerCard v-for="beer in faveBeers" :key="beer.id" :beer="beer" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BeerCard from "@/components/BeerCard.vue"
import { mapState } from "vuex"

export default {
  components: {
    BeerCard,
  },
  computed: mapState(["faveBeers"]),
}
</script>

<style lang="scss" scoped>
.no-fave-beers {
  margin: 250px;
  h1 {
    font-size: 40px;
  }
}
</style>
