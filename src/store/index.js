import Vue from "vue"
import Vuex from "vuex"
import BeerService from "@/services/BeerService.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: [],
    searchBeer: "",
    faveBeers: [],
    perPage: 6,
  },
  mutations: {
    SET_BEERS(state, beers) {
      state.beers = beers
    },
    SET_SEARCH_BEER(state, searchBeer) {
      state.searchBeer = searchBeer
    },
    ADD_FAVORITE_BEER(state, beer) {
      state.faveBeers.push(beer)
    },
    REMOVE_FAVORITE_BEER(state, index) {
      state.faveBeers.splice(index, 1)
    },
  },
  actions: {
    fetchBeers({ state, commit }, { page }) {
      return BeerService.getBeers(state.searchBeer, state.perPage, page).then(
        (response) => {
          console.log(response.headers)
          commit("SET_BEERS", response.data)
        }
      )
    },
    updateSearchBeer({ commit }, searchBeer) {
      commit("SET_SEARCH_BEER", searchBeer)
    },
    addFavoriteBeer({ commit }, beer) {
      commit("ADD_FAVORITE_BEER", beer)
    },
    removeFavoriteBeer({ commit, getters }, beer) {
      const index = getters.getBeerIndex(beer)
      commit("REMOVE_FAVORITE_BEER", index)
    },
  },
  getters: {
    getBeerIndex: (state, getters) => (beer) => {
      const realBeer = getters.getBeerById(state.faveBeers, beer.id)
      return state.faveBeers.indexOf(realBeer)
    },
    isFavorite: (state) => (id) => {
      let isFave = false
      state.faveBeers.forEach((beer) => {
        if (beer.id === id) isFave = true
      })
      return isFave
    },
    getBeerById: () => (beerArray, id) => {
      return beerArray.find((beer) => beer.id === id)
    },
  },
})
