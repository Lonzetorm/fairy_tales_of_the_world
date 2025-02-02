<template>
  <div>
    <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="bg-black bg-opacity-75 overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-full inset-0 max-h-full">
      <div class="relative p-4 w-full max-w-7xl max-h-full m-auto mt-20">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700" v-click-outside="close">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Поиск
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
                <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Искать</label>
                <div class="flex">
                  <input v-model="text" type="text" name="email" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Что ищем?" required />
                  <button style="margin-left: -100px; width: 100px;" class="bg-green-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button">
                    Найти
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useMainStore()

function close() {
  store.modalSearch = false
}

</script>
