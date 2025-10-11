<template>
  <div class="mb-4">
    <h2 class="mb-4 text-2xl font-bold">
      Сказка дня
    </h2>
    <div class="border border-solid border-gray-200 rounded-lg p-4 hover:border-green-400">
      <NuxtLink :to="'/tales/' + tale[0]._id">
        <div class="block md:flex">
          <img
              v-if="tale[0].image"
              :src="tale[0].image"
              :alt="tale[0].name"
              width="300px"
              class="mb-2 md:mb-0"
          />
          <div class="md:pl-4">
            <h2 class="font-bold">
              {{ tale[0].name }}
            </h2>
            <p>
              {{ tale[0].description }}
            </p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const {data: tale} = await useFetch(
    '/api/tales/',{
      query: {
        limit: 1
      }
    }
)

</script>
