<template>
  <div>
    <Navigation></Navigation>
    <main :class="{ 'mt-70px': $nuxt.$route.path !== `/` }" class="main-content">
      <nuxt />
    </main>
    <div id="fb-root"></div>
    <div id="fb-customer-chat" class="fb-customerchat"></div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default {
  components: {
    Footer,
    Navigation,
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/sass/_variables';

.mt-70px {
  margin-top: 70px;
}
.main-content {
  min-height: calc(100vh - #{$nav-height} - #{$footer-height});
  box-sizing: border-box;
}
</style>
