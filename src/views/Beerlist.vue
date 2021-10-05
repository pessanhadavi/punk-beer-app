<template>
  <div>
    <v-row class="d-flex justify-center my-3">
      <v-col cols="6">
        <SearchForm />
      </v-col>
    </v-row>
    <h1>This is the Beerlist</h1>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue"

export default {
  components: {
    SearchForm,
  },
  mounted() {
    this.$store.dispatch("fetchBeers")
  },
}
</script>
