<template>
  <div>
    <h1 class="my-6">Your favorite beers:</h1>
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
