export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s | Confido.',
    title: 'Make critical Tech or Product hires and scale your startup',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        hid: 'description',
        name: 'description',
        content: "We scale Tech for Good startups. If you need to make critical Tech or Product hires, build core teams or scale up squads, we're here for you.",
      },

      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Make critical Tech or Product hires and scale your startup | Confido.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://confidotalent.com/images/meta/home.png',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://confidotalent.com',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "We scale Tech for Good startups. If you need to make critical Tech or Product hires, build core teams or scale up squads, we're here for you.",
      },

      { name: 'twitter:site', content: '@confidotalent' },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Make critical Tech or Product hires and scale your startup | Confido.',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: "We scale Tech for Good startups. If you need to make critical Tech or Product hires, build core teams or scale up squads, we're here for you.",
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: 'https://confidotalent.com',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://confidotalent.com/images/meta/home.png',
      },
      {
        hid: 'twitter:label1',
        property: 'twitter:label1',
        content: 'Make critical Tech or Product hires and scale your startup | Confido.',
      },
    ],
    link: [
      // fonts
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&display=swap',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '180x180',
        href: '/apple-touch-icon.png',
      },
      { rel: 'canonical', href: 'https://confidotalent.com' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@mdi/font/css/materialdesignicons.min.css', // added into main css to help improve speed
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/hotjar.js', mode: 'client' },
    { src: '~/plugins/gtag.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/gtm', '@nuxtjs/sitemap', '@nuxtjs/axios'],

  // GTM
  gtm: {
    id: 'GTM-M5TFCP2',
  },

  googleAnalytics: {
    id: 'UA-117426148-1',
  },

  // Sitemap
  sitemap: {
    hostname: 'https://confidotalent.com',
    gzip: true,
  },

  // serverMiddleware
  serverMiddleware: ['~/servermiddleware/seo.js'],

  // // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  // axios: {
  //   baseURL: 'https://graphql.cosmicjs.com/v2',
  // },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    treeShake: true, // makes dev slow...! but needed to render custum styling
    defaultAssets: false,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#000151',
          secondary: '#FF65BD',
          accent: '#7B7DF6',
          success: '#3EC1B9',
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js'),
    },
    extractCSS: true,
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
  },
  generate: {
    fallback: '404.html',
  },

  server: {
    port: 3001,
  },
};
