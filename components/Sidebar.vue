<template>
  <div class="w-100">
    <div class="rounded-lg mb-4 bg-green-500 w-100 border-solid border-2 border-green-500 hover:border-white hover:cursor-pointer hover:text-white rounded">
      <NuxtLink :to="'/peoples/'" class="w-100 block py-3 px-3">
        По народам
      </NuxtLink>
    </div>
    <ul class="rounded-lg bg-green-500 mb-4">
      <li v-for="category in categories" class="rounded-lg border-solid border-2 border-green-500 hover:border-white hover:cursor-pointer hover:text-white rounded">
        <NuxtLink :to="'/categories/' + category.code" class="w-100 block py-3 px-3">
          {{category.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import {useFetch} from "nuxt/app";

  const { data: categories } = useFetch('/api/categories/')
  
</script>
