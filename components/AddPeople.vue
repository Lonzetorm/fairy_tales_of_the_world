<template>
  <div class="border border-gray-200 p-4 rounded-lg mt-10">
    <h2 class="font-medium mb-2">Добавить народ</h2>
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="name">
          Название народа
        </label>
        <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
            id="name" type="text" placeholder="Введите название народа">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="description">
          Описание
        </label>
        <textarea rows="4"
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                  id="description" placeholder="Введите описание"/>
      </div>
      <div class="flex justify-end">
        <button
            class="bg-green-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="addPeople"
        >
          Добавить
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

function addPeople() {
  $fetch(
      '/api/peoples/peopleSet', {
        method: 'POST',
        body: {
          name: 'name',
          description: 'me',
          code: 'meeee'
        }
      }
  )

}
</script>
