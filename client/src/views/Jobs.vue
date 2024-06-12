<template>
  <div class="container mx-auto p-8">
    <!-- Heading -->
    <h2 class="text-3xl font-bold mb-4 text-center">List Of Jobs</h2>

    <!-- Job Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="(job, index) in jobs"
        :key="index"
        class="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition duration-300 ease-in-out"
        @click="navigateToApply(job)"
      >
        <div class="bg-white rounded-lg overflow-hidden">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-blue-600">{{ job.company || job.nameOfWorkStudy }}</div>
            <p class="text-gray-700 text-base mb-2">Position: {{ job.position || job.post }}</p>
            <p class="text-gray-700 text-base mb-2">Location: {{ job.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      try {
        const response = await axios.get('http://localhost:9000/api/v1/user/jobs');
        this.jobs = response.data.data;
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    },
    navigateToApply(job) {
      this.$router.push({
        path: "/apply",
        query: { job: JSON.stringify(job) },
      });
    },
  },
};
</script>

<style scoped>
</style>
