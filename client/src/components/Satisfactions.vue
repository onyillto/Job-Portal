<template>
  <section class="bg-gray-100 text-red-pink-800">
    <div class="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div class="max-w-xl mx-auto">
        <h2 class="text-3xl font-bold sm:text-2xl text-center">
          Discover Your Ideal Match: Work-Study Edition.
        </h2>
      </div>

      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div class="px-8 text-center sm:px-0">
            <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <img src="/public/tree.svg" alt="description" class="w-8 h-8 text-deep-purple-accent-pink-800 sm:w-10 sm:h-10" />
            </div>
            <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              Contributor
            </h6>
            <div class="mb-2 text-gray-700">0 opening position</div>
          </div>
          <div class="px-8 text-center sm:px-0">
            <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <img src="/public/diversity_2.svg" alt="description" class="w-8 h-8 text-deep-purple-accent-pink-800 sm:w-10 sm:h-10" />
            </div>
            <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              Combinator
            </h6>
            <div class="mb-2 text-gray-700">0 opening position</div>
          </div>
          <div class="px-8 text-center sm:px-0">
            <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <img src="/public/account.svg" alt="description" class="w-8 h-8 text-deep-purple-accent-pink-800 sm:w-10 sm:h-10" />
            </div>
            <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              Employer
            </h6>
            <div class="mb-2 text-gray-700">0 opening position</div>
          </div>
          <div class="px-8 text-center sm:px-0">
            <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <img src="/public/money.svg" alt="description" class="w-8 h-8 text-deep-purple-accent-pink-800 sm:w-10 sm:h-10" />
            </div>
            <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              Financial Career
            </h6>
            <div class="mb-2 text-gray-700">0 opening position</div>
          </div>
        </div>
      </div>

      <!-- Latest Jobs Section -->
      
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      jobPostings: [
        {
          id: 1,
          companyName: "TechCorp",
          jobTitle: "Software Engineer",
          logoUrl: "https://via.placeholder.com/50",
          applyUrl: "/apply/1",
        },
        {
          id: 2,
          companyName: "HealthPlus",
          jobTitle: "Data Analyst",
          logoUrl: "https://via.placeholder.com/50",
          applyUrl: "/apply/2",
        },
        // Add more job postings as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add any specific styles if needed */
</style>
