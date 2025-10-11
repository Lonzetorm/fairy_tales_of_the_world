<template>
  <div class="mb-4">
    <h2 class="mb-4 text-2xl font-bold">
      Популярные сказки
    </h2>
    <div class="grid md:grid-cols-4 gap-5">
      <block-tale v-for="(tale, index) in tales" :key="index" :tale="tale"/>
    </div>
  </div>
</template>

<script setup>
import {useFetch} from "nuxt/app";

const {data: tales} = useFetch(
    '/api/tales/', {
      query: {
        popular: true
      }
    }
)
</script>
