import { defineStore } from 'pinia'

const STORAGE_KEY = 'weather-history'

const fakeData = {
  Paris: { temp: 18, humidity: 70, desc: 'Nuageux' },
  Londres: { temp: 15, humidity: 80, desc: 'Pluvieux' },
  Tokyo: { temp: 22, humidity: 60, desc: 'Ensoleillé' },
  NewYork: { temp: 20, humidity: 65, desc: 'Partiellement nuageux' },
  Sydney: { temp: 25, humidity: 55, desc: 'Soleil' }
}

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    currentCity: null,
    currentWeather: null,
    history: JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  }),
  actions: {
    searchCity(city) {
      if (!fakeData[city]) {
        this.currentCity = null
        this.currentWeather = null
        return false
      }
      this.currentCity = city
      this.currentWeather = fakeData[city]
      this.addToHistory(city, fakeData[city])
      return true
    },
    addToHistory(city, weather) {
      const entry = { city, ...weather, date: new Date().toLocaleString() }
      this.history.unshift(entry)
      if (this.history.length > 10) this.history.pop()
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.history))
    }
  }
})
