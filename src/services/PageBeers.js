import store from "@/store"

export default {
  getPageBeers(routeTo, next) {
    const currentPage = parseInt(routeTo.query.page) || 1
    store
      .dispatch("fetchBeers", {
        page: currentPage,
      })
      .then(() => {
        routeTo.params.page = currentPage
        next()
      })
  },
}
