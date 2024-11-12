<template>
  <div>
    <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="bg-black bg-opacity-75 overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-full inset-0 max-h-full">
      <div class="relative p-4 w-full max-w-md max-h-full m-auto mt-20">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700" v-click-outside="close">
          <!-- Modal header -->
          <div class="items-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl text-center font-semibold text-gray-900 dark:text-white">
              Вы действительно хотите удалить данный элемент?
            </h3>
          </div>
          <!-- Modal body -->
          <div class="flex p-4 md:p-5 justify-evenly text-white">
            <button class="bg-green-600 w-20 rounded-lg">
              Да
            </button>
            <button @click="close" class="bg-red-600 w-20 rounded-lg">
              Нет
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useMainStore} from "../stores/main.ts";

const store = useMainStore()
const close = () => {
  store.modalDeleteConfirm = false
}

</script>
