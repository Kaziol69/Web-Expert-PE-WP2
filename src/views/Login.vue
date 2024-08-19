<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const users = [{ username: 'emile', password: 'emile' }]

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const loggedInUser = ref(null)

const router = useRouter()

const handleLogin = () => {
  const user = users.find(
    (user) => user.username === username.value && user.password === password.value
  )

  if (user) {
    loggedInUser.value = user
    router.push('/cart')
  } else {
    errorMessage.value = 'Invalid username or password.'
  }
}
</script>

<template>
  <HeaderComponent />
  <div class="container">
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <a href="#" class="forgot-password">Forgot Password?</a>
      </form>
    </div>
  </div>
  <FooterComponent />
</template>

<style lang="scss">
.container {
  margin: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
}

h2 {
  margin-top: 0;
  text-align: center;
}

.input-group {
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}

button {
  width: 100%;
  padding: 10px;
  background-color: #000;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}

.forgot-password {
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #000;
  text-decoration: none;
}
</style>
