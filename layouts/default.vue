<template>
  <body>
    <div class="bg-white dark:bg-slate-900 font-main h-screen grid grid-rows-[auto_1fr_auto] mx-auto">
      <ElHeader/>
      <div class="max-w-screen-xl mx-auto w-full">
        <div class="block md:flex">
          <div class="hidden md:block md:w-1/5 mt-4 ml-4 mr-2">
            <Sidebar/>
          </div>
          <div class="w-100 md:w-4/5 my-4 ml-4 md:ml-2 mr-4">
            <slot/>
          </div>
        </div>
      </div>
      <ElFooter/>
      <ModalSearch v-if="store.modalSearch"/>
      <ModalAuth v-if="store.modalAuthCall"/>
      <ModalRegister v-if="store.modalRegisterCall"/>
    </div>
  </body>
</template>

<script setup lang="ts">
const store = useMainStore()

</script>