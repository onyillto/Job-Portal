<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Create a new account
      </h2>
      <p class="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
        Or
        <router-link
          to="/login"
          class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
        >
          login to your account
        </router-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form @submit.prevent="registerUser">
          <div>
            <label for="name" class="block text-sm font-medium leading-5 text-gray-700">
              Name
            </label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input
                id="name"
                name="name"
                placeholder="John Doe"
                type="text"
                required
                class="form-input"
              />
            </div>
          </div>
          <div class="mt-6">
            <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
              Email address
            </label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input
                id="email"
                name="email"
                placeholder="user@stu.cu.edu.ng"
                type="email"
                required
                class="form-input"
              />
            </div>
          </div>
          <div class="mt-6">
            <label for="level" class="block text-sm font-medium leading-5 text-gray-700">
              Level
            </label>
            <select
              id="level"
              name="level"
              required
              class="form-select"
            >
              <option value="" disabled selected>Select Level</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
              <option value="M.sc">M.sc</option>
            </select>
          </div>
          <div class="mt-6">
            <label for="course" class="block text-sm font-medium leading-5 text-gray-700">
              Course
            </label>
            <input
              id="course"
              name="course"
              placeholder="Course"
              type="text"
              required
              class="form-input"
            />
          </div>
          <div class="mt-6">
            <label for="matricNumber" class="block text-sm font-medium leading-5 text-gray-700">
              Matric Number
            </label>
            <input
              id="matricNumber"
              name="matricNumber"
              placeholder="Matric Number"
              type="text"
              required
              class="form-input"
            />
          </div>
          <div class="mt-6">
            <label for="gender" class="block text-sm font-medium leading-5 text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              required
              class="form-select"
            >
              <option value="" disabled selected>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="mt-6">
            <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
              Password
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="password"
                name="password"
                type="password"
                required
                class="form-input"
              />
            </div>
          </div>
          <div class="mt-6">
            <label for="password_confirmation" class="block text-sm font-medium leading-5 text-gray-700">
              Confirm Password
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                required
                class="form-input"
              />
            </div>
          </div>
          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Create account
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const registerUser = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  try {
    // Validate email ends with "@stu.cu.edu.ng"
    const email = formData.get('email');
    if (!email.endsWith('@stu.cu.edu.ng')) {
      alert('Please use a valid "@stu.cu.edu.ng" email address.');
      return;
    }

    const response = await axios.post('http://localhost:9000/api/v1/user/register', {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('password_confirmation'),
      level: formData.get('level'),
      course: formData.get('course'),
      matricNumber: formData.get('matricNumber'),
      gender: formData.get('gender'),
    });

    console.log('User registered successfully:', response.data);

    // Show a pop-up notification
    alert('User registered successfully. Click OK to proceed to login.');

    // Redirect to login page after successful registration
    router.push('/login');
  } catch (error) {
    if (error.response && error.response.status === 400) {
      // User already exists
      alert('User already exists. Please login instead.');
      router.push('/login');
    } else {
      console.error('Registration failed:', error);
    }
  }
};
</script>

<style scoped>
.form-input {
  appearance: none;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.form-select {
  appearance: none;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>



