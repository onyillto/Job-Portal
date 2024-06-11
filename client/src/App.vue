<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar/>

    <!-- Main content area -->
    <div class="flex-grow">
      <router-view/>
    </div>

    <!-- Footer component -->
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
/* Add any necessary styles for your layout here */
</style>

