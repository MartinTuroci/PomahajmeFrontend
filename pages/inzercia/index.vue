<template>
  <section class="p-5">
    <h1>Inzercia</h1>
    <hr class="mb-2" />
    <div>
      <div v-for="(auctionItem, i) in auctionItems" :key="i">
        <AuctionItem
          :auctionItem="auctionItem"
          :isAuthenticated="isAuthenticated"
          @deleteAuctionItem="deleteAuctionItem(auctionItem.id)"
        ></AuctionItem>
        <hr v-if="i !== auctionItems.length - 1" class="mt-2 mb-2" />
      </div>
      <Pagination :lastPage="lastPage" @pageChanged="loadNewPage"></Pagination>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Pagination from '@/components/Pagination';
import AuctionItemService from '@/services/auctionItemService';
import AuctionItem from '@/components/auction/AuctionItem';

export default {
  async asyncData(context) {
    const {
      data: { data },
      data: {
        meta: { last_page },
      },
    } = await AuctionItemService.getList(1, 16);

    return {
      auctionItems: data,
      lastPage: last_page,
    };
  },
  components: { Pagination, AuctionItem },
  computed: {
    ...mapGetters({ isAuthenticated: 'auth/isAuthenticated' }),
  },
  methods: {
    async deleteAuctionItem(id) {
      await AuctionItemService.deleteAuctionItem(id);
      await this.loadNewPage(this.page);
    },
    async loadNewPage(page) {
      const {
        data: { data },
        data: {
          meta: { last_page },
        },
      } = await AuctionItemService.getList(page, 16);
      this.auctionItems = data;
      this.lastPage = last_page;
    },
  },
};
</script>
