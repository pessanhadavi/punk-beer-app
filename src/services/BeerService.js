import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://api.punkapi.com/v2/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

export default {
  getBeers(searchBeer, perPage, page) {
    if (searchBeer) {
      return apiClient.get(
        "/beers?beer_name=" +
          searchBeer +
          "&page=" +
          page +
          "&per_page=" +
          perPage
      )
    } else {
      return apiClient.get("/beers?page=" + page + "&per_page=" + perPage)
    }
  },
}
