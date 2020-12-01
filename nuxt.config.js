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
  plugins: ['@/plugins/urls', '@/plugins/global', '@/plugins/vue-editor.client.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/google-analytics'],
  googleAnalytics: {
    id: 'UA-151593080-1',
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/proxy'],
  generate: {
    interval: 200,
    async routes() {
      axios.defaults.baseURL = 'http://pomahajme.sk';

      const [stories, auctionItems, tips] = await Promise.all([
        axios.get(`/api/story/ids`),
        axios.get(`/api/auction/ids`),
        axios.get(`/api/tip/ids`),
      ]);

      const storyRoutes = stories.data.map(story => ({ route: `pribehy/${story.id}`, payload: story }));
      const auctionRoutes = auctionItems.data.map(auction => ({
        route: `inzercia/${auction.id}`,
        payload: auction,
      }));
      const tipRoutes = tips.data.map(tip => ({ route: `rubrika/${tip.id}`, payload: tip }));

      return [...storyRoutes, ...auctionRoutes, ...tipRoutes];
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
