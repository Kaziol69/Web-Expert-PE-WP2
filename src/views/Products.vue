<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import products from '@/products.json'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ProductCardComponent
  },
  data() {
    return {
      products,
      sortedProducts: [...products],
      itemsPerPage: 6,
      currentPage: 1,
      itemsPerRow: 3
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.sortedProducts.length / this.itemsPerPage)
    },
    displayedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.sortedProducts.slice(start, end)
    },
    chunkedProducts() {
      const chunked = []
      for (let i = 0; i < this.displayedProducts.length; i += this.itemsPerRow) {
        chunked.push(this.displayedProducts.slice(i, i + this.itemsPerRow))
      }
      return chunked
    }
  },
  methods: {
    changePage(amount) {
      const newPage = this.currentPage + amount
      if (newPage > 0 && newPage <= this.totalPages) {
        this.currentPage = newPage
      }
    },
    sortProducts(criteria) {
      switch (criteria) {
        case 'highToLow':
          this.sortedProducts.sort((a, b) => b.price - a.price)
          break
        case 'lowToHigh':
          this.sortedProducts.sort((a, b) => a.price - b.price)
          break
      }
      this.currentPage = 1
    }
  }
}
</script>

<template>
  <HeaderComponent />
  <div class="shop">
    <div class="header-shop text-center">
      <h2>Our products</h2>
      <p>Discover all products</p>
    </div>

    <div class="shop-main">
      <div class="filter-shop">
        <p>Filters</p>
        <ul>
          <li><a href="#" @click.prevent="sortProducts('highToLow')">High to low</a></li>
          <li><a href="#" @click.prevent="sortProducts('lowToHigh')">Low to high</a></li>
        </ul>
      </div>

      <div class="product-list">
        <div class="product-outer">
          <div class="product-row" v-for="row in chunkedProducts" :key="row[0].id">
            <div class="product-item-inner" v-for="product in row" :key="product.id">
              <ProductCardComponent :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pagination">
      <button @click="changePage(-1)" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }}</span>
      <button @click="changePage(1)" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
  <FooterComponent />
</template>

<style lang="scss" scoped></style>
