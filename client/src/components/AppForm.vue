<template>
  <div class="bg-white rounded-lg shadow-md p-12">
    <h2 class="text-2xl font-bold mb-4">Apply for Job</h2>
    <form @submit.prevent="submitApplication">
      <div v-for="input in formInputs" :key="input.name" class="mt-4">
        <label :for="input.name" class="block text-sm font-medium leading-5 text-gray-700">{{ input.label }}</label>
        <input
          v-if="input.type !== 'dropdown'"
          :id="input.name"
          :name="input.name"
          :type="input.type"
          required
          v-model="applicationData[input.name]"
          class="form-input mt-1 block w-full py-4 rounded-md shadow-sm"
        />
        <select
          v-else
          v-model="applicationData[input.name]"
          class="form-select mt-1 block w-full py-4 rounded-md shadow-sm"
        >
          <option v-for="option in input.options" :value="option.value">{{ option.label }}</option>
        </select>
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
        position: "",
        matricNumber: "",
        cgpa:" " ,
        applicationStatus: "pending",
        hasDisciplinaryIssues: "",
        imageOfGpa: "",
      },
      formInputs: [
        { name: "position", label: "Position", type: "text" },
        { name: "matricNumber", label: "Matric Number", type: "text" },
        { name: "cgpa", label: "CGPA", type: "number" },
        {
          name: "hasDisciplinaryIssues",
          label: "Has Disciplinary Issues",
          type: "dropdown",
          options: [
            { label: "False", value: false },
            { label: "True", value: true },
          ],
        },
        { name: "imageOfGpa", label: "Image of GPA", type: "url" },
      ],
    };
  },
  methods: {
    async submitApplication() {
      try {
        // Get user ID from local storage
        const userId = localStorage.getItem("userId");

        // Make sure userId is available
        if (!userId) {
          console.error("User ID not found in local storage");
          return;
        }

        // Add userId to the endpoint URL
        await axios.post(
          `http://localhost:9000/api/v1/user/${userId}/aply`,
          this.applicationData
        );

        console.log("Application submitted successfully");
        this.clearForm();
        window.alert("Application submitted successfully. View in your profile.");
      } catch (error) {
        console.error("Error submitting application:", error);
      }
    },
    clearForm() {
      this.applicationData = {
        position: "",
        matricNumber: "",
        cgpa: null,
        applicationStatus: "pending",
        hasDisciplinaryIssues: false,
        imageOfGpa: "",
      };
    },
  },
};
</script>
