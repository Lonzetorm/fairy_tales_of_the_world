<template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6" >
      <block-tale v-for="(tale, index) in tales" :key="index" :tale="tale"/>
<!--      <CloseButton v-if="userRights" class="text-red-600" @click="prepareDelete(tale._id)"/>-->
    </div>
  <ModalDeleteConfirm v-if="store.modalDeleteConfirm"/>
   <div class="grid-cols-1 text-center" v-if="tales?.length === 0">
     На данный момент сказок не загружено
   </div>
</template>

<script lang="ts" setup>
import {useFetch, useState} from "nuxt/app";

const userRights = useState('user')?.value?.rights
const store = useMainStore();
const route = useRoute()
const {data: tales, refresh} = useFetch(
    '/api/tales/', {
      query: {
        category_id: route.params.id
      }
    }
)

watch(store.modalDeleteAnswer, (newStore: any) => {
  if (newStore.toDelete) {
    deleteTale(newStore.id)
    store.modalDeleteAnswer.toDelete = false
  }
})

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

const prepareDelete = (id: number) => {
  store.modalDeleteConfirm = true
  store.modalDeleteAnswer.id = id
}

</script>