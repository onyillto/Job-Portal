<template>
  <div class="mb-4">
    <form @submit.prevent="fetchJobs" class="flex justify-center items-center">
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md">
        Fetch Jobs
      </button>
    </form>

    <div v-if="loading" class="text-center text-white mt-4">
      Loading...
    </div>

    <div v-if="jobs.length > 0" class="mt-4">
  <h2 class="text-2xl font-semibold mb-2">Job Listings</h2>
  <div v-for="(job, index) in jobs" :key="index" class="border- border-gray-200  py-4 flex flex-col">
    <h3 class="text-lg font-bold text-slate-800 mb-2">{{ job.company }}</h3>
    <p class="text-white flex-grow">{{ job.field }}</p>
    <p class="text-white flex-grow">Students Required: {{ job.studentRequired }}</p>
    <p class="text-white flex-grow">Total Applicants Required: {{ job.totalApplicantsRequired }}</p>
    <p class="text-white flex-grow">Position: {{ job.Position }}</p>
    <div class="flex flex-col">
      <router-link v-for="(applicantId, i) in job.applicants" :key="i" :to="{ name: 'ApplicantDetail', params: { id: applicantId } }" class="text-blue-500 hover:underline mt-1">
        Applicant {{ i + 1 }}
      </router-link>
    </div>
  </div>
</div>

    <div v-if="error" class="text-red-500 mt-4">
      {{ error }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      jobs: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchJobs() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:9000/api/v1/user/get-jobs');
        this.jobs = response.data.data;
      } catch (error) {
        this.error = 'Error fetching jobs';
        console.error('Error fetching jobs:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
/* Add any necessary styling here */
</style>
