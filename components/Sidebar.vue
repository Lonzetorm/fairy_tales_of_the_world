<template>
  <div>
    <ul class="rounded-lg bg-green-500">
      <li v-for="category in categories" class="py-3 px-3 hover:border-solid hover:border-2 hover:border-white hover:cursor-pointer hover:text-white rounded">
        <NuxtLink :to="'/categories/' + category.code">
          {{category.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import {useFetch} from "nuxt/app";
  
  const route = useRoute()
  const {data: categories} = useFetch('/api/categories/')
  
  </script>
