<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div v-if="loading" class="text-center text-gray-500">
      Loading...
    </div>
    <div v-else class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden max-w-xl w-full p-6">
      <h1 class="text-2xl font-bold mb-4 text-center">{{ user.userName }}</h1>
      <div class="space-y-2 mb-6">
        <p class="text-center"><strong>Matric Number:</strong> {{ user.matricNumber }}</p>
        <p class="text-center"><strong>Phone Number:</strong> {{ user.phoneNumber }}</p>
        <p class="text-center"><strong>Supervisor Number:</strong> {{ user.supervisorNumber }}</p>
        <p class="text-center"><strong>Office Work:</strong> {{ user.officeWork }}</p>
        <p class="text-center"><strong>Attendance Percentage:</strong> {{ user.attendancePercentage }}</p>
        <p class="text-center">
          <strong>Attendance Form:</strong>
          <a :href="user.attendanceForm" target="_blank" class="text-blue-500 hover:underline">View</a>
        </p>
      </div>
      <div class="flex justify-center space-x-4">
        <button @click="acceptUser" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Accept</button>
        <button @click="rejectUser" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reject</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      user: {},
      loading: true,
    };
  },
  async created() {
    try {
      const response = await axios.get(`http://localhost:9000/api/v1/user/applications/${this.id}`);
      this.user = response.data.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async acceptUser() {
      try {
        await axios.patch(`http://localhost:9000/api/v1/user/applications/${this.id}/accept`);
        alert('User accepted successfully');
        // Optionally, you can reload the user data after accepting
        await this.fetchUserData();
      } catch (error) {
        console.error('Error accepting user:', error);
      }
    },
    async rejectUser() {
      try {
        await axios.patch(`http://localhost:9000/api/v1/user/applications/${this.id}/reject`);
        alert('User rejected successfully');
        // Optionally, you can reload the user data after rejecting
        await this.fetchUserData();
      } catch (error) {
        console.error('Error rejecting user:', error);
      }
    },
    async fetchUserData() {
      try {
        const response = await axios.get(`http://localhost:9000/api/v1/user/applications/${this.id}`);
        this.user = response.data.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
  },
};
</script>

<style>
/* Add any necessary styling here */
</style>


