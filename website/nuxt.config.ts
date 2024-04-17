// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path"
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
  //...
  runtimeConfig: {
    MONGO_URI: process.env.MONGODB_URI,
    EMAIL_USER : process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  },
  css:[
    'vuetify/lib/styles/main.sass',
    "@mdi/font/css/materialdesignicons.css"
  ],
  alias: {
    "@": resolve(__dirname, "/")
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
    '@vee-validate/nuxt',
    '@nuxtjs/i18n',
  ],
  //@ts-ignore
  i18n:{
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: 'en-US',
        iso: 'en-US',
        name: 'English (United States)',
        file: 'en-US.json'
      },
      {
        code: 'es-MX',
        iso: 'es-MX',
        name: 'Español (México)',
        file: 'es-MX.json'
      }
    ],
    defaultLocale: "es-MX",
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
