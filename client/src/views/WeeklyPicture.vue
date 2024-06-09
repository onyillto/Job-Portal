<template>
  <!-- App container -->
  <div id="app">
    <!-- Pass workDetails and weeklyPictures as props to WorkCard component -->
    <WorkCard :workDetails="workDetails" :weeklyPictures="weeklyPictures" />
  </div>
</template>

<script setup>
// Import the WorkCard component
import WorkCard from "../components/WorkCard.vue";

// Define workDetails object with sample data
const workDetails = {
  officeWorkStudyDone: "Data Entry",
  supervisorName: "John Doe",
  hoursWorked: 40,
  daysWorked: 5,
};

// Define weeklyPictures array with sample data
const weeklyPictures = [
  {
    week: 1,
    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZbjP3cb9_2kifRMvpcsPcdr9134YBxqOCw&s",
  },
  {
    week: 2,
    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZbjP3cb9_2kifRMvpcsPcdr9134YBxqOCw&s",
  },
  {
    week: 3,
    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZbjP3cb9_2kifRMvpcsPcdr9134YBxqOCw&s",
  },
  {
    week: 4,
    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZbjP3cb9_2kifRMvpcsPcdr9134YBxqOCw&s",
  },
  // Add more weekly pictures as needed
];
</script>

<style>
/* Add global styles or import Tailwind CSS here */
</style>
