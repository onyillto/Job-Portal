<template>
  <div class="flex justify-center items-center">
    <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
      <div role="main" class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">How to Get Jobs</h1>
        <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
          Discover the best tips and strategies to land your dream job.
        </p>
      </div>
      <div class="lg:flex items-stretch md:mt-12 mt-8">
        <div class="lg:w-1/2">
          <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
            <div v-for="(item, i) in firstColumnArticles" :key="i" class="sm:w-1/2 relative">
              <div>
                <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{{ item.date }}</p>
                <div class="absolute bottom-0 left-0 p-6">
                  <h2 class="text-xl font-semibold text-white">{{ item.title }}</h2>
                  <p class="text-base leading-4 text-white mt-2">{{ item.description }}</p>
                  <router-link :to="'/post/' + item.id" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                    <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                    <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </router-link>
                </div>
              </div>
              <img :src="item.image" class="w-full" :alt="item.alt" />
            </div>
          </div>
          <div v-for="(item, i) in secondColumnArticle" :key="i" class="relative mt-8">
            <div>
              <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{{ item.date }}</p>
              <div class="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 class="text-xl font-semibold text-white">{{ item.title }}</h2>
                <p class="text-base leading-4 text-white mt-2">{{ item.description }}</p>
                <router-link :to="'/post/' + item.id" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </router-link>
              </div>
            </div>
            <img :src="item.image" alt="sitting place" class="w-full mt-8 md:mt-6 hidden sm:block" />
            <img class="w-full mt-4 sm:hidden" :src="item.image" alt="sitting place" />
          </div>
        </div>
        <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
          <div v-for="(item, i) in thirdColumnArticles" :key="i" class="relative mt-4 sm:mt-0">
            <div>
              <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{{ item.date }}</p>
              <div class="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 class="text-xl font-semibold text-white">{{ item.title }}</h2>
                <p class="text-base leading-4 text-white mt-2">{{ item.description }}</p>
                <router-link :to="'/post/' + item.id" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </router-link>
              </div>
            </div>
            <img :src="item.image" class="w-full sm:block hidden" :alt="item.alt" />
            <img class="w-full sm:hidden" :src="item.image" :alt="item.alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstColumnArticles: [
        { id: 1, date: '12 April 2021', title: 'Resume Writing Tips', description: 'Learn how to craft a resume that stands out.', image: 'https://i.ibb.co/DYxtCJq/img-1.png', alt: 'resume tips' },
        { id: 2, date: '13 April 2021', title: 'Acing Your Interviews', description: 'Top interview strategies to impress employers.', image: 'https://i.ibb.co/3C5HvxC/img-2.png', alt: 'interview tips' }
      ],
      secondColumnArticle: [
        { id: 3, date: '14 April 2021', title: 'Networking Effectively', description: 'Build a strong professional network.', image: 'https://i.ibb.co/Ms4qyXp/img-3.png', alt: 'networking tips' }
      ],
      thirdColumnArticles: [
        { id: 4, date: '15 April 2021', title: 'Using Job Boards', description: 'Find the best job boards for your career.', image: 'https://i.ibb.co/6Wfjf2w/img-4.png', alt: 'job boards' },
        { id: 5, date: '16 April 2021', title: 'Tailoring Your Application', description: 'Customize your application for each job.', image: 'https://i.ibb.co/3yvZBpm/img-5.png', alt: 'tailored application' }
      ]
    };
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>

