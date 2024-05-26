// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Народные сказки',
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  nitro: {
    plugins: ["~/server/index.ts"]
  },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI
  }
})