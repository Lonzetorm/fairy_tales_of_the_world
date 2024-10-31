<template>
  <div class="m-auto max-w-[50%] pt-60 flex">
    <div class="w-2/4 pt-16">
      <p class="text-center text-5xl">
        Упс... Тут ничего нет
      </p>
      <p class="text-center pt-8">
        <b>
          <NuxtLink to="/" class="hover:text-amber-500">
            Вернуться на главную
          </NuxtLink>
        </b>
      </p>
    </div>
    <div class="w-2/4">
      <img src="/images/gnome.png" alt="wizard" class="m-auto">
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "empty",
});

//todo Продумать эту страницу
</script>