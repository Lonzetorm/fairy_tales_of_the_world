<template>
  <div>
    <ul>
      <li v-for="category in categories">
        <NuxtLink :to="category.id">
          {{ category.name }}
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
