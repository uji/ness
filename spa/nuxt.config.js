export default {
  components: true,
  ssr: false,
  head: {
    title: 'ness-spa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build',
    '@nuxtjs/google-fonts',
  ],
  plugins: ['@/plugins/provide.ts'],
  env: {
    dryMode: process.env.DRY_MODE || '0',
  },
  googleFonts: {
    families: {
      Inter: [300, 500, 700],
    },
  },
  loading: {
    continuous: true,
    color: 'yellow',
    height: '3px',
  },
  loadingIndicator: {
    name: 'three-bounce',
    color: 'yellow',
    background: 'white',
  },
}
