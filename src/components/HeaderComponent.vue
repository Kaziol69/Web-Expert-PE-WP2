<script setup>
import { useCartStore } from '@/stores/piniaStore'
import { computed, onMounted } from 'vue'

const cartStore = useCartStore()
const cartCount = computed(() => cartStore.cartCount)

onMounted(() => {
  const openButton = document.querySelector('.menu-bar .open')
  const closeButton = document.querySelector('.menu-bar .close')
  const responsiveMenu = document.querySelector('header .responsive-menu')

  function toggleActive() {
    responsiveMenu.classList.toggle('active')
    openButton.classList.toggle('active')
    closeButton.classList.toggle('active')
  }

  openButton.addEventListener('click', toggleActive)
  closeButton.addEventListener('click', toggleActive)
})
</script>

<template>
  <header>
    <div class="nav">
      <div class="nav-left w-33">
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <RouterLink to="/shop">Shop</RouterLink>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div class="logo w-33 text-center">
        <a href="/"><img src="../assets/images/Vector.png" alt="logo" /></a>
      </div>

      <div class="nav-right w-33">
        <ul>
          <li>
            <a href="/login"><img src="../assets/images/Customer.png" alt="customer" /></a>
          </li>
          <li>
            <a href="/cart">
              <img src="../assets/images/Shopping-Bag.png" alt="shopping bag" />
              <!-- Display cart count only if it's greater than 0 -->
              <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="responsive-menu">
      <ul>
        <li><a href="/#banner">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li>
          <a href="/login"><img src="../assets/images/Customer.png" alt="customer" /></a>
        </li>
        <li>
          <a href="/cart">
            <img src="../assets/images/Shopping-Bag.png" alt="shopping bag" />
            <!-- Display cart count in responsive menu as well -->
            <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="menu-bar">
      <div class="open">
        <i class="fa-solid fa-bars"></i>
      </div>
      <div class="close">
        <i class="fa-regular fa-circle-xmark"></i>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import '../assets/scss/_layout.scss';
@import '../assets/scss/_responsive.scss';
@import '../assets/scss/_variables.scss';

.cart-count {
  background-color: black;
  color: #fff;
  border-radius: 100%;
  padding: 8px 8px;
  font-size: 12px;
  position: absolute;
  top: 15px;
  right: 40px;
}
</style>
