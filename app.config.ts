/**
 * Setting global access config
 * and override default Nuxt UI
 */

export default defineAppConfig({
  // customTheme: {
  //   color: {
  //     red: '#ef5566'
  //   }
  // },
  ui: {
    // custom here: https://ui.nuxtlabs.com/getting-started/theming
    // primary: 'green',//'#ef5566',
    // gray: 'cool',
    button: {
      default: {
        color: 'red'
      }
    }
  }
})
