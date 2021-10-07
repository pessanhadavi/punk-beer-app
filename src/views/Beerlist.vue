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
    <PrevNextBtn :page="page" class="my-4" />
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue"
import BeerCard from "@/components/BeerCard.vue"
import PrevNextBtn from "@/components/PrevNextBtn.vue"
import PageBeers from "@/services/PageBeers.js"
import { mapState } from "vuex"

export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  components: {
    SearchForm,
    BeerCard,
    PrevNextBtn,
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    PageBeers.getPageBeers(routeTo, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    PageBeers.getPageBeers(routeTo, next)
  },
  computed: {
    ...mapState(["beers"]),
  },
}
</script>
