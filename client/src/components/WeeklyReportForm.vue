<template>
  <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg lg:max-w-4xl p-6">
    <form @submit.prevent="submitReport">
      <div class="font-bold text-xl mb-4">Weekly Report Form</div>
      
      <!-- Work Details -->
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="week">
          Week:
        </label>
        <input v-model="workDetails.week" id="week" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="officeWorkStudyDone">
          Work Study:
        </label>
        <input v-model="workDetails.officeWorkStudyDone" id="officeWorkStudyDone" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="supervisorName">
          Supervisor Name:
        </label>
        <input v-model="workDetails.supervisorName" id="supervisorName" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="hoursWorked">
          Hours Worked:
        </label>
        <input v-model="workDetails.hoursWorked" id="hoursWorked" type="number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="daysWorked">
          Days Worked:
        </label>
        <input v-model="workDetails.daysWorked" id="daysWorked" type="number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      
      <!-- Weekly Picture -->
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="weekNumber">
          Week Number:
        </label>
        <input v-model="pictureDetails.weekNumber" id="weekNumber" type="number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="pictureUrl">
          Picture URL:
        </label>
        <input v-model="pictureDetails.pictureUrl" id="pictureUrl" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Submit Report
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      workDetails: {
        week: '',
        officeWorkStudyDone: '',
        supervisorName: '',
        hoursWorked: 0,
        daysWorked: 0,
      },
      pictureDetails: {
        weekNumber: 0,
        pictureUrl: '',
      }
    };
  },
  methods: {
    async submitReport() {
      const user = this.getUserData();
      if (!user || !user._id) {
        console.error('User ID not found in local storage');
        return;
      }

      const data = {
        week: this.workDetails.week,
        officeWorkStudyDone: this.workDetails.officeWorkStudyDone,
        supervisorName: this.workDetails.supervisorName,
        hoursWorked: this.workDetails.hoursWorked,
        daysWorked: this.workDetails.daysWorked,
        weekNumber: this.pictureDetails.weekNumber,
        pictureUrl: this.pictureDetails.pictureUrl,
      };

      try {
        const response = await axios.post(`http://localhost:9000/api/v1/user/${user._id}/attendance`, data);
        if (response.status === 200) {
          console.log('Attendance record updated successfully:', response.data);
          // Handle the success scenario here
        } else {
          console.error(`Unexpected response status: ${response.status}`);
        }
      } catch (error) {
        if (error.response) {
          console.error(`Error submitting report: ${error.response.status} - ${error.response.data.message}`);
        } else {
          console.error('Error submitting report:', error.message);
        }
      }
    },
    getUserData() {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
  }
};
</script>

<style scoped>
/* Add Tailwind CSS classes here */
</style>
