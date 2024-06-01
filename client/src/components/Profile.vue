<template>
  <div class="container mx-auto p-8 bg-gray-100 min-h-screen">
    <!-- User Profile Section -->
    <div class="my-8 mx-auto w-full lg:w-3/5">
      <!-- User Information -->
      <div class="bg-blue-300 rounded-lg shadow-md p-8 mb-4">
        <h2 class="text-2xl font-bold mb-4">User Profile</h2>
        <!-- Display user data here -->
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Location:</strong> Covenant University</p>
        <p><strong>Field:</strong> Computer Science</p>
        <!-- Add more user data as needed -->
      </div>
    </div>

    <!-- Apply for Job Section -->
    <div class="mx-auto w-full lg:w-3/5">
      <!-- Job Application Form -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold mb-4">Apply for Job</h2>
        <form @submit.prevent="submitApplication">
          <!-- Form fields for job application -->
          <div class="mb-4">
            <label for="userName" class="block text-sm font-medium text-gray-700">User Name</label>
            <input type="text" id="userName" name="userName" v-model="applicationData.userName" class="mt-1 p-2 block w-full border-gray-300 rounded-md">
          </div>
          <div class="mb-4">
            <label for="matricNumber" class="block text-sm font-medium text-gray-700">Matric Number</label>
            <input type="text" id="matricNumber" name="matricNumber" v-model="applicationData.matricNumber" class="mt-1 p-2 block w-full border-gray-300 rounded-md">
          </div>
          <div class="mb-4">
            <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="text" id="phoneNumber" name="phoneNumber" v-model="applicationData.phoneNumber" class="mt-1 p-2 block w-full border-gray-300 rounded-md">
          </div>
          <div class="mb-4">
            <label for="supervisorNumber" class="block text-sm font-medium text-gray-700">Supervisor Number</label>
            <input type="text" id="supervisorNumber" name="supervisorNumber" v-model="applicationData.supervisorNumber" class="mt-1 p-2 block w-full border-gray-300 rounded-md">
          </div>
          <div class="mb-4">
            <label for="officeWork" class="block text-sm font-medium text-gray-700">Office Work</label>
            <input type="text" id="officeWork" name="officeWork" v-model="applicationData.officeWork" class="mt-1 p-2 block w-full border-gray-300 rounded-md">
          </div>
          <div class="mb-4">
            <label for="attendanceFormUrl" class="block text-sm font-medium text-gray-700">Attendance Form URL</label>
            <input type="url" id="attendanceFormUrl" name="attendanceFormUrl" v-model="applicationData.attendanceFormUrl" class="mt-1 p-2 block w-full border-gray-300 rounded-md">
          </div>
          <div class="mb-4">
            <label for="attendancePercent" class="block text-sm font-medium text-gray-700">Attendance Percentage</label>
            <input type="text" id="attendancePercent" name="attendancePercent" v-model="applicationData.attendancePercent" class="mt-1 p-2 block w-full border-gray-300 rounded-md">
          </div>
          <!-- Add more form fields as needed -->
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit Application</button>
        </form>
      </div>
    </div>

    <!-- Display filled application data -->
    <div v-if="isApplicationSubmitted" class="bg-white rounded-lg shadow-md p-8 mt-4 mx-auto w-full lg:w-3/5">
      <h2 class="text-2xl font-bold mb-4">Application Details</h2>
      <p><strong>User Name:</strong> {{ applicationData.userName }}</p>
      <p><strong>Matric Number:</strong> {{ applicationData.matricNumber }}</p>
      <p><strong>Phone Number:</strong> {{ applicationData.phoneNumber }}</p>
      <p><strong>Supervisor Number:</strong> {{ applicationData.supervisorNumber }}</p>
      <p><strong>Office Work:</strong> {{ applicationData.officeWork }}</p>
      <p><strong>Attendance Percentage:</strong> {{ applicationData.attendancePercent }}</p>
      <p v-if="applicationData.attendanceFormUrl"><strong>Attendance Form:</strong> <a :href="applicationData.attendanceFormUrl" target="_blank">{{ applicationData.attendanceFormUrl }}</a></p>
      <!-- Add more fields as needed -->
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      isApplicationSubmitted: false,
      applicationData: {
        userName: '',
        matricNumber: '',
        phoneNumber: '',
        supervisorNumber: '',
        officeWork: '',
        attendancePercent: '',
        attendanceFormUrl: ''
      }
    };
  },
  methods: {
   async submitApplication() {
  try {
    // Get the token from localStorage or wherever it's stored
    const token = localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjVhNGFlY2M5YjM1YmY1NWVmMTM3YjUiLCJpYXQiOjE3MTcyMTcxNDB9.fFqGc8yZZOxr1UOJ1O9LdYXi3KWWCGCdnB4gU4QbFZY'); // Replace 'token' with the actual key used to store the token

    // Set the headers with the token
    const headers = {
      'Authorization': `Bearer ${token}`
    };

    // Send a POST request to your backend API endpoint with the application data and headers
    const response = await axios.post('http://localhost:9000/api/v1/user/application', this.applicationData, { headers });
    
    // If the request is successful, set isApplicationSubmitted to true to display the filled form data
    this.isApplicationSubmitted = true;
    
    // Log the response data
    console.log('Application Data:', response.data.data);

    // Clear the form data after submission (optional)
    this.clearForm();

  } catch (error) {
    console.error('Error submitting application:', error);
    // Handle error
  }
}
,
    clearForm() {
      // Clear the form data
      this.applicationData = {
        userName: '',
        matricNumber: '',
        phoneNumber: '',
        supervisorNumber: '',
        officeWork: '',
        attendancePercent: '',
        attendanceFormUrl: ''
      };
    }
  }
}
</script>
