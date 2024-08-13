<template>
  <div class="w-100">
    <div class="rounded-lg mb-4 bg-green-500 w-100 py-3 px-3 border-solid border-2 border-green-500 hover:border-white hover:cursor-pointer hover:text-white rounded">
      <NuxtLink :to="'/peoples/'">
        По народам
      </NuxtLink>
    </div>
    <ul class="rounded-lg bg-green-500 mb-4">
      <li v-for="category in categories" class="rounded-lg py-3 px-3 border-solid border-2 border-green-500 hover:border-white hover:cursor-pointer hover:text-white rounded">
        <NuxtLink :to="'/categories/' + category.code">
          {{category.name }}
        </NuxtLink>
      </li>
    </ul>
    <div class="rounded-lg bg-green-300 w-100 py-3 px-3 border-solid border-2 border-green-500 hover:border-white hover:cursor-pointer hover:text-white rounded">
      <NuxtLink :to="'/add_fairytale/'" class="flex justify-between">
        <p class="mr-4">
          Добавить сказку
        </p>
        <PlusIcon/>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {useFetch} from "nuxt/app";

  const { data: categories } = useFetch('/api/categories/')
  
</script>
