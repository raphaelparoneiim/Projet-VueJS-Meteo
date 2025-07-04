<template>
  <div>
    <SearchForm />
    <WeatherCard :city="weatherStore.currentCity" :weather="weatherStore.currentWeather" />
  </div>
</template>

<script setup>
import SearchForm from '../components/SearchForm.vue'
import WeatherCard from '../components/WeatherCard.vue'
import { useWeatherStore } from '../stores/weather'

const weatherStore = useWeatherStore()
</script>
