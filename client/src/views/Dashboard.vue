<template>
  <div class="min-h-screen bg-cover" :style="{ backgroundImage: 'url(https://i.pinimg.com/564x/0b/b3/8e/0bb38e720a04a8d9624c05625dd1c48e.jpg)' }" >
    <div class="container p-4 xl:ml-80">
      <div class="max-w-6xl mx-auto"> <!-- Set maximum width to 1200px -->
        <div class="mt-12">
          <BoardStat />
          <Users />
          <JobForm/>
          <Projects />
        </div>
        <div class="text-blue-gray-600"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Users from "../components/Users.vue";
import BoardStat from "../components/BoardStat.vue";
import JobForm from "../components/JobForm.vue";
import Projects from "../components/Projects.vue";

</script>

<style>
.container {
  width: 100%; /* Ensure the container spans the entire width */
}

/* Optional: Adjustments for extra-large screens */
@media (min-width: 750px) {
  .container {
    
  }
}
</style>