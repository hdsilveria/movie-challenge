import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { getMovies } from '@/services/models/getMovies'
import type { Movie } from '@/models/movie'

export const useMovieStore = defineStore('movie', () => {
  const movie = ref<Movie[]>([])
  const loading = ref<boolean>(false)

  const getMovie = computed(() => movie.value)
  const getLoading = computed(() => loading.value)
  
  function setMovie(value: getMovies) {
    movie.value = value.results
  }

  function setLoading(value: boolean){
    loading.value = value
  }

  return { movie, getMovie, getLoading, setMovie, setLoading }
})
