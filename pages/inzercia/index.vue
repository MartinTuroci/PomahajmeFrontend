<template>
  <section class="p-5">
    <h1>Inzercia</h1>
    <hr class="mb-2" />
    <div>
      <div v-for="(auctionItem, i) in auctionItems" :key="i">
        <AuctionItem
          :auctionItem="auctionItem"
          @deleteAuctionItem="deleteAuctionItem(auctionItem.id, i)"
        ></AuctionItem>
      </div>
      <Pagination :lastPage="lastPage" @pageChanged="loadNewPage"></Pagination>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import URLS from '@/utils/urls';
import Pagination from '@/components/generic/Pagination';
import AuctionItemService from '@/services/auctionItemService';
import AuctionItem from '@/components/auction/AuctionItem';

export default {
  data() {
    return {
      lastPage: 1,
      auctionItems: [],
      auctionService: new AuctionItemService(),
      imagesUrl: URLS.AUCTION.IMAGES_STORAGE,
    };
  },
  created() {
    this.loadNewPage(1);
  },
  components: { Pagination, AuctionItem },
  computed: {
    ...mapGetters({ isAuthenticated: 'auth/isAuthenticated' }),
  },
  methods: {
    async deleteAuctionItem(id, index) {
      const deleteRes = await this.auctionService.deleteAuctionItem(id);

      if (deleteRes.status === 200) {
        this.auctionItems.splice(index, 1);
      }
    },
    async loadNewPage(page) {
      const auctionRes = await this.auctionService.getList(page, 16);
      this.auctionItems = auctionRes.data.data;
      this.lastPage = auctionRes.data.meta.last_page;
    },
  },
};
</script>

<style lang="scss" scoped></style>
