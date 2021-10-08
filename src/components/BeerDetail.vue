<template>
  <div>
    <v-toolbar class="beer-detail-header" color="red darken-4" dark>{{
      beer.name
    }}</v-toolbar>
    <v-card-text class="d-flex pa-8">
      <div class="beer-detail-img mr-4">
        <img :src="beer.image_url" />
      </div>
      <div class="beer-detail-text ml-3">
        <h4>Description:</h4>
        <p>{{ beer.description }}</p>
        <h4>It falls in with:</h4>
        <ul>
          <li v-for="food in beer.food_pairing" :key="food">{{ food }}</li>
        </ul>
      </div>
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: ["beer"],
}
</script>

<style lang="scss" scoped>
.beer-detail-header {
  font-size: 20px;
  font-weight: bold;
}

.beer-detail-img {
  height: 210px;
  width: 100px;
  img {
    height: 100%;
  }
}
</style>
