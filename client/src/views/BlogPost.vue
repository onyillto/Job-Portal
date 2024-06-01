<!-- BlogHome.vue -->
<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'BlogPost', params: { id: post.id }}">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [], // Array to store fetched blog posts
    };
  },
  mounted() {
    // Fetch list of blog posts from backend API
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      // Call your backend API to fetch blog posts
      // Update this.posts with the fetched data
    },
  },
};
</script>
