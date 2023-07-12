// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ['~/assets/global.css'],
  app: {
    head: {
      meta: [
        {name: 'description', content: 'Job logic UI Challenge'},
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'God Father',
    }
  },
  modules: ['@nuxthq/ui', '@pinia/nuxt', '@nuxt/image'],
})
