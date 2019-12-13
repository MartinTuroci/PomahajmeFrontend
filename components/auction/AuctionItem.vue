<template>
  <div>
    <div class="auction-item disp-flex">
      <img :src="`${imagesUrl}/${auctionItem.id}/${auctionItem.serializedImageLocations[0]}`" />
      <div class="ml-1">
        <h3>{{ auctionItem.title }}</h3>
        <p v-html="auctionItem.largeText.substring(0, 100).replace(/<br\/>/g, '')"></p>
      </div>
      <button @click="goToDetail">Detail</button>
      <i
        v-if="isAuthenticated"
        class="fas fa-trash scale font-size-2 ml-1"
        @click="$emit('deleteAuctionItem')"
      ></i>
    </div>
    <hr class="mt-2 mb-2" />
  </div>
</template>

<script>
import URLS from '@/utils/urls';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      imagesUrl: URLS.AUCTION.IMAGES_STORAGE,
    };
  },
  computed: {
    ...mapGetters({ isAuthenticated: 'auth/isAuthenticated' }),
  },
  props: {
    auctionItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToDetail() {
      const name = this.$route.path.includes('admin') ? 'AuctionItemDetailAdmin' : 'AuctionItemDetail';
      this.$router.push({ name, params: { id: this.auctionItem.id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.auction-item {
  align-items: center;

  @media only screen and (max-width: 600px) {
    align-items: center;
    justify-content: center;

    img {
      margin-bottom: 1rem;
    }

    i {
      margin-top: 1rem;
    }
  }

  div {
    flex-grow: 2;
    width: 100%;
  }

  button {
    height: 70%;
    justify-self: flex-end;
  }

  img {
    width: 150px;
    height: auto;
  }
}
</style>
