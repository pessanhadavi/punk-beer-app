<template>
  <div class="beer-card-wrapper d-flex align-center pa-6 ma-3">
    <div class="beer-card-img">
      <img :src="beer.image_url" />
    </div>

    <div class="beer-card-text ml-10">
      <h2 class="mb-3">{{ beer.name }}</h2>
      <p>{{ beer.tagline }}</p>
    </div>
    <FavoriteBtn
      class="fave-btn align-self-start"
      @click="favorite"
      :isFave="isFave"
    />
  </div>
</template>

<script>
import FavoriteBtn from "@/components/FavoriteBtn.vue"

export default {
  components: {
    FavoriteBtn,
  },
  props: {
    beer: Object,
  },
  data() {
    return {
      isFave: this.$store.getters.isFavorite(this.beer),
    }
  },
  methods: {
    favorite() {
      if (this.isFave) {
        this.$store.dispatch("removeFavoriteBeer", this.beer)
      } else {
        this.$store.dispatch("addFavoriteBeer", this.beer)
      }
      this.isFave = this.$store.getters.isFavorite(this.beer)
    },
  },
}
</script>

<style lang="scss" scoped>
.beer-card-wrapper {
  position: relative;
  height: 210px;
  width: 415px;
  background: white;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 0 8px rgba(255, 0, 0, 0.747);
    img {
      height: 105%;
    }
  }
}

.beer-card-img {
  height: 150px;
  width: 70px;
  img {
    height: 100%;
  }
}

.fave-btn {
  position: absolute;
  top: 5%;
  right: 3%;
}
</style>
