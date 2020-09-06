<template>
  <section class="m-3 auction-item-detail" v-if="auctionItem">
    <base-text-display :title="auctionItem.title.title" :text="auctionItem.title.largeText" />
    <h2 class="mt-3">Obrázky</h2>
    <section class="mt-3 other-images">
      <div v-for="(imageUrl, index) in auctionItem.serializedImageLocations" :key="index">
        <img :src="`${$URL.AUCTION.IMAGES_STORAGE}/${auctionItem.id}/${imageUrl}`" />
      </div>
    </section>
  </section>
</template>

<script>
import AuctionItemService from '@/services/auctionItemService';
import BaseTextDisplay from '@/components/BaseTextDisplay';

export default {
  components: {
    BaseTextDisplay,
  },
  validate({ params: { id } }) {
    return /^\d+$/.test(id);
  },
  head() {
    return {
      title: `Inzerát č. ${this.auctionItem.id}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `${this.auctionItem.title}` },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.$URL.AUCTION.IMAGES_STORAGE}/${this.auctionItem.id}/${this.auctionItem.serializedImageLocations[0]}`,
        },
      ],
    };
  },
  async asyncData(context) {
    const { data } = await AuctionItemService.getAuctionItem(context.params.id);
    return {
      auctionItem: data,
    };
  },
};
</script>

<style lang="scss" scoped>
.auction-item-detail img {
  width: 100%;
}

.other-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px 20px;
}
</style>
