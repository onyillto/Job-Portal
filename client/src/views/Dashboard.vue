<template>
  <div v-if="isAdmin" class="min-h-screen bg-cover" >
    <div class="container p-4 xl:ml-80">
      <div class="max-w-6xl mx-auto"> <!-- Set maximum width to 1200px -->
        <div class="mt-12">
          <BoardStat />
          <Users />
          <AllUser/>
          <JobForm/>
          <Projects />
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
import Users from "../components/Users.vue";
import AllUser from "../components/AllUser.vue";
import BoardStat from "../components/BoardStat.vue";
import JobForm from "../components/JobForm.vue";
import Projects from "../components/Projects.vue";

const isAdmin = ref(true);

onMounted(() => {
  const userRole = localStorage.getItem("userRole");
  if (userRole === "admin") {
    isAdmin.value = true;
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
