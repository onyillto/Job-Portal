<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    :style="{ backgroundImage: 'url(https://your-image-url.com/background.jpg)' }"
  >
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
        <form d="POST" action="#" @submit="registerUser">
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
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                placeholder="user@example.com"
                type="email"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div class="mt-6">
            <label for="location" class="block text-sm font-medium leading-5 text-gray-700">
              Location
            </label>
            <input
              id="location"
              name="location"
              placeholder="Location"
              type="text"
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>

          <div class="mt-6">
            <label for="field" class="block text-sm font-medium leading-5 text-gray-700">
              Field
            </label>
            <input
              id="field"
              name="field"
              placeholder="Field"
              type="text"
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
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
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
    const response = await axios.post('http://localhost:9000/api/v1/user/register', {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('password_confirmation'),
      location: formData.get('location'),
      field: formData.get('field'),
    });

    console.log('User registered successfully:', response.data);

    // Show a pop-up notification
    alert('User registered successfully. Click OK to proceed to login.');

    // Redirect to login page after successful registration
    router.push('/login');
  } catch (error) {
    console.error('Registration failed:', error);
  }
};
</script>

