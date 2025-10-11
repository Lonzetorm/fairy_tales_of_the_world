// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Все сказки',
    }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    "nuxt-tiptap-editor",
    'nuxt-file-storage',
  ],
  fileStorage: {
    mount: '/project/Mine/fairy_tales/public/uploads',
  },
  tiptap: {
    prefix: 'Tiptap',
  },
  nitro: {
    plugins: ["~/server/index.ts", "~/server/plugins/storage.ts"],
  },
  runtimeConfig: {
    redisHost: 'localhost',
    mongodbUri: process.env.MONGODB_URI
  }
})