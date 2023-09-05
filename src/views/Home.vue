<script setup lang="ts">
  import { onMounted } from 'vue'
  import ListMovies from '@/components/ListMovies/Index.vue'
  import { useMovieStore } from '@/stores/movie'
  import MovieService from '@/services/movie'

  const store = useMovieStore()

  onMounted(async () => {
    store.setMovie(await MovieService.getListMovie())
    console.log(store.getMovie)
  })

</script>

<template>
  <div>
    <ListMovies />
  </div>
</template>
