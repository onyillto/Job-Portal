<template>
  <div class="container mx-auto p-8 bg-gray-100 min-h-screen">
    <div class="flex flex-wrap justify-center space-x-4">
      <!-- Profile Card -->
      <div v-if="user" class="profile max-w-[500px] flex-1 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg" alt="User Avatar" class="max-w-[150px] rounded-full p-2 shadow-md">
        </figure>
        <header class="px-6 py-4">
          <h1 class="text-xl font-bold">{{ user.name }}</h1>
          <small class="block text-gray-600">{{ user.course }}</small>
        </header>
        <div class="toggle absolute bg-white top-8 left-8 w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer transition duration-300 ease-in-out hover:shadow-lg">
          <input type="checkbox" class="view_details hidden" id="view_details">
          <label for="view_details" title="tap here to view full profile">&#9776;</label>    
        </div>
        <main class="p-6">
          <dl class="grid grid-cols-1 gap-4">
            <div>
              <p><strong>Email:</strong> {{ user.email }}</p>
              <p><strong>Level:</strong> {{ user.level }}</p>
            </div>
            <div>
              <p><strong>Course:</strong> {{ user.course }}</p>
            </div>
          </dl>
        </main>
      </div>

      <!-- Application Card -->
      <application-card v-if="user && user.application" :application="user.application"></application-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ApplicationCard from './ApplicationCard.vue';

export default {
  components: {
    ApplicationCard,
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
      const user = this.getUserData();
      if (!user) {
        console.error('User data not found');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:9000/api/v1/user/${user._id}`);
        if (response.status === 200) {
          this.user = response.data.data.user;
        } else {
          console.error(`Unexpected response status: ${response.status}`);
        }
      } catch (error) {
        if (error.response) {
          console.error(`Error fetching user data: ${error.response.status} - ${error.response.data.message}`);
        } else {
          console.error('Error fetching user data:', error.message);
        }
      }
    },
    getUserData() {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
  },
};
</script>

<style scoped>
.profile {
  position: relative;
}

.toggle {
  top: 1rem;
  left: 1rem;
  width: 2.5rem;
  height: 2.5rem;
}
</style>
