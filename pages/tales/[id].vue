<template>
  <div>
    <div class="border border-solid border-gray-200 rounded-lg p-4">
      <h1 class="font-bold mb-3 text-center">
        {{ tale.name }}
      </h1>
<!--      <NuxtImg class="w-1/2 float-left mr-4 rounded-lg" format="webp" src="images/kolobok.jpg" alt="kolobok"/>-->
      <p>
        {{ tale.text }}
      </p>
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