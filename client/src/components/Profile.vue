<template>
  <div class="container mx-auto p-8 bg-gray-100 min-h-screen">
    <!-- User Profile Section -->
    <div class="flex flex-wrap justify-center space-x-4">
      <!-- Profile Card -->
      <div v-if="user" class="profile max-w-[500px] flex-1 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
         <figure>
        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg" alt="" class="max-w-[150px] rounded-full p-2 shadow-md">
      </figure>
        <header class="px-6 py-4">
          <h1 class="text-xl font-bold">{{ user.name }}</h1>
          <small class="block text-gray-600">{{ user.field }}</small>
        </header>
        
        <div class="toggle absolute bg-white top-8 left-8 w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer transition duration-300 ease-in-out hover:shadow-lg">
          <input type="checkbox" class="view_details hidden" id="view_details">
          <label for="view_details" title="tap here to view full profile">&#9776;</label>    
        </div>
        
        <main class="p-6">
    <dl>
      <div class="grid grid-cols-1  gap-4">
        <div>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Location:</strong> {{ user.location }}</p>
        </div>
        <div>
          <p><strong>Field:</strong> {{ user.field }}</p>
        </div>
      </div>
    </dl>
  </main>
      </div>

      <!-- Application Form -->
      <div class="my-8 mx-4 lg:mx-2 w-full lg:w-3/5 flex-1">
        <AppForm @application-submitted="fetchApplications" />
      </div>

      <attendanceForm/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AppForm from './AppForm.vue';
import attendanceForm from './attendanceForm.vue';

export default {
  components: {
    AppForm,
    attendanceForm
  },
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      const userId = this.getUserId();

      if (!userId) {
        console.error('User ID not found');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:9000/api/v1/user/${userId}`);
        this.user = response.data.data.user;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    getUserId() {
      return localStorage.getItem('userId');
    },
  },
};
</script>
