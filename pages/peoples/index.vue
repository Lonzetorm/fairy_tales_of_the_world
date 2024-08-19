<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
    <div
        v-for="(people, index) in peoples" :key="index"
        class="border border-solid border-gray-200 rounded-lg p-4 hover:border-green-400"
    >
      <NuxtLink :to="'/peoples/' + people.code">
        <h2 class="font-bold">
          {{ people.name }}
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

const {data: peoples} = useFetch(
    '/api/peoples'
)

</script>