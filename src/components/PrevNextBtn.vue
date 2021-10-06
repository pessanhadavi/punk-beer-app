<template>
  <div class="d-flex justify-center">
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'beerlist', query: { page: page - 1 } }"
        rel="prev"
        class="page-link mr-2"
        ><p>Prev Page</p></router-link
      >|
    </template>
    <template v-if="hasNextPage">
      <router-link
        :to="{ name: 'beerlist', query: { page: page + 1 } }"
        rel="next"
        class="page-link ml-2"
        ><p>Next Page</p></router-link
      >
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState(["beers", "perPage"]),
    hasNextPage() {
      return this.beers.length === this.perPage
    },
  },
}
</script>

<style lang="scss" scoped>
.page-link {
  color: red;
  font-weight: bold;
  &:hover {
    color: rgba(255, 0, 0, 0.66);
  }
}
</style>
