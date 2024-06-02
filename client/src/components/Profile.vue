<template>
  <div class="container mx-auto p-8 bg-gray-100 min-h-screen">
    <!-- User Profile Section -->
    <div class="my-8 mx-auto w-full lg:w-3/5">
      <!-- User Information -->
      <div class="bg-blue-300 rounded-lg shadow-md p-8 mb-4">
        <h2 class="text-2xl font-bold mb-4">User Profile</h2>
        <div v-if="user">
          <p><strong>Name:</strong> {{ user.name }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Location:</strong> {{ user.location }}</p>
          <p><strong>Field:</strong> {{ user.field }}</p>
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </div>
    </div>


    <div class="mx-auto w-full lg:w-3/5">
      <AppForm @application-submitted="fetchApplications" />
    </div>

  </div>
</template>


<script>
import axios from 'axios';
import AppForm from './AppForm.vue';

function getUserId() {
  return localStorage.getItem('userId');
}

export default {
  components: {
    AppForm
  },
  data() {
    return {
      user: null
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      await this.fetchUser();
    },
    async fetchUser() {
      const userId = getUserId();

      if (!userId) {
        console.error('User ID not found');
        return;
      }

      try {
        const userResponse = await axios.get(`http://localhost:9000/api/v1/user/${userId}`);
        this.user = userResponse.data.data.user;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
   
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>

