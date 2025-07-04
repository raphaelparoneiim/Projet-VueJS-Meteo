<template>
  <div>
    <h1>Historique des recherches</h1>
    <ul>
      <li v-for="entry in weatherStore.history" :key="entry.date">
        {{ entry.date }} - {{ entry.city }} - {{ entry.temp }}°C, {{ entry.desc }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useWeatherStore } from '../stores/weather'
const weatherStore = useWeatherStore()
</script>
