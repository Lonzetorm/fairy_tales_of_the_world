<template>
  <div class="mt-4">
    <div>
      <h1 class="font-bold mb-3 text-left">
        Комментарии
      </h1>
      <div class="border border-solid border-gray-200 rounded-lg p-4 mb-4" v-for="comment in comments">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import {useFetch} from "nuxt/app";

const route = useRoute()
const {data: comments} = useFetch(
    '/api/comments/', {
      query: {
        taleId: route.params.id
      }
    }
)

</script>
