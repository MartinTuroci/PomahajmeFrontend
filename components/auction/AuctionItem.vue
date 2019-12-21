<template functional>
  <div class="auction-item disp-flex">
    <img
      :src="
        `${parent.$URL.AUCTION.IMAGES_STORAGE}/${props.auctionItem.id}/${props.auctionItem.serializedImageLocations[0]}`
      "
    />
    <div class="ml-1">
      <h3>{{ props.auctionItem.title }}</h3>
      <p v-html="props.auctionItem.largeText.substring(0, 100).replace(/<br\/>/g, '') + '...'"></p>
    </div>
    <i
      v-if="props.isAuthenticated"
      class="fas danger fa-trash scale font-size-2 ml-1"
      @click="listeners['deleteAuctionItem'](props.auctionItem.id)"
    ></i>
    <nuxt-link :to="`/inzercia/${props.auctionItem.id}`">
      <button>Detail</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    auctionItem: {
      type: Object,
      required: true,
    },
    isAuthenticated: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.auction-item {
  align-items: center;

  @media only screen and (max-width: 600px) {
    img {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }

    i {
      margin-top: 1rem;
    }
  }

  div {
    width: 100%;
  }

  img {
    width: 150px;
    height: auto;
  }
}
</style>
