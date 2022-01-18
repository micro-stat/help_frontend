export default {
  target: 'static',

  head: {
    title: 'help.micro-stat.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Quicksand: true
    }
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true
    }
  },

  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },

  plugins: [
    '~/plugins/statistics.client.js'
  ]
}
