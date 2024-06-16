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
        <label class="block text-gray-700 text-sm font-bold mb-2" for="pictureFile">
          Picture:
        </label>
        <input @change="onFileChange" id="pictureFile" type="file" accept="image/*" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Submit Report
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

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
        pictureFile: null,
      }
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      this.pictureDetails.pictureFile = file;
    },
    async submitReport() {
      const user = this.getUserData();
      if (!user || !user._id) {
        console.error('User ID not found in local storage');
        return;
      }

      const formData = new FormData();
      formData.append('week', this.workDetails.week);
      formData.append('officeWorkStudyDone', this.workDetails.officeWorkStudyDone);
      formData.append('supervisorName', this.workDetails.supervisorName);
      formData.append('hoursWorked', this.workDetails.hoursWorked);
      formData.append('daysWorked', this.workDetails.daysWorked);
      if (this.pictureDetails.pictureFile) {
        formData.append('pictureFile', this.pictureDetails.pictureFile);
      }

      try {
        const response = await axios.post(`http://localhost:9000/api/v1/user/${user._id}/attendance`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (response.status === 200) {
          alert('Attendance record updated successfully');
          this.router.push('/attendance');
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

