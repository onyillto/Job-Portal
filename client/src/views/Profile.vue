<template>
  <div v-if="isUser" class=" bg-cover"   >
    
     
        <div class="mt-12">
          <Profile />
          
        </div>
        <div class="text-blue-gray-600"></div>
     
    
  </div>
  <div v-else>
    <p>You are not authorized to access this page.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Profile from "../components/Profile.vue";


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
