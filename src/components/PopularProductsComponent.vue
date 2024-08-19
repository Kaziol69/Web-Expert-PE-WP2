<script>
import ProductCardComponent from "./ProductCardComponent.vue";
import products from "../products.json";

export default {
  components: {
    ProductCardComponent,
  },
  data() {
    return {
      data: products,
      title: "Featured Products",
      description: "Latest collection of 225!",
    };
  },
  computed: {
    sortedProducts() {
      return this.data.sort((a, b) => b.stock - a.stock);
    },
  },
};
</script>

<template>
  <section id="product" class="section-p1">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="pro-container">
      <ProductCardComponent
        v-for="product in sortedProducts.slice(0, 4)"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
#product {
  text-align: center;
  padding: 50px 0;

  .pro-container {
    display: flex;
    justify-content: space-evenly;
    padding: 75px 0;
    flex-wrap: wrap;
  }
}
</style>
