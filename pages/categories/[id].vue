<template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6" >
      <div
          v-for="(tale, index) in tales" :key="index"
          class="border border-solid border-gray-200 rounded-lg p-4 hover:border-green-400"
      >
        <div class="flex">
          <NuxtLink :to="'/tales/' + tale._id">
            <h2 class="font-bold">
              {{ tale.name }}
            </h2>
            <p>
              {{ tale.description }}
            </p>
          </NuxtLink>
<!--          <CloseButton class="text-red-600" @click="deleteTale(tale._id)"/>-->
          <CloseButton class="text-red-600" @click="store.modalDeleteConfirm = true"/>
        </div>
      </div>
    </div>
  <ModalDeleteConfirm v-if="store.modalDeleteConfirm"/>
<!--   <div class="grid-cols-1 text-center" v-else>-->
<!--     На данный момент сказок не загружено-->
<!--   </div>-->
</template>

<script lang="ts" setup>
import {useFetch} from "nuxt/app";

const store = useMainStore();
const route = useRoute()
const {data: tales, refresh} = useFetch(
    '/api/tales/', {
      query: {
        category_id: route.params.id
      }
    }
)

const deleteTale = (taleId: string) => {
  $fetch(
      '/api/tales/delete', {
        method: 'POST',
        body: {
          taleId: taleId
        }
      }
  )
  refresh();
}

</script>