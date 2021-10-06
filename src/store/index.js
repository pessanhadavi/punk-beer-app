import Vue from "vue"
import Vuex from "vuex"
import BeerService from "@/services/BeerService.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: [],
    searchBeer: "",
    faveBeers: [],
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
  },
  actions: {
    fetchBeers({ state, commit }) {
      return BeerService.getBeers(state.searchBeer).then((response) => {
        commit("SET_BEERS", response.data)
      })
    },
    updateSearchBeer({ commit }, searchBeer) {
      commit("SET_SEARCH_BEER", searchBeer)
    },
    addFavoriteBeer({ commit }, beer) {
      commit("ADD_FAVORITE_BEER", beer)
    },
  },
  modules: {},
})
