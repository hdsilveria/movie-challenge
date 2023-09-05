import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie', () => {
  const movie = ref([])

  const getMovie = computed(() => movie.value)
  
  function setMovie(value: any) {
    movie.value = value
  }

  return { movie, getMovie, setMovie }
})
