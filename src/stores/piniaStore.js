import { defineStore } from 'pinia'
import products from '@/products.json'

const CART_STORAGE_KEY = 'cart'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [],
    products
  }),
  getters: {
    cartCount: (state) => state.cartItems.reduce((total, item) => total + item.quantity, 0)
  },
  actions: {
    addToCart(product, quantity) {
      const existingItem = this.cartItems.find((item) => item.id === product.id)
      existingItem
        ? (existingItem.quantity += quantity)
        : this.cartItems.push({ ...product, quantity })
      this.saveCart()
    },
    clearCartItem(itemId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId)
      this.saveCart()
    },
    saveCart() {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cartItems))
    },
    getCartItems() {
      return this.cartItems
    }
  }
})
