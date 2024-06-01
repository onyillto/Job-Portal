<template>
  <div class="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
    <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
      <div class="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
        <div>
          <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
            Submit Job
          </h6>
          <p class="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
            <strong>Fill in the details below</strong>
          </p>
        </div>
      </div>
      <div class="p-6">
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label class="sr-only" for="company">Company</label>
            <input
              v-model="job.company"
              class="w-full rounded-lg text-purple-800 p-3 text-md font-bold"
              placeholder="Company"
              type="text"
              id="company"
              required
            />
          </div>

          <div>
            <label class="sr-only" for="field">Field</label>
            <input
              v-model="job.field"
              class="w-full rounded-lg text-purple-800 p-3 text-md font-bold"
              placeholder="Field"
              type="text"
              id="field"
              required
            />
          </div>

          <div>
            <label class="sr-only" for="studentRequired">Students Required</label>
            <input
              v-model="job.studentRequired"
              class="w-full rounded-lg text-purple-800 p-3 text-md font-bold"
              placeholder="Students Required"
              type="number"
              id="studentRequired"
              required
            />
          </div>

          <div>
            <label class="sr-only" for="totalApplicantsRequired">Total Applicants Required</label>
            <input
              v-model="job.totalApplicantsRequired"
              class="w-full rounded-lg border- text-purple-800 p-3 text-md font-bold"
              placeholder="Total Applicants Required"
              type="number"
              id="totalApplicantsRequired"
              required
            />
          </div>

          <div>
            <label class="sr-only" for="Position">Position</label>
            <input
              v-model="job.Position"
              class="w-full rounded-lg text-purple-800 p-3 text-md font-bold"
              placeholder="Position"
              type="text"
              id="Position"
              required
            />
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white"
            >
              Submit Job
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Define reactive job object
const job = ref({
  company: '',
  field: '',
  studentRequired: 0,
  totalApplicantsRequired: 0,
  Position: '',
  applicants: []  // Array to store applicant user IDs
});

// Define method to handle form submission
const submitForm = async () => {
  try {
    await axios.post('http://localhost:9000/api/v1/user/post-job', job.value);
    alert('Job submitted successfully');
    // Reset form
    job.value = {
      company: '',
      field: '',
      studentRequired: 0,
      totalApplicantsRequired: 0,
      Position: '',
      applicants: []
    };
  } catch (error) {
    console.error('Error submitting job:', error);
    alert('There was an error submitting the job');
  }
};
</script>
