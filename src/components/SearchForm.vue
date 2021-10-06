<template>
  <div class="my-6">
    <v-form @submit.prevent="search">
      <v-row class="">
        <v-col cols="12">
          <v-text-field
            label="Search for specific beer"
            color="red darken-4"
            v-model="beerSearch"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-center pa-0">
          <v-btn color="red darken-4" dark rounded large type="submit">
            Feeling picky
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beerSearch: "",
    }
  },
  methods: {
    async search() {
      await this.$store.dispatch("updateSearchBeer", this.beerSearch)
      this.$store.dispatch("fetchBeers", { page: 1 })
    },
  },
}
</script>
