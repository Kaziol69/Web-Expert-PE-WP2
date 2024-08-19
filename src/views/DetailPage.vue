<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import products from '@/products.json'
import { useCartStore } from '@/stores/piniaStore.js'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      selectedProduct: null,
      quantity: 1,
      maxQuantity: 0
    }
  },
  computed: {
    availableStock() {
      return this.selectedProduct ? this.selectedProduct.stock : 0
    }
  },
  watch: {
    quantity(newQuantity) {
      this.maxQuantity = Math.min(newQuantity, this.availableStock)
    }
  },
  mounted() {
    const productId = this.$route.params.productId
    this.selectedProduct = products.find((product) => product.id === parseInt(productId))
    this.maxQuantity = this.selectedProduct ? this.selectedProduct.stock : 0
  },
  methods: {
    incrementQuantity() {
      if (this.quantity < this.availableStock) {
        this.quantity++
      }
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    addToCart() {
      const cartStore = useCartStore()
      const quantityToAdd = this.quantity
      cartStore.addToCart(this.selectedProduct, quantityToAdd)
      cartStore.updateCartCount(cartStore.cartCount + quantityToAdd)

      console.log(`Added ${this.quantity} ${this.selectedProduct.title}(s) to cart`)
    }
  }
}
</script>

<template>
  <HeaderComponent />
  <div class="cart">
    <div class="cart-left">
      <img :src="selectedProduct?.thumbnail" :alt="selectedProduct?.title" />
    </div>
    <div class="cart-right">
      <div class="cart-description">
        <div class="title">
          <p>{{ selectedProduct?.title }}</p>
          <span>€{{ selectedProduct?.price }}</span>
        </div>
        <div class="subtitle">
          <p>{{ selectedProduct?.description }}</p>
        </div>

        <div class="size">
          <ul>
            <li>XS</li>
            <li>S</li>
            <li class="active">M</li>
            <li>L</li>
            <li>XL</li>
            <li>XXL</li>
          </ul>
        </div>
        <div class="quantity-controls">
          <button @click="decrementQuantity">-</button>
          <input v-model.number="quantity" type="number" min="1" :max="maxQuantity" />
          <button @click="incrementQuantity">+</button>
        </div>
        <button class="add-cart" @click="addToCart" :disabled="quantity > availableStock">
          Add to Cart
        </button>
        <span v-if="quantity > availableStock" class="error-message">
          Not enough stock available
        </span>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<style lang="scss" scoped>
.quantity-controls {
  display: flex;
  align-items: center;
  margin-top: 20px;

  button {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
  }

  input[type='number'] {
    width: 50px;
    text-align: center;
    height: 30px;
  }
}

.add-cart {
  margin-top: 20px;
}

.error-message {
  display: flex;
  justify-content: center;
  color: red;
  margin-top: 10px;
}
</style>
