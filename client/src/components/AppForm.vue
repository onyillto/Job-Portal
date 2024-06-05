<template>
  <div class="bg-white rounded-lg shadow-md p-12">
    <h2 class="text-2xl font-bold mb-4">Update info</h2>
    <form @submit.prevent="submitApplication">
      <div v-for="input in formInputs" :key="input.name" class="mt-4">
        <label :for="input.name" class="block text-sm font-medium leading-5 text-gray-700">{{ input.label }}</label>
        <select v-if="input.type === 'dropdown'" v-model="applicationData[input.name]" class="form-select mt-1 block w-full py-4 rounded-md shadow-sm">
          <option v-for="option in input.options" :value="option.value">{{ option.label }}</option>
        </select>
        <input v-else :id="input.name" :name="input.name" :type="input.type" required v-model="applicationData[input.name]" class="form-input mt-1 block w-full py-4 rounded-md shadow-sm" />
      </div>

      <div class="mt-6">
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
        >
          Submit Application
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      applicationData: {
       
        matricNumber: "",
        phoneNumber: "",
        supervisorNumber: "",
        
      },
      formInputs: [

        
        { name: "matricNumber", label: "Matric Number", type: "text" },
        { name: "phoneNumber", label: "Phone Number", type: "tel" },
        { name: "supervisorNumber", label: "Supervisor Number", type: "text" },
        
      ],
    };
  },
  methods: {
    async submitApplication() {
      try {
        await axios.post(
          "http://localhost:9000/api/v1/user/job-signup",
          this.applicationData
        );
        console.log("Application submitted successfully");
        this.clearForm();
        window.alert("Your application has been submitted successfully. The employer will contact you soon.");
      } catch (error) {
        console.error("Error submitting application:", error);
      }
    },
    clearForm() {
      this.applicationData = {
        userName: "",
        userEmail: "",
        matricNumber: "",
        phoneNumber: "",
        supervisorNumber: "",
        officeWork: "",
        attendancePercentage: "",
        attendanceForm: "",
      };
    },
  },
};
</script>
 