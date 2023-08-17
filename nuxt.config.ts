// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  // disables Nuxt components auto-imports
  components: {
    dirs: [],
  },
});
