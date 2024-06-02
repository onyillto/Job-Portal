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
    
    <!-- Apply for Job Section -->
    <div class="mx-auto w-full lg:w-3/5">
      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold mb-4">Apply for Job</h2>
        <form @submit.prevent="submitApplication">
          <!-- Form fields for job application -->
          <!-- ... -->
        </form>
      </div>
    </div>

    <!-- Display filled application data -->
    <!-- ... -->
  </div>
</template>
<script>
import axios from 'axios';

// Define getToken and getUserId functions directly in the component
function getToken() {
  return localStorage.getItem('token');
}

function getUserId() {
  return localStorage.getItem('userId');
}

export default {
  data() {
    return {
      user: null,
      isApplicationSubmitted: false,
      applicationData: {
        userName: '',
        matricNumber: '',
        phoneNumber: '',
        supervisorNumber: '',
        officeWork: '',
        attendancePercent: '',
        attendanceFormUrl: ''
      }
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      const userId = getUserId();
      const token = getToken();

      if (!userId || !token) {
        // Handle the case where userId or token is not available
        console.error('User ID or token not found');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:9000/api/v1/user/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        this.user = response.data.data.user;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    async submitApplication() {
      try {
        const token = getToken();
        const headers = {
          'Authorization': `Bearer ${token}`
        };
        const response = await axios.post('http://localhost:9000/api/v1/user/application', this.applicationData, { headers });
        this.isApplicationSubmitted = true;
        this.clearForm();
      } catch (error) {
        console.error('Error submitting application:', error);
      }
    },
    clearForm() {
      this.applicationData = {
        userName: '',
        matricNumber: '',
        phoneNumber: '',
        supervisorNumber: '',
        officeWork: '',
        attendancePercent: '',
        attendanceFormUrl: ''
      };
    }
  }
}
</script>
