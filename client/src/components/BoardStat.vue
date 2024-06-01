<template>
  <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
    <!-- Card for displaying total students -->
    <div v-if="userData" class="card">
      <div class="bg-gradient-to-tr from-blue-600 to-blue-400 rounded-t-xl"></div>
      <div class="content">
        <p class="text-center">Total Students</p>
        <h4 class="text-center">{{ userData.data.totalUserCount }}</h4>
        <p class="text-center"><strong class="text-green-500">+20%</strong>&nbsp;than last year</p>
      </div>
    </div>

    <!-- Card for displaying all applicants -->
    <div v-if="applicantCount" class="card">
      <div class="bg-gradient-to-tr from-yellow-600 to-yellow-400 rounded-t-xl"></div>
      <div class="content">
        <p class="text-center">All Applicants</p>
        <h4 class="text-center">{{ applicantCount.data.applicantCount }}</h4>
        <p class="text-center"><strong class="text-green-500">+3%</strong>&nbsp;than last year</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const userData = ref(null);
const applicantCount = ref(null);

const fetchUserData = async () => {
  try {
    const [studentsResponse, applicantCountResponse] = await Promise.all([
      axios.get('http://localhost:9000/api/v1/user/students'),
      axios.get('http://localhost:9000/api/v1/user/applicant-count')
    ]);
    userData.value = studentsResponse.data;
    applicantCount.value = applicantCountResponse.data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  }
};

onMounted(fetchUserData);
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: #4b5563;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.75rem;
}

.content {
  padding: 1rem;
}
</style>
