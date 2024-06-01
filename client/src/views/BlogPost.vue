<template>
  <div class="flex justify-center items-center">
    <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
      <div v-if="article" role="main" class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">{{ article.title }}</h1>
        <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
          {{ article.description }}
        </p>
        <p class="text-sm leading-normal text-center text-gray-500 dark:text-gray-300 mt-2">{{ article.date }}</p>
        <img :src="article.image" :alt="article.alt" class="w-full mt-6" />
      </div>
      <div v-else role="main" class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">Article Not Found</h1>
        <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
          The requested article could not be found.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      articles: [
        {
          id: 1,
          date: '12 April 2021',
          title: 'Resume Writing Tips',
          description: 'Learn how to craft a resume that stands out.',
          image: 'https://i.ibb.co/DYxtCJq/img-1.png',
          alt: 'resume tips'
        },
        {
          id: 2,
          date: '13 April 2021',
          title: 'Acing Your Interviews',
          description: 'Top interview strategies to impress employers.',
          image: 'https://i.ibb.co/3C5HvxC/img-2.png',
          alt: 'interview tips'
        },
        {
          id: 3,
          date: '14 April 2021',
          title: 'Networking Effectively',
          description: 'Build a strong professional network.',
          image: 'https://i.ibb.co/Ms4qyXp/img-3.png',
          alt: 'networking tips'
        },
        {
          id: 4,
          date: '15 April 2021',
          title: 'Using Job Boards',
          description: 'Find the best job boards for your career.',
          image: 'https://i.ibb.co/6Wfjf2w/img-4.png',
          alt: 'job boards'
        },
        {
          id: 5,
          date: '16 April 2021',
          title: 'Tailoring Your Application',
          description: 'Customize your application for each job.',
          image: 'https://i.ibb.co/3yvZBpm/img-5.png',
          alt: 'tailored application'
        }
      ],
      article: null
    };
  },
  created() {
    const articleId = parseInt(this.id);
    this.article = this.articles.find(article => article.id === articleId);
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>

