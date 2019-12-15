import devConfig from './nuxt.config.dev';

let config = {
  mode: 'universal',
  head: {
    title: 'Pomahajme',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Stránka je zameraná na pomoc a podporu rodinám, ktoré majú choré deti.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'pomoc, charita, deti, choroba, rakovina, obrna',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Pomahajme',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'http://pomahajme.sk/',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Pomahajme.sk',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Stránka je zameraná na pomoc a podporu rodinám, ktoré majú choré deti.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '@/assets/images/landing-compressed.jpg',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff',
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/sass/app.scss', '@/assets/third-party/fontawesome/css/all.min.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/urls', '@/plugins/global'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/proxy'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias['@'] = __dirname;
    },
  },
};

if (process.env.NODE_ENV === 'development') {
  config = { ...config, ...devConfig };
}

export default config;
