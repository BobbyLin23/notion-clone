import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
  ],
  runtimeConfig: {
    public: {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
    clerkSecretKey: process.env.CLERK_SECRET_KEY,
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
    {
      path: '~/components/main',
      prefix: 'Main',
    },
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  googleFonts: {
    families: {
      Poppins: [400, 600],
    },
  },
  colorMode: {
    classSuffix: '',
  },
})
