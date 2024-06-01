<template>
  <div id="app">
    <Navbar/>
    <router-view :trips="trips"/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';

const trips = ref([]);

const fetchTrips = () => {
  setTimeout(() => {
    trips.value = [
      {
        id: 1,
        destination: "Abia",
        departure: "Abuja",
        terminal: "Terminal A",
        date: "2024-05-22",
        numberOfSeats: 8,
        seatsLeft: 8,
        vehicleType: "Bus",
        vehicleImage: "/public/bus.jpg",
        price: 50,
        roundTrip: false,
        showReturnDate: false,
        returnDate: "",
      },
      {
        id: 2,
        destination: "Enugu",
        departure: "Abuja",
        terminal: "Terminal B",
        date: "2024-05-23",
        numberOfSeats: 4,
        seatsLeft: 4,
        vehicleType: "Mini Van",
        vehicleImage: "/public/bus.jpg",
        price: 70,
        roundTrip: false,
        showReturnDate: false,
        returnDate: "",
      },
      {
        id: 3,
        destination: "Delta",
        departure: "Abuja",
        terminal: "Terminal C",
        date: "2024-05-24",
        numberOfSeats: 15,
        seatsLeft: 15,
        vehicleType: "Luxurious Bus",
        vehicleImage: "/public/bus.jpg",
        price: 100,
        roundTrip: false,
        showReturnDate: false,
        returnDate: "",
      },
      {
        id: 4,
        destination: "Delta",
        departure: "Abuja",
        terminal: "Terminal C",
        date: "2024-05-25",
        numberOfSeats: 15,
        seatsLeft: 15,
        vehicleType: "Luxurious Bus",
        vehicleImage: "/public/bus.jpg",
        price: 100,
        roundTrip: false,
        showReturnDate: false,
        returnDate: "",
      },
    ];
  }, 1000); // Simulated delay
};

onMounted(() => {
  fetchTrips();
});
</script>

<style scoped></style>
