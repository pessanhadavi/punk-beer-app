<template>
  <div class="beer-card-wrapper d-flex align-center pa-6 ma-3">
    <v-dialog transition="dialog-bottom-transition" max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <a v-bind="attrs" v-on="on">
          <div class="beer-card-img">
            <img :src="beer.image_url" />
          </div>
        </a>
        <a v-bind="attrs" v-on="on">
          <div class="beer-card-text ml-10">
            <h2 class="mb-3">{{ beer.name }}</h2>
            <p>{{ beer.tagline }}</p>
          </div>
        </a>
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <BeerDetail :beer="beer" />
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog.value = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <FavoriteBtn
      class="fave-btn align-self-start"
      @click="favorite"
      :isFave="isFave"
    />
  </div>
</template>

<script>
import FavoriteBtn from "@/components/FavoriteBtn.vue"
import BeerDetail from "@/components/BeerDetail.vue"

export default {
  components: {
    FavoriteBtn,
    BeerDetail,
  },
  props: {
    beer: Object,
  },
  data() {
    return {
      isFave: this.$store.getters.isFavorite(this.beer.id),
    }
  },
  methods: {
    favorite() {
      const realBeer = this.$store.getters.getBeerById(
        this.$store.state.beers,
        this.beer.id
      )
      if (this.isFave) {
        this.$store.dispatch("removeFavoriteBeer", realBeer)
      } else {
        this.$store.dispatch("addFavoriteBeer", realBeer)
      }
      this.isFave = this.$store.getters.isFavorite(this.beer.id)
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

h2,
p {
  color: black;
}
</style>
