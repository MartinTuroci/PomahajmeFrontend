import devConfig from './nuxt.config.dev';
import axios from 'axios';

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
  generate: {
    async routes() {
      const ids = await Promise.all([axios.get(`api/story/ids`), axios.get(`api/auction/ids`)]);

      if (ids.length !== 2) throw new Error('Incorrect number of responses.');

      const storyRoutes = ids[0].data.map(storyId => `pribehy/${storyId}`);
      const auctionRoutes = ids[1].data.map(auctionId => `inzercia/${auctionId}`);

      return [...storyRoutes, ...auctionRoutes];
    },
  },
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
