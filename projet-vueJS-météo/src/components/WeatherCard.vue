<template>
  <div v-if="weather" class="card">
    <h2>Météo à {{ city }}</h2>
    <p>Température : {{ weather.temp }} °C</p>
    <p>Humidité : {{ weather.humidity }} %</p>
    <p>Description : {{ weather.desc }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  city: String,
  weather: Object
})
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-top: 1rem;
  max-width: 250px;
  border-radius: 6px;
  background: #f9f9f9;
}
</style>
