<template>
  <div class="container mx-auto bg-green-100 rounded-lg shadow-md p-12 md:w-1/2 lg:w-2/3">
    <h2 class="text-2xl font-bold mb-4">Apply for Job</h2>
    <form @submit.prevent="submitApplication">
      <div class="mt-4">
        <label for="position" class="block text-xs font-medium leading-5 text-gray-700">Work Study</label>
        <input
          id="position"
          name="position"
          type="text"
          required
          v-model="applicationData.position"
          class="form-input mt-1 block w-full py-4 rounded-md shadow-sm"
        />
      </div>
      <div class="mt-4">
        <label for="matricNumber" class="block text-xs font-medium leading-5 text-gray-700">Matric Number</label>
        <input
          id="matricNumber"
          name="matricNumber"
          type="text"
          required
          v-model="applicationData.matricNumber"
          class="form-input mt-1 block w-full py-4 rounded-md shadow-sm"
        />
      </div>
      <div class="mt-4">
        <label for="cgpa" class="block text-xs font-medium leading-5 text-gray-700">CGPA</label>
        <input
          id="cgpa"
          name="cgpa"
          type="text"
          required
          v-model="applicationData.cgpa"
          class="form-input mt-1 block w-full py-4 rounded-md shadow-sm"
        />
      </div>
      <div class="mt-4">
        <label for="hasDisciplinaryIssues" class="block text-xs font-medium leading-5 text-gray-700">Has Disciplinary Issues</label>
        <select
          id="hasDisciplinaryIssues"
          name="hasDisciplinaryIssues"
          v-model="applicationData.hasDisciplinaryIssues"
          class="form-select mt-1 block w-full py-4 rounded-md shadow-sm"
        >
          <option :value="false">False</option>
          <option :value="true">True</option>
        </select>
      </div>
      <div class="mt-4">
        <label for="imageOfGpa" class="block text-xs font-medium leading-5 text-gray-700">Image of GPA</label>
        <input
          id="imageOfGpa"
          name="imageOfGpa"
          type="file"
          @change="handleFileUpload"
          class="form-input mt-1 block w-1/2 py-4 rounded-md shadow-sm"
        />
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
        cgpa: "",
        hasDisciplinaryIssues: false,
        imageOfGpa: null,
      },
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.applicationData.imageOfGpa = file;
    },
    validateMatricNumber() {
      const matricNumberRegex = /^[0-9]{10}$/;
      return matricNumberRegex.test(this.applicationData.matricNumber);
    },
    validateCgpa() {
      const cgpa = parseFloat(this.applicationData.cgpa);
      return !isNaN(cgpa) && cgpa >= 0 && cgpa <= 4.0;
    },
    async submitApplication() {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          console.error("User ID not found in local storage");
          return;
        }

        if (!this.validateMatricNumber()) {
          window.alert("Matric Number must be exactly 10 digits.");
          return;
        }

        if (!this.validateCgpa()) {
          window.alert("CGPA must be a valid number between 0 and 4.0.");
          return;
        }

        const formData = new FormData();
        for (let key in this.applicationData) {
          formData.append(key, this.applicationData[key]);
        }

        await axios.post(
          `http://localhost:9000/api/v1/user/${userId}/aply`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          }
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
        cgpa: "",
        hasDisciplinaryIssues: false,
        imageOfGpa: null,
      };
    },
  },
};
</script>
