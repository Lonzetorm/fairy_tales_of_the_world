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
      <select class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
              id="people"
              v-model="people"
      >
        <option disabled selected value="">Выберите народ</option>
        <option v-for="(people) in peoples" :value="people.code">
          {{ people.name }}
        </option>
      </select>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 mb-2" for="name">
        Автор
      </label>
      <select class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
              id="author"
              v-model="author"
      >
        <option disabled selected value="">Выберите автора</option>
        <option v-for="(author) in authors" :value="author.code">
          {{ author.name }}
        </option>
      </select>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 mb-2" for="name">
        Категория
      </label>
      <select class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" id="category" v-model="category">
        <option disabled selected value="">Выберите категорию</option>
        <option v-for="(category) in categories" :value="category.code">
          {{ category.name }}
        </option>
      </select>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 mb-2">
        Добавьте картинку для обложки
      </label>
      <input type="file" @input="handleFileInput"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 mb-2">
        Отображать на главной?
      </label>
      <div>
        <input type="radio" id="male" v-model="popular" :value="true">
        <label for="male">Да</label>
      </div>
      <div>
        <input type="radio" id="female" v-model="popular" :value="false">
        <label for="female">Нет</label>
      </div>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 mb-2" for="description">
        Описание
      </label>
      <textarea rows="4"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                id="description" placeholder="Введите описание сказки" v-model="description"/>
    </div>
    <div class="mb-4">
      <p class="block text-gray-700 mb-2">
        Текст
      </p>
      <ClientOnly>
        <div id="editorjs" class="border border-gray-200 rounded-lg mb-2"/>
        <MainEditor/>
      </ClientOnly>
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
import {useFetch} from "nuxt/app";

const { handleFileInput, files } = useFileStorage()
const store = useMainStore()
const name: Ref<string> = ref('');
const description: Ref<string> = ref('');
const text: Ref<string> = ref('');
const category: Ref<string> = ref('');
const popular: Ref<boolean> = ref(false);
const people: Ref<string> = ref('');
const author: Ref<string> = ref('');
const image: Ref<string> = ref('');

const submit = async () => {
  await $fetch('/api/files', {
    method: 'POST',
    body: {
      files: files.value,
      section: 'tales'
    }
  })
}

async function addFairytale() {
  if (store.taleUploadText !== '') {
    text.value = store.taleUploadText;
  }

  await submit()
  //todo Сделать так, чтоб не передавать поле image, если оно пустое
  console.log('popular: ', popular.value)
  await $fetch(
      '/api/tales/set', {
        method: 'POST',
        body: {
          name: name.value,
          description: description.value,
          text: text.value,
          category: category.value,
          people: people.value,
          author: author.value,
          popular: popular.value,
          image: files?.value[0]?.name ?? ''
        }
      }
  )

  //todo Переделать на что-то более автоматическое
  //todo Доделать обнуление текста сказки
  name.value = '';
  description.value  = '';
  text.value = '';
  category.value = '';
  people.value = '';
  author.value = '';
  image.value = '';
  popular.value = false;
}

const { data: categories } = useFetch('/api/categories/')
const {data: peoples} = useFetch('/api/peoples')
const {data: authors} = useFetch('/api/authors')

</script>
<style>
.ce-block__content,
.ce-toolbar__content {
  max-width: 85%;
}
.codex-editor__redactor {
  padding-bottom: 100px !important;
  padding-top: 20px !important;
}
</style>
