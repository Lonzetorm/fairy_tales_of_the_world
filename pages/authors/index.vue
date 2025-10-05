<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
    <div
        v-for="(author, index) in authors" :key="index"
        class="border border-solid border-gray-200 rounded-lg p-4 hover:border-green-400"
    >
      <NuxtLink :to="'/authors/' + author.code">
        <h2 class="font-bold">
          {{ author.name }}
        </h2>
        <p>
<!--          {{ people.description }}-->
          Возможно, тут будет какой-то текст
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useFetch} from "nuxt/app";

const {data: authors} = useFetch(
    '/api/authors'
)

</script>