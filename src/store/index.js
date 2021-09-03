import Vue from 'vue'
import Vuex from 'vuex'

import makeProducts from '../utils/productFactory'

// import mockData from '../data/mockData'

const mockData = mockData ? null : makeProducts(20)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: mockData,
    page: 0,
    limit: 4,
    selectedProductId: null
  },
  getters: {
    productListPage(state) {
      const { limit, page } = state
      return state.products.slice((page * limit), state.limit)
    },
    selectedProduct({ products, selectedProductId }) {
      if (!selectedProductId) return null
      const targetProduct = products.find(p => p.id === selectedProductId)
      console.log("🚀 ~ file: index.js ~ line 27 ~ selectedProduct ~ targetProduct", targetProduct)
      // return JSON.parse(JSON.stringify(targetProduct))
      return targetProduct
    }
  },
  mutations: {
    setSelectedProduct(state, productID) {
      state.selectedProductId = productID
    },
    updateProducts({ products }, product) {
      //check if idx exists...if yes override else push
      const productIdx = products.findIndex(p => p.id === product.id)
      if (productIdx === -1) products.push(product)
      Vue.set(products, productIdx, product)
    }
  },
  actions: {
  },
  modules: {
  }
})
