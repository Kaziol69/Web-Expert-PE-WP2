<script>
import { computed } from 'vue'
import { useCartStore } from '@/stores/piniaStore'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  setup() {
    const cartStore = useCartStore()
    const cartItems = computed(() => cartStore.getCartItems())

    const removeItem = (itemId) => {
      cartStore.clearCartItem(itemId)
    }

    const updateQuantity = (itemId, newQuantity) => {
      if (newQuantity > 0) {
        cartStore.updateCartItemQuantity(itemId, newQuantity)
      } else {
        cartStore.clearCartItem(itemId)
      }
    }

    const calculateTotalPrice = () => {
      return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    const formatPrice = (price) => {
      return `€${price.toFixed(2)}`
    }

    return {
      cartItems,
      removeItem,
      updateQuantity,
      calculateTotalPrice,
      formatPrice
    }
  },
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<template>
  <div class="page-wrapper">
    <HeaderComponent />
    <div class="content">
      <div class="cart-container">
        <h2>Your Cart</h2>
        <ul v-if="cartItems.length > 0">
          <li v-for="item in cartItems" :key="item.id">
            <img :src="item.thumbnail" alt="item" class="thumb" />
            <span class="item-details">
              {{ item.title }} <br />
              Quantity:
              <input
                type="number"
                v-model.number="item.quantity"
                @change="updateQuantity(item.id, item.quantity)"
              />
              <br />
              Price: {{ formatPrice(item.price) }}
            </span>
            <button class="btnShort" @click="removeItem(item.id)">Remove item</button>
          </li>
        </ul>
        <p v-else>Your cart is currently empty, please add some items to your basket!</p>
        <div class="total">
          <strong>Total: {{ formatPrice(calculateTotalPrice()) }}</strong>
        </div>
        <button class="checkout">
          <RouterLink to="/checkout">Go to checkout</RouterLink>
        </button>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.cart-container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 500px;
  margin: 20px 0;
}

h2 {
  margin-top: 0;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.thumb {
  width: 50px;
  height: auto;
  margin-right: 10px;
}

.item-details {
  flex: 1;
}

button {
  padding: 10px;
  background-color: #000000;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
}

.btnShort {
  width: 100px;
}

.checkout {
  width: 100%;
  background-color: #000000;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  padding: 10px;
  margin-top: 20px;
  box-sizing: border-box;
}

.total {
  margin-top: 20px;
  text-align: right;
  font-size: 18px;
  font-weight: bold;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: inherit;
  text-decoration: none;
}
</style>
