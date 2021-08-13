import Vue from 'vue'
import Vuex from 'vuex'

import mockData from '../data/mockData'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: mockData,
    page: 0,
    limit: 4,
    selectedProductId: 0
  },
  getters: {
    productListPage(state) {
      const { limit, page } = state
      return [...state.products].slice((page * limit), state.limit)
    },
    selectedProduct({ products, selectedProductId }) {
      if (!Number.isInteger(selectedProductId) || !products[selectedProductId]) return null
      return products[selectedProductId]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
