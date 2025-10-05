<template>
  <div class="flex mb-4">
    <div class="mb-4 w-2/3 pr-4">
      <h1 class="font-medium text-lg">
        {{ peopleDescription.name }} сказки
      </h1>
      <p v-html="peopleDescription.description"/>
    </div>
    <div class="rounded-lg w-1/3">
      <img :src="'/uploads/peoples/' + peopleDescription.image" class="rounded-lg"/>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
    <block-tale v-for="(tale, index) in tales" :key="index" :tale="tale"/>
  </div>
</template>

<script lang="ts" setup>
import {useFetch} from "nuxt/app";

const route = useRoute()
const peopleName = route.params.id;
const {data: tales} = useFetch(
    '/api/tales/', {
      query: {
        people_id: peopleName
      }
    }
)

const {data: peopleDescription} = await useFetch(
    '/api/peoples/' + route.params.id
)

</script>