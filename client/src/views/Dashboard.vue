<
<template>
  <!-- component -->
  <div class="min-h-screen bg-gray-50/50 mt-10">
   
    <div class="p-4 xl:ml-80">
     
      <div class="mt-12">
        
        <BoardStat/>




      <Users/>


      <Projects/>
      </div>
      <div class="text-blue-gray-600">
      
      </div>
    </div>
  </div>
</template>

<script setup>
  import Users from '../components/Users.vue';
  import BoardStat from '../components/BoardStat.vue';
  import Projects from '../components/Projects.vue';
  
  </script>