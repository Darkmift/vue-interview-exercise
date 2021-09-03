import Vue from 'vue'
import Vuex from 'vuex'

import makeProducts from '../utils/productFactory'

// import mockData from '../data/mockData'

const mockData = mockData ? null : makeProducts(20)

function paginate(array, page_size, page_number) {
  // page_number = page_number ? page_number : 1
  // return array.slice((page_number - 1) * page_size, page_number * page_size);
  return array.slice(page_number * page_size, page_number * page_size + page_size);
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: mockData,
    page: 0,
    limit: 4,
    selectedProductId: null,
    searchTerm: '',
    category: 1
  },
  getters: {
    getCategory({ category }) { return category },
    getSearchTerm({ searchTerm }) { return searchTerm },
    productListPage({ category, searchTerm, products, limit, page }) {
      const sortByField = category === 1 ? 'name' : 'dateAdded'
      const arraySortByCategory = products.sort((a, b) => a[sortByField] - b[sortByField])
      const unfilteredPage = paginate(arraySortByCategory, limit, page)

      // arraySortByCategory.slice(((page - 1) * limit), page * limit)
      console.log("🚀 ~ file: index.js ~ line 28 ~ productListPage ~ unfilteredPage", { page, unfilteredPage })
      if (!searchTerm) return unfilteredPage

      const filterArr = products.filter(p => p.name.includes(searchTerm) || p.description.includes(searchTerm))
      const filteredPage = filterArr ?
        paginate(filterArr, limit, page)
        // filterArr.slice(((page - 1) * limit), page * limit) 
        : []
      return filteredPage
    },
    selectedProduct({ products, selectedProductId }) {
      if (!selectedProductId) return null
      const targetProduct = products.find(p => p.id === selectedProductId)
      return targetProduct
    },
    getPaginationData({ products, limit, page }) { return { productAmount: products.length, limit, page } }
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
    },
    toggleCategory(state) {
      state.category = state.category === 1 ? 2 : 1
    },
    setPage(state, newPage) {
      state.page = newPage
    }
  },
  actions: {
  },
  modules: {
  }
})
