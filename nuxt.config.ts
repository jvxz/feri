export default defineNuxtConfig({
  colorMode: {
    storage: 'cookie',
  },

  compatibilityDate: '2025-07-15',

  css: ['~/assets/css/globals.css', '~/assets/css/transitions.css', '~/assets/css/palettes/dark.css'],

  devtools: { enabled: true },

  experimental: {
    buildCache: true,
    nitroAutoImports: true,
    typedPages: true,
    typescriptPlugin: true,
  },

  fonts: {
    defaults: {
      preload: true,
      weights: ['100 900'],
    },
  },

  future: {
    compatibilityVersion: 5,
  },

  imports: {
    dirs: ['~/utils/**/*.ts', '~/config/**/*.ts', '~/composables/**/*.ts', '~/constants/**/*.ts', '~~/shared/**/*.ts'],
    presets: [{ ignore: ['isEqual'], package: 'es-toolkit' }],
  },

  modules: ['@nuxt/fonts', 'reka-ui/nuxt', '@unocss/nuxt', 'nuxt-security', '@nuxtjs/color-mode', '@vueuse/nuxt'],
})
