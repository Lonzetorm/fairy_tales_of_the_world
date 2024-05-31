<template>
  <div class="w-100">
    <div class="rounded-lg mb-4 bg-green-500 w-100 py-3 px-3 border-solid border-2 border-green-500 hover:border-white hover:cursor-pointer hover:text-white rounded">
      <NuxtLink :to="'/peoples/'">
        По народам
      </NuxtLink>
    </div>
    <ul class="rounded-lg bg-green-500">
      <li v-for="category in categories" class="rounded-lg py-3 px-3 border-solid border-2 border-green-500 hover:border-white hover:cursor-pointer hover:text-white rounded">
        <NuxtLink :to="'/categories/' + category.code">
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
