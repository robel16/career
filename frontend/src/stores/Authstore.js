import { defineStore } from 'pinia';
import axios from 'axios';

export const UseAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    userId: '',
  }),

  actions: {
    async register(credentials) {
      try {
        await axios.post('http://localhost:3000/api/user', credentials);
      } catch (error) {
        console.error('Registration failed:', error);
        throw error;
      }
    },

    async login(credentials) {
      try {
        const response = await axios.post('http://localhost:3000/login', credentials);
        this.token = response.data.token;
        this.userId = response.data.userId;
        // You can store the token and userId in localStorage for persistence
        localStorage.setItem('token', this.token);
        localStorage.setItem('userId', this.userId);
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
  },
});
