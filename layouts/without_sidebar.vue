<template>
  <div>
    <body class="bg-white dark:bg-slate-900 font-main h-screen grid grid-rows-[auto_1fr_auto] mx-auto">
    <ElHeader/>
    <div class="max-w-screen-xl mx-auto w-full">
      <div class="w-100 my-4">
        <slot/>
      </div>
    </div>
    <ElFooter/>
    <ModalAuth v-if="store.modalAuthCall" />
    <ModalRegister v-if="store.modalRegisterCall"/>
    </body>
  </div>
</template>

<script setup lang="ts">
const store = useMainStore()

</script>