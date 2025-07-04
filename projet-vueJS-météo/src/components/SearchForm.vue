<template>
  <form @submit.prevent="onSubmit">
    <input v-model="city" placeholder="Entrez une ville (ex : Paris)" list="cities" required />
    <datalist id="cities">
      <option v-for="c in cities" :key="c" :value="c" />
    </datalist>
    <button type="submit">Chercher</button>
  </form>
  <p v-if="error" style="color:red;">Ville non trouvée.</p>
</template>

<script setup>
import { ref } from 'vue'
import { useWeatherStore } from '../stores/weather'

const weatherStore = useWeatherStore()
const city = ref('')
const error = ref(false)

const cities = ['Paris', 'Londres', 'Tokyo', 'NewYork', 'Sydney']

function onSubmit() {
  error.value = !weatherStore.searchCity(city.value.trim())
  if (!error.value) city.value = ''
}
</script>

<style scoped>
input {
  padding: 0.5rem;
  width: 200px;
  margin-right: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
}
</style>
