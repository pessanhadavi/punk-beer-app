import Vue from "vue"
import Vuex from "vuex"
import BeerService from "@/services/BeerService.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: [],
  },
  mutations: {
    SET_BEERS(state, beers) {
      state.beers = beers
    },
  },
  actions: {
    fetchBeers({ commit }) {
      return BeerService.getRandomBeers().then((response) => {
        commit("SET_BEERS", response.data)
      })
    },
  },
  modules: {},
})
