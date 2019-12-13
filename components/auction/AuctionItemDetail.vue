<template>
  <section class="m-3 auction-item-detail" v-if="auctionItem">
    <!-- <img :src="`${imagesUrl}/${auctionItem.id}/${auctionItem.serializedImageLocations[0]}`" /> -->
    <h1 class="mt-3">{{ auctionItem.title }}</h1>
    <article v-html="auctionItem.largeText" class="mt-3"></article>
    <h2 class="mt-3">Obrázky</h2>
    <section class="mt-3 other-images">
      <div v-for="(imageUrl, index) in auctionItem.serializedImageLocations" :key="index">
        <img :src="`${imagesUrl}/${auctionItem.id}/${imageUrl}`" />
      </div>
    </section>
  </section>
</template>

<script>
import AuctionItemService from '@/services/auctionItemService';
import URLS from '@/utils/urls';

export default {
  data() {
    return {
      auctionItem: null,
      auctionItemService: new AuctionItemService(),
      imagesUrl: URLS.AUCTION.IMAGES_STORAGE,
    };
  },
  async created() {
    const res = await this.auctionItemService.getAuctionItem(this.$route.params.id);
    this.auctionItem = res.data;
  },
};
</script>

<style lang="scss" scoped>
@import './../../../sass/_variables.scss';

.auction-item-detail h1 {
  text-align: center;
}
.auction-item-detail {
  text-align: justify;
  word-wrap: break-word;
}
.auction-item-detail article {
  line-height: $line-height-base;
}
.auction-item-detail img {
  width: 100%;
}

.other-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px 20px;
}
</style>
