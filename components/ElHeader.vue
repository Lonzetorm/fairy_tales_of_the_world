<template>
    <header class="border-b bg-green-500 px-4 md:px-0 md:px-[126px]">
      <div class="flex items-center justify-between h-12 text-white max-w-screen-xl mx-auto">
<!--        <MobileMenu v-if="store.mobileMenuShown"/>-->
        <NuxtLink class="dark:text-purple-500 font-bold text-logo-main" to="/">
          Все сказки
        </NuxtLink>
        <div class="flex">
          <LoginIcon
              class="mr-4 my-auto cursor-pointer"
              @click="store.modalAuthCall = true"
              v-if="useState('user').value === undefined"
          />
          <NuxtLink
              to="/account"
              class="mr-4 my-auto cursor-pointer"
              v-if="useState('user').value !== undefined"
          >
            <UserIcon/>
          </NuxtLink>
          <LogoutIcon
              class="mr-4 my-auto cursor-pointer"
              @click="logout"
              v-if="useState('user').value !== undefined"
          />
          <SearchIcon @click="store.modalSearch = true" class="my-auto mr-4 cursor-pointer"/>
          <div class="relative">
            <MenuIcon @click="toggleModalMenu" class="my-auto"/>
            <block-menu
                v-if="store.menuShown"
                @click="toggleModalMenu"
                class="absolute top-10 right-0 w-[200px]"
            />
          </div>
        </div>
      </div>
    </header>
</template>

<script setup lang="ts">
import {useState} from "nuxt/app";
import { userLogout, useLoggedIn } from '~/composables/useAuth'
const store = useMainStore()
const logout = userLogout

//todo: Заменить проверку залогинен ли на использование isLoggedIn
const isLoggedIn = await useLoggedIn()

const toggleModalMenu = () => {
  store.mobileMenuShown = !store.mobileMenuShown;
  store.menuShown = !store.menuShown
}

</script>