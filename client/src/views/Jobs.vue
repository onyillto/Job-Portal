<template>
  <div class="container mx-auto p-8">
    <!-- Heading -->
    <h2 class="text-3xl font-bold mb-4">List Of Jobs for Covenant Students While On Summer Break</h2>

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
    this.generateJobs();
  },
  methods: {
    generateJobs() {
      this.jobs = [
        {
          company: "Company A",
          position: "Intern",
          attendancePercentage: 85,
          rate: 15,
          image: "https://www.shutterstock.com/shutterstock/photos/1728284956/display_1500/stock-vector-abstract-initial-letter-c-and-o-linked-logo-blue-gradient-circular-rounded-infinity-style-with-1728284956.jpg",
        },
        {
          company: "Company B",
          position: "Software Developer",
          attendancePercentage: 90,
          rate: 25,
          image: "https://www.shutterstock.com/shutterstock/photos/1728284956/display_1500/stock-vector-abstract-initial-letter-c-and-o-linked-logo-blue-gradient-circular-rounded-infinity-style-with-1728284956.jpg",
        },
        {
          company: "Company C",
          position: "Data Analyst",
          attendancePercentage: 95,
          rate: 30,
          image: "https://www.shutterstock.com/shutterstock/photos/1728284956/display_1500/stock-vector-abstract-initial-letter-c-and-o-linked-logo-blue-gradient-circular-rounded-infinity-style-with-1728284956.jpg",
        },
        {
          company: "Company D",
          position: "Marketing Specialist",
          attendancePercentage: 80,
          rate: 20,
          image: "https://www.shutterstock.com/shutterstock/photos/1728284956/display_1500/stock-vector-abstract-initial-letter-c-and-o-linked-logo-blue-gradient-circular-rounded-infinity-style-with-1728284956.jpg",
        },
        {
          company: "Company E",
          position: "Graphic Designer",
          attendancePercentage: 88,
          rate: 18,
          image: "https://www.shutterstock.com/shutterstock/photos/1728284956/display_1500/stock-vector-abstract-initial-letter-c-and-o-linked-logo-blue-gradient-circular-rounded-infinity-style-with-1728284956.jpg",
        },
        // Add more jobs with specific images here
      ];
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
