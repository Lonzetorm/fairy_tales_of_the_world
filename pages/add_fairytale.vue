<template>
  <div class="border border-gray-200 p-4 rounded-lg">
    <h2 class="font-medium mb-2">Добавить сказку</h2>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="name">
          Название
        </label>
        <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
            id="name" type="text" placeholder="Введите название сказки" v-model="name">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="name">
          Народ
        </label>
        <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
            id="people" type="text" placeholder="Выберите народ" v-model="people">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="name">
          Категория
        </label>
        <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
            id="category" type="text" placeholder="Выберите категорию" v-model="category">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="description">
          Описание
        </label>
        <textarea rows="4"
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                  id="description" placeholder="Введите описание сказки" v-model="description"/>
      </div>
    <div>
      <input type="file">
    </div>
      <div class="mb-4">
        <p class="block text-gray-700 mb-2">
          Текст
        </p>
        <TiptapEditor v-model="text" id="text"/>
      </div>
      <div class="flex justify-end">
        <button
            class="bg-green-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="addFairytale"
        >
          Добавить
        </button>
      </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue"

const name: Ref<string> = ref('');
const description: Ref<string> = ref('');
const text: Ref<string> = ref('');
const category: Ref<string> = ref('');
const people: Ref<string> = ref('');

function addFairytale() {
  $fetch(
      '/api/tales/set', {
        method: 'POST',
        body: {
          name: name.value,
          description: description.value,
          text: text.value,
          category: category.value,
          people: people.value
        }
      }
  )
}

</script>
