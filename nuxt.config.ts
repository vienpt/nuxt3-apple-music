// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css: ['~/assets/global.css'],
  devtools: { enabled: true },
  modules: ['@nuxthq/ui'],
  // set default theme dark mode
  colorMode: {
    // preference: 'light'
  },
  ui: {
    safelistColors: ['red']
  }
})
