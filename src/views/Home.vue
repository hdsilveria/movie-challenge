<script setup lang="ts">
  import { onMounted } from 'vue'
  import ListMovies from '@/components/ListMovies/Index.vue'
  import { useMovieStore } from '@/stores/movie'
  import MovieService from '@/services/movie'

  const store = useMovieStore()

  onMounted(async () => {
    store.setLoading(true)

    await MovieService.getListMovie().then((res) => {
      store.setMovie(res)
      store.setLoading(false)
    })
  })

</script>

<template>
  <div class="page-home">
    <div class="page-home__title">
      <h1>
        <span>Teste tecnico de </span><b>listagem de filmes</b>
      </h1>
    </div>
    <ListMovies />
  </div>
</template>

<style scoped lang="scss">
  .page-home {
    &__title {
      h1 {
        text-align: center;
        padding-bottom: 0.1em;

        &:before {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100px;
          height: 1px;
          content: "";
          left: 50%;
          margin-left: -30px;
          background-color: #777;
        }

        span {
          font-weight: 300;
          word-spacing: 3px;
          line-height: 2em;
          padding-bottom: 0.35em;
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
</style>
