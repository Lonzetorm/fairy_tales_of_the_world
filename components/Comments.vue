<template>
  <div class="mt-4">
    <div>
      <h1 class="font-bold mb-3 text-left">
        Комментарии
      </h1>
      <div class="border border-solid border-gray-200 rounded-lg p-4 mb-4" v-for="comment in comments">
        <div class="flex flex justify-between">
          <div>
            <div class="flex">
              <div>
                <LoginIcon class="mr-4 my-auto cursor-pointer"/>
              </div>
              <div>
                {{ comment.userName }}
              </div>
            </div>
            <div class="mt-2">
              {{ comment.text }}
            </div>
          </div>
          <CloseButton v-if="isAdminUser" @click="prepareDelete(comment._id)" class="hover:cursor-pointer text-red-600"/>
        </div>
      </div>
    </div>
  </div>
  <ModalDeleteConfirm v-if="store.modalDeleteConfirm"/>
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
import {useFetch, useState} from "nuxt/app";

const route = useRoute();
const store = useMainStore();
const text = ref('');
const name = ref('');

const isAdminUser = true
const deleteComment = (id: number) => {
  $fetch(
      '/api/comments/commentDelete', {
        method: 'POST',
        body: {
          commentId: id
        }
      }
  )
  refresh();
}

watch(store.modalDeleteAnswer, (newStore: any) => {
  if (newStore.toDelete) {
    deleteComment(newStore.id)
    store.modalDeleteAnswer.toDelete = false
  }
})

const { data: comments, refresh } = useFetch(
    '/api/comments/', {
      query: {
        taleId: route.params.id
      }
    }
)

function addComment() {
  const user = useState('user')
  if (user?._value?.name) {
    name.value = user?._value?.name;
  }
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
  onAddComment()
}

function onAddComment() {
  refresh();
  text.value = ''
  if (name.value) {
    name.value = ''
  }
}

const prepareDelete = (id: number) => {
  store.modalDeleteConfirm = true
  store.modalDeleteAnswer.id = id
}
</script>
