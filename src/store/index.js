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
    selectedProductId: null,
    searchTerm: ''
  },
  getters: {
    getSearchTerm({ searchTerm }) { return searchTerm },
    productListPage({ searchTerm, products, limit, page }) {
      const unfilteredPage = products.slice((page * limit), limit)
      if (!searchTerm) return unfilteredPage

      const filterArr = products.filter(p => p.name.includes(searchTerm) || p.description.includes(searchTerm))
      console.log("🚀 ~ file: index.js ~ line 27 ~ productListPage ~ filterArr", filterArr)
      const filteredPage = filterArr ? filterArr.slice((page * limit), limit) : []
      return filteredPage
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
      if (!productID) {
        state.selectedProductId = { id: null, name: '', description: '', price: 0, imageUrl: '' }
        return
      }
      state.selectedProductId = productID
    },
    updateProducts({ products }, product) {
      //check if idx exists...if yes override else push
      const productIdx = products.findIndex(p => p.id === product.id)
      if (productIdx === -1) products.unshift(product)
      Vue.set(products, productIdx, product)
    },
    setSearchTerm(state, newSearchTerm) {
      state.searchTerm = newSearchTerm
    }
  },
  actions: {
  },
  modules: {
  }
})
