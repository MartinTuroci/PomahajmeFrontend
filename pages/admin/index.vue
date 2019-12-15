<template>
  <div class="w-100">
    <div class="container">
      <div class="admin-nav p-2">
        <a @click="currentAdminComponent = 'AddStory'">Pridať príbeh</a>
        <a @click="currentAdminComponent = 'AddAuctionItem'">Pridať inzerát</a>
        <!-- <router-link :to="{name: 'StoryItemsAdmin'}">Príbehy</router-link>
        <router-link :to="{name: 'AddAuctionItemAdmin'}">Pridať inzerát</router-link>
        <router-link :to="{name: 'AuctionItemsAdmin'}">Inzeráty</router-link>-->
        <a @click="logout">Odhlásiť sa</a>
      </div>
      <div class="admin-body">
        <keep-alive>
          <component v-bind:is="currentAdminComponent"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from '@/services/authService';
import AddStory from '@/components/admin/AddStory';
import AddAuctionItem from '@/components/admin/AddAuctionItem';

export default {
  data() {
    return {
      currentAdminComponent: 'AddStory',
    };
  },
  components: { AddStory, AddAuctionItem },
  methods: {
    async logout() {
      await AuthService.logout();
      router.push({ path: '/admin/login' });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables';

.container {
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.admin-nav {
  background: $pink;
}
.admin-nav a {
  padding: 20px 0 20px 0;
  display: block;
  color: $white;
}
.admin-body {
  grid-column: 2 / 6;
}
</style>
