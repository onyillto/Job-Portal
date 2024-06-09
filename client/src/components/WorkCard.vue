<template>
  <div class="mx-auto bg-white rounded-xl overflow-hidden shadow-lg lg:max-w-4xl">
    <!-- Grid container for weekly cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      <!-- Loop through weeklyPictures array -->
      <div v-for="(week, index) in weeklyPictures" :key="index" class="p-2">
        <div class="font-bold text-xl mb-2">Week {{ week.week }} Details</div>
        <p class="text-gray-700 mb-4">
          <span class="font-semibold">Office/Work/Study Done:</span>
          {{ week.officeWorkStudyDone }}
        </p>
        <p class="text-gray-700 mb-4">
          <span class="font-semibold">Supervisor Name:</span>
          {{ week.supervisorName }}
        </p>
        <p class="text-gray-700 mb-4">
          <span class="font-semibold">Hours Worked:</span>
          {{ week.hoursWorked }}
        </p>
        <p class="text-gray-700 mb-4">
          <span class="font-semibold">Days Worked:</span>
          {{ week.daysWorked }}
        </p>
        <div class="relative">
          <img
            :src="week.pictureUrl"
            :alt="'Week ' + week.week"
            class="w-full h-auto rounded-md shadow-md"
          />
          <p class="text-gray-700 mt-2 text-center">
            Week {{ week.week }}
          </p>
          <a
            :href="week.pictureUrl"
            target="_blank"
            class="bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white ml-6 px-4 rounded-md hover:bg-blue-600"
          >
            View Image
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weeklyPictures: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
/* Add Tailwind CSS classes here */
</style>
