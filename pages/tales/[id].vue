<template>
  <div>
    <div class="border border-solid border-gray-200 rounded-lg p-4">
      <h1 class="font-bold mb-3 text-center">
        {{ tale.name }}
      </h1>
      <p v-html="tale.text"/>
    </div>
    <Comments/>
  </div>
</template>

<script lang="ts" setup>
import {useFetch} from "nuxt/app";

const route = useRoute()
const {data: tale, error} = await useFetch(
    '/api/tales/' + route.params.id
)
if (error.value) {
  console.log(error.value)
    throw createError({statusCode: 404, statusMessage: "Page not found.", fatal: true})
  }

</script>
<style scoped>
img {
  max-height: 600px !important;
}
</style>