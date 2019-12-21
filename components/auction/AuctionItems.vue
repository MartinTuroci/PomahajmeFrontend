<template>
  <div class="mt-5">
    <div class="center-block" v-for="(auctionItem, i) in auctionItems" :key="i">
      <auction-item
        :auctionItem="auctionItem"
        :isAuthenticated="isAuthenticated"
        @deleteAuctionItem="deleteFunction"
      ></auction-item>
      <hr v-if="i !== auctionItems.length - 1" class="mt-2 mb-2" />
    </div>
  </div>
</template>

<script>
import AuctionItem from '@/components/auction/AuctionItem';

export default {
  props: {
    auctionItems: {
      type: Array,
      required: true,
    },
    isAuthenticated: {
      type: Boolean,
      required: true,
    },
    deleteFunction: {
      type: Function,
      required: true,
    },
  },
  components: { AuctionItem },
};
</script>