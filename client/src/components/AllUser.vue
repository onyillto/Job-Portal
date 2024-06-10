<template>
  <div class="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
    <div v-if="loading" class="text-center text-gray-500">
      Loading...
    </div>
    <div v-else class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
      <div class="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
        <div>
          <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
            Users
          </h6>
          <p class="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
            <strong>Registered</strong> Users
          </p>
        </div>
      </div>
      <div class="p-6 overflow-x-scroll px-0 pt-0 pb-2">
        <table class="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  User Name
                </p>
              </th>
              <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  Course
                </p>
              </th>
              <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  Level
                </p>
              </th>
              <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  Role
                </p>
              </th>
              <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  Actions
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <td class="py-3 px-5 border-b border-blue-gray-50">
                <div class="flex items-center gap-4">
                  <router-link :to="{ name: 'UserDetail', params: { id: user._id } }">
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                      {{ user.name }}
                    </p>
                  </router-link>
                </div>
              </td>
              <td class="py-3 px-5 border-b border-blue-gray-50">
                <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  {{ user.course }}
                </p>
              </td>
              <td class="py-3 px-5 border-b border-blue-gray-50">
                <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  {{ user.level }}
                </p>
              </td>
              <td class="py-3 px-5 border-b border-blue-gray-50">
                <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  {{ user.role }}
                </p>
              </td>
              <td class="py-3 px-5 border-b border-blue-gray-50">
                <button @click="viewAttendance(user)" class="text-blue-600 hover:text-blue-900 focus:outline-none">View Attendance</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: false,
      users: [],
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      try {
        this.loading = true;
        const response = await axios.get('http://localhost:9000/api/v1/user');
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        this.loading = false;
      }
    },
    viewAttendance(user) {
      // Navigate to the attendance page with the user's ID as a route parameter
      this.$router.push({ name: 'WeeklyPicture', params: { userId: user._id } });
    },
  },
};
</script>

<style>
/* Add your custom styles here */
</style>


   
