<template>
  <!--
    Heads up! 👋
  
    This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
  -->
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <!-- Section Title -->
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What clients are saying
        </h1>

        <!-- Decorative Divider -->
        <div class="flex justify-center mx-auto mt-6">
            <span class="inline-block w-40 h-1 bg-pink-800 rounded-full"></span>
            <span class="inline-block w-3 h-1 mx-1 bg-pink-800 rounded-full"></span>
            <span class="inline-block w-1 h-1 bg-pink-800 rounded-full"></span>
        </div>

        <!-- Testimonials Slider -->
        <div class="flex items-start max-w-6xl mx-auto mt-16 space-x-4" ref="slider">
            <!-- Left Arrow Button (Hidden on Small Screens) -->
            <button @click="prev" title="left arrow" class="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div class="w-full flex overflow-hidden relative">
                <div v-for="testimonial in testimonials" :key="testimonial.id" class="flex flex-col items-center justify-center w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md" :class="{'hidden': activeTestimonial !== testimonial.id}">
                    <!-- Testimonial Text -->
                    <p class="text-center text-gray-500 dark:text-gray-300">
                        "{{ testimonial.text }}"
                    </p>

                    <!-- Testimonial Author -->
                    <div class="flex flex-col items-center justify-center mt-4">
                        <img class="object-cover rounded-full w-14 h-14" :src="testimonial.image" :alt="testimonial.name">

                        <div class="mt-2 text-center">
                            <h1 class="font-semibold text-gray-800 dark:text-white">{{ testimonial.name }}</h1>
                            <span class="text-sm text-gray-500 dark:text-gray-400">{{ testimonial.role }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Arrow Button (Hidden on Small Screens) -->
            <button @click="next" title="right arrow" class="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  // This component displays testimonials from clients, highlighting the positive impact of our platform in helping students get paid while studying, thus offsetting their bills.
  // It includes an automatic slider to cycle through multiple testimonials.

  data() {
    return {
      testimonials: [
        {
          id: 1,
          text: "This service has significantly improved our workflow and productivity. The team is incredibly supportive and responsive.",
          name: "Mia Brown",
          role: "Marketer",
          image: "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
          id: 2,
          text: "An outstanding experience from start to finish. The quality of work and attention to detail is unmatched.",
          name: "John Doe",
          role: "Developer",
          image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
          id: 3,
          text: "I've never seen such a high level of professionalism and dedication. Highly recommend to everyone.",
          name: "Jane Smith",
          role: "Designer",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
      ],
      activeTestimonial: 1,
      interval: null
    };
  },
  methods: {
    // Method to navigate to the previous testimonial
    prev() {
      if (this.activeTestimonial === 1) {
        this.activeTestimonial = this.testimonials.length;
      } else {
        this.activeTestimonial--;
      }
    },
    // Method to navigate to the next testimonial
    next() {
      if (this.activeTestimonial === this.testimonials.length) {
        this.activeTestimonial = 1;
      } else {
        this.activeTestimonial++;
      }
    },
    // Method to start the automatic slider
    startSlider() {
      this.interval = setInterval(this.next, 5000);
    },
    // Method to stop the automatic slider
    stopSlider() {
      clearInterval(this.interval);
    }
  },
  mounted() {
    // Start the automatic slider when the component is mounted
    this.startSlider();
  },
  beforeDestroy() {
    // Stop the automatic slider when the component is destroyed
    this.stopSlider();
  }
};
</script>

<style scoped>
/* Add any specific styles if needed */
</style>
