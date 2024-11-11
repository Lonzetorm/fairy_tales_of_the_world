<template>
  <div class="w-100 fixed max-h-full inset-0 bg-green-500">
    <button type="button" @click="closeMenu" class="end-2.5 text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close modal</span>
    </button>
    <div class="w-100 py-3 px-4 border-solid border-2 border-green-500 hover:border-white hover:cursor-pointer hover:text-white">
      <NuxtLink :to="'/peoples/'" @click.native="closeMenu">
        По народам
      </NuxtLink>
    </div>
    <hr>
    <ul class="mb-4">
      <li v-for="category in categories" class="py-3 px-4 border-solid border-2 border-green-500 hover:border-white hover:cursor-pointer hover:text-white">
        <NuxtLink :to="'/categories/' + category.code" @click.native="closeMenu">
          {{category.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {useFetch} from "nuxt/app";

const { data: categories } = useFetch('/api/categories/')
const store = useMainStore()

const closeMenu = () => {
  store.mobileMenuShown = false
}

</script>
