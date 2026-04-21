import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDentalStore = defineStore('dental', () => {
  const baseUrl = ref('http://157.22.192.187')

  return { baseUrl }
})
