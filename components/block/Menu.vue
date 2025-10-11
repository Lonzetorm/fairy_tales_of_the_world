<template>
  <div class="rounded-lg mb-4 bg-green-500">
    <NuxtLink :to="'/peoples/'" class="rounded-lg w-100 block py-3 px-3 border-solid border-2 border-green-500 hover:border-white hover:cursor-pointer hover:text-white rounded">
      По народам
    </NuxtLink>
    <NuxtLink :to="'/authors/'" class="rounded-lg w-100 block py-3 px-3 border-solid border-2 border-green-500 hover:border-white hover:cursor-pointer hover:text-white rounded">
      Авторские сказки
    </NuxtLink>
    <li v-for="category in categories" class="rounded-lg border-solid border-2 border-green-500 hover:border-white hover:cursor-pointer hover:text-white rounded">
      <NuxtLink :to="'/categories/' + category.code" class="w-100 block py-3 px-3">
        {{category.name }}
      </NuxtLink>
    </li>
  </div>
</template>

<script lang="ts" setup>
import {useFetch} from "nuxt/app";

const { data: categories } = useFetch('/api/categories/')
console.log('categories', categories)
</script>

<style scoped>

</style>