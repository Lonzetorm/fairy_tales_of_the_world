<template>
  <div class="border border-gray-200 p-4 rounded-lg mt-10">
    <h2 class="font-medium mb-2">Оставить комментарий</h2>
    <form>
      <div v-if="useState('user').value === undefined" class="mb-4">
        <label class="block text-gray-700 mb-2" for="name">
          Имя
        </label>
        <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
            id="name" type="text" placeholder="Введите Ваше имя" v-model="name">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="comment">
          Комментарий
        </label>
        <textarea rows="4"
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                  id="comment" placeholder="Введите Ваш комментарий" v-model="text"/>
      </div>
      <div class="flex justify-end">
        <button
            class="bg-green-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="addComment"
        >
          Отправить
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import {useState} from "nuxt/app";

const route = useRoute()
const text = ref('');
const name = ref('')

const user = useState('user')
if (user?._value?.name) {
  name.value = user?._value?.name;
}

function addComment() {
  $fetch(
      '/api/comments/commentSet', {
        method: 'POST',
        body: {
          taleId: route.params.id,
          userName: name.value,
          text: text.value
        }
      }
  )

}
</script>
