<template>
  <div>
    <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="bg-black bg-opacity-75 overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-full inset-0 max-h-full">
      <div class="relative p-4 w-full max-w-md max-h-full m-auto mt-20">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700" v-click-outside="close">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Авторизация
            </h3>
            <button type="button" @click="close" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5">
            <form class="space-y-4" action="#">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш email</label>
                <input v-model="email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш пароль</label>
                <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
              </div>
<!--              <div class="flex justify-between">-->
<!--                <div class="flex items-start">-->
<!--                  <div class="flex items-center h-5">-->
<!--                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />-->
<!--                  </div>-->
<!--                  <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Запомнить меня</label>-->
<!--                </div>-->
<!--                <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Забыли пароль?</a>-->
<!--              </div>-->
              <div v-if="errors" class="text-red-400">
                <ul class="block sm:inline">
                  <li v-for="[key, value] in errors">
                    {{ value.message }}
                  </li>
                </ul>
              </div>
              <button type="submit" @click.prevent="postLoginForm" class="w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Войти</button>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Не зарегистрированы? <span @click="toggleModal" class="text-blue-700 hover:underline dark:text-blue-500 cursor-pointer">Создать аккаунт</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { loginWithEmail } from "~/composables/useAuth";
import type { Ref } from "vue"

const store = useMainStore()
const email = ref('')
const password = ref('')

const errors: Ref<Map<string, { message: InputValidation; }> | undefined> = ref(new Map<string, { message: InputValidation }>())
let response: FormValidation

// definePageMeta({
//   middleware: 'guest'
// })

function toggleModal() {
  close()
  store.modalRegisterCall = true
}

function close() {
  store.modalAuthCall = false
}

async function postLoginForm() {
  response = await loginWithEmail(email.value, password.value)
  if (response.loggedIn) {
    close()
  } else {
    //todo: Поправить

    // errors.value = response.errors
  }
}

</script>
