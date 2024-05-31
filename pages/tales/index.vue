<template>
  <div class="ml-5 grid md:grid-cols-4 gap-5">
    <div
        v-for="(tale, index) in tales" :key="index"
        class="border border-solid border-gray-200 rounded-lg p-4 hover:border-green-400"
    >
      <NuxtLink :to="tale._id">
        <h2 class="font-bold">
          {{ tale.name }}
        </h2>
        <p>
          {{ tale.description }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useFetch} from "nuxt/app";

const route = useRoute()
const {data: tales} = useFetch(
    '/api/tales/', {
      query: {
        category_id: route.params.id
      }
    }
)

</script>