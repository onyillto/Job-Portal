<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
      <h1 class="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Frequently Asked Questions</h1>

      <div class="mt-8 space-y-8 lg:mt-12">
        <div v-for="(faq, index) in faqs" :key="index" class="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
          <button @click="toggleFAQ(index)" class="flex items-center justify-between w-full">
            <h1 class="font-semibold text-gray-700 dark:text-white">{{ faq.question }}</h1>

            <span :class="{ 'transform rotate-180': faq.open }" class="text-gray-400 bg-gray-200 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path :d="faq.open ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              </svg>
            </span>
          </button>

          <p v-if="faq.open" class="mt-6 text-sm text-gray-500 dark:text-gray-300">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const faqs = ref([
  {
    question: "How can I apply for a job through the school portal?",
    answer: "To apply for a job through the school portal, follow these steps: <ol><li>Login to your school portal using your credentials.</li><li>Navigate to the career or job section.</li><li>Explore available job listings.</li><li>Select the job you're interested in and follow the application instructions provided.</li></ol>",
    open: false
  },
  {
    question: "Is the school portal accessible to alumni?",
    answer: "Yes, alumni can access the school portal using their alumni credentials. However, access to certain features may be limited compared to current students.",
    open: false
  },
  {
    question: "How do I reset my password for the school portal?",
    answer: "To reset your password for the school portal, visit the login page and click on the 'Forgot Password' link. Follow the instructions provided to reset your password.",
    open: false
  },
]);

const isOpen = ref(false);
const toggleFAQ = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<style scoped>
/* Add your responsive styles here */
</style>
