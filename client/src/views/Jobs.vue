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
      <div class="max-w-4xl mx-auto mt-12">
        <h2 class="text-2xl font-bold sm:text-3xl text-center mb-6">
          All Jobs
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
      </div>

      <!-- Projects Section -->
      
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
  }
};

</script>

<style scoped>
.bg-indigo-50 {
  background-color: #e0e7ff;
}
.text-deep-purple-accent-pink-800 {
  color: #4f3cc9;
}
</style>
