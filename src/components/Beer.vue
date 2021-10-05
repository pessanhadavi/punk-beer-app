<template>
  <div class="beer-wrapper d-flex align-center pa-6 ma-3">
    <img :src="beer.image_url" />
    <div class="beer-text ml-10">
      <h2 class="mb-3">{{ beer.name }}</h2>
      <p>{{ beer.tagline }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    beer: Object,
  },
}
</script>

<style lang="scss" scoped>
.beer-wrapper {
  height: 210px;
  width: 400px;
  background: white;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  img {
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: 0 0 8px rgba(255, 0, 0, 0.2);
  }
}
</style>
