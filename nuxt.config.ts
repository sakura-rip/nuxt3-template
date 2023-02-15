// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],
  css: [
    '~/assets/css/tailwind.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      titleTemplate: '%s - PROJECT',
      title: "TITLE",
      meta: [
        {name: "description", content: "ThisIsDescription"}
      ],
      link: [{rel: 'icon', href: '/favicon.ico'}],
    }
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    server: {
      watch: {
        usePolling: true
      }
    },
  },

  imports: {
    dirs: ['stores'],
  },

  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL
    }
  },

  i18n: {
    strategy: "prefix_and_default",
    langDir: "locales",
    locales: [{
      code: "ja", name: "日本語", iso: "ja-JP", file: "ja.json"
    }, {
      code: "en", name: "English", iso: "en-US", file: "en.json"
    }],
    baseUrl: process.env.BASE_URL,
    defaultLocale: "en",
    vueI18n: {
      legacy: false,
      fallbackLocale: 'en',
    },
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root',
    }
  }
})
