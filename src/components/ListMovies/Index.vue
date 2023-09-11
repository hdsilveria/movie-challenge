<script setup lang="ts">
    import Card from '@/components/ListMovies/Card.vue'
    import { useMovieStore } from '@/stores/movie'
    import { computed } from 'vue'

    const store = useMovieStore()
    const movies = computed(() => store.getMovie) 
</script>

<template>
    <v-row>
        <v-col v-for="movie in movies" :key="movie.id" md="4">
            <Card :card="movie" />
        </v-col>
    </v-row>
</template>
