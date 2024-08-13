<template>
  <div class="flex mb-4">
    <div class="mb-4 w-2/3 pr-4">
      <h1 class="font-medium text-lg">
        {{ peopleDescription.name }} сказки
      </h1>
      <p v-html="peopleDescription.description"/>
    </div>
    <div class="rounded-lg w-1/3">
      <img src="/images/tanuki.png" class="rounded-lg"/>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
    <div
        v-for="(tale, index) in tales" :key="index"
        class="border border-solid border-gray-200 rounded-lg p-4 hover:border-green-400"
    >
      <NuxtLink :to="'/tales/' + tale._id">
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
        people_id: route.params.id
      }
    }
)

const {data: peopleDescription} = await useFetch(
    '/api/peoples/' + route.params.id
)

</script>