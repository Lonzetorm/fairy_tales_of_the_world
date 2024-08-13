<template>
  <div>
    <div class="border border-solid border-gray-200 rounded-lg p-4">
      <h1 class="font-bold mb-3 text-center">
        {{ tale.name }}
      </h1>
      <p v-html="tale.text"/>
    </div>
    <Comments/>
    <AddComment/>
  </div>
</template>

<script lang="ts" setup>
import {useFetch} from "nuxt/app";

const route = useRoute()
const {data: tale} = await useFetch(
    '/api/tales/' + route.params.id
)

</script>