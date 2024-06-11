<template>
  <section class="bg-white dark:bg-green-400">
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
    question: "Student with what Gpa can aply?",
    answer: "Must have a current minimum of 3.5 CGPA",
    open: false
  },
  {
    question: "Take on disciplinary issues?",
    answer: "⁠Must NOT have a disciplinary case within the last two semesters",
    open: false
  },
  {
    question: "Which bank must a student have?",
    answer: "Must have a CMFB account or be willing to open one at the beginning of the semester",
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
