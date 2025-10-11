<template>
  <div class="border border-solid border-gray-200 rounded-lg p-4 hover:border-green-400">
    <NuxtLink :to="'/tales/' + tale._id">
      <img v-if="tale.image" :src="tale.image" :alt="tale.name" class="mb-3"/>
      <h2 class="font-bold">
        {{ tale.name }}
      </h2>
<!--      <p>-->
<!--        {{ tale.description }}-->
<!--      </p>-->
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  tale: {
    type: Object,
    required: true
  },
});

</script>
