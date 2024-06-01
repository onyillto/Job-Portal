<template>
  <div class="max-w-4xl mx-auto mt-12">
    <h2 class="text-2xl font-bold sm:text-3xl text-center mb-6">
      Latest Job Postings
    </h2>
    <div class="space-y-4">
      <div v-for="job in jobPostings" :key="job.id" class="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
        <div class="flex items-center space-x-4">
          <img :src="job.logoUrl" :alt="`${job.companyName} logo`" class="w-12 h-12 rounded-full" />
          <div>
            <h3 class="text-lg font-medium">{{ job.jobTitle }}</h3>
            <p class="text-gray-600">{{ job.companyName }}</p>
          </div>
        </div>
        <a :href="job.applyUrl" class="px-4 py-2 bg-slate-400 text-white rounded-lg hover:bg-blue-700 transition">
          Apply
        </a>
      </div>
    </div>
    <div class="mt-6 text-center">
      <button @click="seeMore" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        See More
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobPostings: [
        {
          id: 1,
          jobTitle: 'Frontend Developer',
          companyName: 'Tech Innovators Inc.',
          logoUrl: 'path-to-logo-1',
          applyUrl: 'path-to-job-1'
        },
        {
          id: 2,
          jobTitle: 'Data Scientist',
          companyName: 'Science Solutions Ltd.',
          logoUrl: 'path-to-logo-2',
          applyUrl: 'path-to-job-2'
        },
        {
          id: 3,
          jobTitle: 'Backend Developer',
          companyName: 'Tech Innovators Inc.',
          logoUrl: 'path-to-logo-3',
          applyUrl: 'path-to-job-3'
        },
        {
          id: 4,
          jobTitle: 'Machine Learning Engineer',
          companyName: 'AI Pioneers',
          logoUrl: 'path-to-logo-4',
          applyUrl: 'path-to-job-4'
        },
        {
          id: 5,
          jobTitle: 'Product Manager',
          companyName: 'Product Pros LLC',
          logoUrl: 'path-to-logo-5',
          applyUrl: 'path-to-job-5'
        },
        {
          id: 6,
          jobTitle: 'UI/UX Designer',
          companyName: 'Design Studio',
          logoUrl: 'path-to-logo-6',
          applyUrl: 'path-to-job-6'
        },
        {
          id: 7,
          jobTitle: 'DevOps Engineer',
          companyName: 'Infrastructure Experts',
          logoUrl: 'path-to-logo-7',
          applyUrl: 'path-to-job-7'
        },
        {
          id: 8,
          jobTitle: 'Mobile App Developer',
          companyName: 'App Creators',
          logoUrl: 'path-to-logo-8',
          applyUrl: 'path-to-job-8'
        },
        {
          id: 9,
          jobTitle: 'Data Analyst',
          companyName: 'Data Insights',
          logoUrl: 'path-to-logo-9',
          applyUrl: 'path-to-job-9'
        },
        {
          id: 10,
          jobTitle: 'Cybersecurity Analyst',
          companyName: 'Security Solutions',
          logoUrl: 'path-to-logo-10',
          applyUrl: 'path-to-job-10'
        },
        {
          id: 11,
          jobTitle: 'Cloud Engineer',
          companyName: 'Cloud Services Ltd.',
          logoUrl: 'path-to-logo-11',
          applyUrl: 'path-to-job-11'
        },
        {
          id: 12,
          jobTitle: 'Software Engineer',
          companyName: 'Coding Ninjas',
          logoUrl: 'path-to-logo-12',
          applyUrl: 'path-to-job-12'
        }
      ]
    };
  },
  methods: {
    seeMore() {
      // Implement the logic to load more job postings or redirect to another page
      console.log('See More clicked');
    }
  }
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
