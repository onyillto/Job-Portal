<template>
  <div v-if="isUser" class="min-h-screen bg-cover"   >
    <div class="container p-4 ">
      <div class="max-w-6xl mx-auto"> <!-- Set maximum width to 1200px -->
        <div class="mt-12">
         
          <WeeklyForm />
        </div>
        <div class="text-blue-gray-600"></div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>You are not authorized to access this page.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import WeeklyForm from "../components/WeeklyReportForm.vue";

const isUser = ref(true);

onMounted(() => {
  const userRole = localStorage.getItem("userRole");
  if (userRole === "user") {
    isUser.value = true;
  }
});
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