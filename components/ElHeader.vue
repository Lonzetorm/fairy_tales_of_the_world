<template>
    <header class="border-b bg-green-500">
      <div class="flex items-center justify-between h-12 text-white max-w-screen-xl mx-auto">
        <MenuIcon class="md:hidden ml-4"/>
        <NuxtLink class="dark:text-purple-500 font-bold text-logo-main ml-4" to="/">
          СНМ
        </NuxtLink>
        <div class="flex">
          <LoginIcon
              class="mr-4 my-auto cursor-pointer"
              @click="store.modalAuthCall = true"
              v-if="useState('user').value === undefined"
          />
          <LogoutIcon
              class="mr-4 my-auto cursor-pointer"
              @click="userLogout()"
              v-if="useState('user').value !== undefined"
          />
          <Search class="mr-4 hidden md:block"/>
          <SearchIcon class="mr-4 my-auto md:hidden"/>
        </div>
      </div>
    </header>
</template>

<script setup lang="ts">
import {useState} from "nuxt/app";
import { userLogout } from '~/composables/useAuth'
const store = useMainStore()

//todo: Заменить проверку залогинен ли на использование isLoggedIn
// const isLoggedIn = await useLoggedIn()

</script>