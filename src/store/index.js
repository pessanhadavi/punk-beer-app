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
    REMOVE_FAVORITE_BEER(state, id) {
      state.faveBeers.splice(id, 1)
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
    removeFavoriteBeer({ commit, getters }, beer) {
      const id = getters.getBeerId(beer)
      commit("REMOVE_FAVORITE_BEER", id)
    },
  },
  getters: {
    getBeerId: (state) => (beer) => {
      return state.faveBeers.indexOf(beer)
    },
  },
})
