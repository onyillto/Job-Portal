<template>
  <div class="container mx-auto p-4">
    <h3 class="text-2xl font-semibold text-gray-800 mb-4">{{ userName }}'s Attendance</h3>
    <div v-if="attendance.length > 0">
      <div v-for="(record, index) in attendance" :key="index" class="record-card mb-6 p-4 bg-white rounded-lg shadow-md">
        <p class="text-lg font-medium text-gray-700 mb-2">Week {{ record.week }}</p>
        <div class="record-details grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p class="text-sm font-medium text-gray-600">Office/Work/Study Done:</p>
            <p class="text-sm text-gray-800">{{ record.officeWorkStudyDone }}</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-600">Supervisor Name:</p>
            <p class="text-sm text-gray-800">{{ record.supervisorName }}</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-600">Hours Worked:</p>
            <p class="text-sm text-gray-800">{{ record.hoursWorked }}</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-600">Days Worked:</p>
            <p class="text-sm text-gray-800">{{ record.daysWorked }}</p>
          </div>
        </div>
        <div class="mt-4">
          <a :href="record.pictureUrl" target="_blank" class="text-blue-500 underline">View Document</a>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="text-sm text-gray-600">No attendance records found.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      attendance: [],
      userName: ''
    };
  },
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.fetchAttendance();
  },
  methods: {
    async fetchAttendance() {
      try {
        const response = await axios.get(`http://localhost:9000/api/v1/user/report/${this.userId}/attendance`);
        this.attendance = response.data.attendance;
        if (this.attendance.length > 0) {
          this.userName = this.attendance[0].userId.name;
        }
      } catch (error) {
        console.error('Error fetching attendance records:', error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.record-card {
  transition: transform 0.2s ease-in-out;
}

.record-card:hover {
  transform: translateY(-5px);
}

.record-details {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

.record-details > div {
  margin-bottom: 1rem;
}

@media (min-width: 640px) {
  .record-details > div {
    margin-bottom: 0;
  }
}
</style>
