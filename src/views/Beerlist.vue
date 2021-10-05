<template>
  <div>
    <v-row class="d-flex justify-center my-3">
      <v-col cols="6">
        <SearchForm />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex flex-wrap justify-center">
        <BeerCard v-for="beer in beers" :key="beer.id" :beer="beer" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue"
import BeerCard from "@/components/BeerCard.vue"
import { mapState } from "vuex"

export default {
  components: {
    SearchForm,
    BeerCard,
  },
  mounted() {
    this.$store.dispatch("fetchBeers")
  },
  computed: mapState(["beers"]),
}
</script>
