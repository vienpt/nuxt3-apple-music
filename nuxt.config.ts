// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ['~/assets/global.css'],
  app: {
    head: {
      meta: [
        {name: 'description', content: 'Clone same as Apple Music'},
        {name: 'format-detection', content: 'telephone=no'},
        {name: 'apple-music-developer-token', content: 'DEVELOPER-TOKEN'},
        {name: 'apple-music-app-name', content: 'My Cool Web App From Vien'},
        {name: 'apple-music-app-build', content: '2023.07'}
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt 3 Apple Music',
    }
  },
  devtools: {enabled: true},
  modules: ['@nuxthq/ui'],
  ui: {
    safelistColors: ['red']
  }
})
