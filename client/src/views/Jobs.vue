<template>
  <div class="container mx-auto p-8">
    <!-- Heading -->
    <h2 class="text-3xl font-bold mb-4">Jobs for the Summer Break for Covenant Students</h2>

    <!-- Job Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="(job, index) in jobs" :key="index" class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="job.image" :alt="`Company Image ${index + 1}`">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ job.company }}</div>
          <p class="text-gray-700 text-base mb-2">Attendance Percentage: {{ job.attendancePercentage }}%</p>
          <p class="text-gray-700 text-base mb-2">Position: {{ job.position }}</p>
          <p class="text-gray-700 text-base mb-2">Rate: ${{ job.rate }}/hour</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    this.generateRandomJobs();
  },
  methods: {
    generateRandomJobs() {
      const companies = ["Company A", "Company B", "Company C", "Company D", "Company E"];
      const positions = ["Intern", "Software Developer", "Data Analyst", "Marketing Specialist", "Graphic Designer"];
      const minAttendancePercentage = 70;
      const maxAttendancePercentage = 100;
      const minRate = 10;
      const maxRate = 50;

      for (let i = 0; i < 10; i++) {
        const randomCompany = companies[Math.floor(Math.random() * companies.length)];
        const randomPosition = positions[Math.floor(Math.random() * positions.length)];
        const randomAttendancePercentage = Math.floor(Math.random() * (maxAttendancePercentage - minAttendancePercentage + 1)) + minAttendancePercentage;
        const randomRate = Math.floor(Math.random() * (maxRate - minRate + 1)) + minRate;
        const randomImage = `https://via.placeholder.com/350x150?text=${randomCompany.replace(/\s+/g, '-')}`;

        this.jobs.push({
          company: randomCompany,
          position: randomPosition,
          attendancePercentage: randomAttendancePercentage,
          rate: randomRate,
          image: randomImage,
        });
      }
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>

