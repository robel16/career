<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
    <h1 class="text-2xl font-bold mb-4">Register</h1>
    <form @submit.prevent="handleRegister">
      <div class="mb-4">
        <label for="firstName" class="block text-sm font-semibold text-gray-600">First Name:</label>
        <input v-model="formData.firstName" type="text" id="firstName" class="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
      </div>
      <div class="mb-4">
        <label for="lastName" class="block text-sm font-semibold text-gray-600">Last Name:</label>
        <input v-model="formData.lastName" type="text" id="lastName" class="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-semibold text-gray-600">Email:</label>
        <input v-model="formData.email" type="email" id="email" class="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-semibold text-gray-600">Password:</label>
        <input v-model="formData.password" type="password" id="password" class="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">Register</button>
    </form>

    <!-- Success message -->
    <div v-if="successMessage" class="text-green-600 mt-4">
      {{ successMessage }}
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const formData = reactive({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });

    const successMessage = ref('');

    const handleRegister = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/user', formData);
        
        // Assuming the server response includes the token
        const token = response.data.token;

        // Store the token in localStorage
        localStorage.setItem('token', token);

        successMessage.value = 'Registration successful! Redirecting...';
        // Add redirection logic here

        // Clear the form
        formData.firstName = '';
        formData.lastName = '';
        formData.email = '';
        formData.password = '';
      } catch (error) {
        console.error('Registration failed:', error);
      }
    };

    // Clear success message after 3 seconds
    onMounted(() => {
      setTimeout(() => {
        successMessage.value = '';
      }, 3000);
    });

    return {
      formData,
      successMessage,
      handleRegister,
    };
  },
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>