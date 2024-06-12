<template>
  <div class="container max-w-4xl mx-auto p-4 md:p-8 bg-gray-100">
    <div class="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
      <!-- Profile Card -->
      <div v-if="user" class="profile w-full md:w-[45%] md:flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
        <figure class="flex justify-center p-4">
          <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png" alt="User Avatar" class="max-w-[110px] rounded-full p-2 shadow-md">
        </figure>
        <header class="px-6 py-4 text-center md:text-left">
          <h1 class="text-xl font-bold mb-2">{{ user.name }}</h1>
          <small class="block text-gray-600 mb-4">{{ user.course }}</small>
        </header>

        <main class="p-6">
          <dl class="grid grid-cols-1 gap-4">
            <div>
              <p><strong>Email:</strong> {{ user.email }}</p>
              <p><strong>Level:</strong> {{ user.level }}</p>
              <p><strong>Matric Number:</strong> {{ user.matricNumber }}</p>
              <p><strong>Course:</strong> {{ user.course }}</p>

              <p><strong>Gender:</strong> {{ user.gender }}</p>
            </div>
            <div>
            </div>
          </dl>
        </main>
      </div>

      <!-- Application Card -->
      <div class="w-full md:w-[45%] md:flex-shrink-0">
        <application-card v-if="user && user.application" :application="user.application"></application-card>
      </div>
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
  created() {
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
.container {
  padding: 1rem;
}

.profile {
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile header {
  background-color: #f0f0f0;
  padding: 1rem;
}

.profile main {
  padding: 1rem;
}

.profile dl {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.profile dl p {
  margin-bottom: 0.5rem;
}

.application-card {
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}
</style>
