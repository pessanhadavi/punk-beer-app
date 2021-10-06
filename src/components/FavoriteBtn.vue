<template>
  <div class="favorite-btn">
    <v-btn icon color="yellow" x-small v-on="$listeners">
      <v-icon>{{ isFave ? "mdi-star" : "mdi-star-outline" }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    isFave: Boolean,
  },
}
</script>
