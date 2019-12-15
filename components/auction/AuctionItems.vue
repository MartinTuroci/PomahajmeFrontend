<template>
  <div class="mt-5">
    <div class="center-block" v-for="(auctionItem, i) in auctionItems" :key="i">
      <AuctionItem
        :auctionItem="auctionItem"
        :isAuthenticated="isAuthenticated"
        @deleteStory="deleteFunction(auctionItem.id)"
      ></AuctionItem>
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