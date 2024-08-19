<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<template>
  <div class="pro">
    <RouterLink :to="{ name: 'detailpage', params: { productId: product.id } }">
      <img :src="product.thumbnail" alt="Product Image" />
    </RouterLink>
    <div class="description">
      <h5>{{ product.title }}</h5>
      <h4>€{{ product.price.toFixed(2) }}</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pro {
  border: 1px solid #ddd;
  padding: 16px;
  text-align: center;
  background-color: #f2f2f2;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 200px;
    object-fit: cover;
    width: 100%;
    border-bottom: 1px solid #ddd;
    margin-bottom: 8px;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;

    h5 {
      font-size: 16px;
      margin: 0;
    }

    h4 {
      font-size: 12px;
      color: #333;
      margin: 8px 0 0;
    }
  }
}
</style>
