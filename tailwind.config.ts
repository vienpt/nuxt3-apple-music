import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      maxWidth: {
        '9xl': '96rem'
      }
    }
  },
  plugins: [],
  content: []
}
