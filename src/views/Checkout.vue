<script>
import { useRouter } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  setup() {
    const router = useRouter();

    const handleSubmit = (event) => {
      event.preventDefault();
      router.push("/confirmation");
    };

    return {
      handleSubmit,
    };
  },
};
</script>

<template>
  <HeaderComponent />
  <div class="container">
    <div class="checkout-container">
      <h2>Checkout Page</h2>
      <h3>Shipping Information</h3>
      <form @submit="handleSubmit" id="checkout-form">
        <div class="input-group">
          <label for="first-name">First Name:</label>
          <input type="text" id="first-name" name="firstName" required />
        </div>
        <div class="input-group">
          <label for="last-name">Last Name:</label>
          <input type="text" id="last-name" name="lastName" required />
        </div>
        <div class="input-group">
          <label for="email">Email Address:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="input-group">
          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div class="input-group">
          <label for="address">Address:</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div class="input-group">
          <label for="city">City:</label>
          <input type="text" id="city" name="city" required />
        </div>
        <div class="input-group">
          <label for="state">State/Province:</label>
          <input type="text" id="state" name="state" required />
        </div>
        <div class="input-group">
          <label for="zipcode">Zip Code:</label>
          <input type="text" id="zipcode" name="zipcode" required />
        </div>
        <div class="input-group">
          <label for="country">Country:</label>
          <input type="text" id="country" name="country" required />
        </div>
        <button type="submit">Confirm your order</button>
      </form>
    </div>
  </div>
  <FooterComponent />
</template>

<style lang="scss" scoped>
.container {
  margin: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkout-container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 500px;
}

h2,
h3 {
  margin-top: 0;
  text-align: center;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #000000;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  display: block;
  text-align: center;
}
</style>
