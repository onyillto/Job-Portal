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
            <strong>Signed up user</strong> this Job Summer
          </p>
        </div>
      </div>
      <div class="p-6 overflow-x-scroll px-0 pt-0 pb-2">
        <table class="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  Users
                </p>
              </th>
              <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  officeWork
                </p>
              </th>
              <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  Attendance %
                </p>
              </th>
              
              <!-- New column for user view -->
              <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  View
                </p>
              </th>
              <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                  status
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- Loop through user data -->
            <tr v-for="(user, index) in users" :key="index">
              <!-- User name -->
              <td class="py-3 px-5 border-b border-blue-gray-50">
                <div class="flex items-center gap-4">
                  <router-link :to="{ name: 'UserDetail', params: { id: user._id } }">
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                      {{ user.userName }}
                    </p>
                  </router-link>
                </div>
              </td>
              <!-- officeWork -->
              <td class="py-3 px-5 border-b border-blue-gray-50">
                <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                  {{ user.officeWork }}
                </p>
              </td>
              <!-- Attendance percentage -->
              <td class="py-3 px-5 border-b border-blue-gray-50">
                <div class="w-10/12">
                  <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                    {{ user.attendancePercentage }}
                  </p>
                  <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                    <div class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" :style="{ width: user.attendance }"></div>
                  </div>
                </div>
              </td>
              <!-- Button for user view -->
              <td class="py-3 px-5 border-b border-blue-gray-50">
                <router-link :to="{ name: 'UserDetail', params: { id: user._id } }" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</router-link>
              </td>
              <td class="py-3 px-5 border-b border-blue-gray-50">
  <div class="w-10/12">
    <p 
      class="antialiased font-sans mb-1 block text-xs font-medium text-white py-1 px-2 rounded-md text-center"
      :class="{
        'bg-yellow-500': user.applicationStatus === 'pending',
        'bg-green-500': user.applicationStatus === 'accepted',
        'bg-red-500': user.applicationStatus === 'rejected'
      }"
    >
      {{ user.applicationStatus }}
    </p>
    <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
      <div 
        class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" 
        :style="{ width: user.attendance }">
      </div>
    </div>
  </div>
</td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Small box for accepted users -->
    <div v-if="userAccepted" class="bg-green-500 text-white font-bold py-1 px-2 rounded-md text-sm absolute top-2 right-2">
      Accepted
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
        const response = await axios.get('http://localhost:9000/api/v1/user/applications');
        this.users = response.data.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
