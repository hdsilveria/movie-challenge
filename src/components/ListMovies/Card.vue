<script lang="ts" setup>
  import type { Movie } from '@/models/movie'
  import { useMovieStore } from '@/stores/movie';
  import { computed } from 'vue';
  import StarRating from 'vue-star-rating'
  
  const store = useMovieStore()
  const loading = computed(() => store.getLoading)

  interface card {
    card: Movie
  }
  defineProps({
    card: {
      type: Object,
      required: true
    }
  }) as card
</script>

<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    height="450"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="250"
      :src="`https://image.tmdb.org/t/p/w200/${card.poster_path}`"
    ></v-img>

    <v-card-item>
      <v-card-title>{{ card.title ? card.title : card.name }}</v-card-title>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      <star-rating 
        :inline="true" 
        :star-size="20" 
        :read-only="true" 
        :show-rating="false"
        :round-start-rating="false"
        :rating="parseFloat((card.vote_average - 5).toFixed(1))"
      />

      <div class="text-grey ms-4">
        {{ (card.vote_average - 5).toFixed(1)}} ({{card.vote_count}})
      </div>
    </v-row>
      <div class="mt-5">{{card.overview.slice(0, 200)}}...</div>
    </v-card-text>
  </v-card>
</template>