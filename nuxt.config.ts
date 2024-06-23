// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/logo.svg',
          media: '(prefers-color-scheme: light)',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/logo-dark.svg',
          media: '(prefers-color-scheme: dark)',
        },
      ],
    },
  },
  components: [
    {
      path: '~/components/marketing',
      prefix: 'Marketing',
    },
    '~/components',
  ],
  googleFonts: {
    families: {
      Poppins: [400, 600],
    },
  },
  colorMode: {
    classSuffix: '',
  },
})
