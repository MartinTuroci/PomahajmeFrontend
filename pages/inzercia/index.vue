<template>
  <section class="p-5">
    <base-header heading="Inzercia"></base-header>
    <auction-items
      :auctionItems="auctionItems"
      :isAuthenticated="isAuthenticated"
      :deleteFunction="deleteAuctionItem"
    ></auction-items>
    <pagination :lastPage="lastPage" @pageChanged="loadNewPage"></pagination>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Pagination from '@/components/Pagination';
import AuctionItemService from '@/services/auctionItemService';
import AuctionItems from '@/components/auction/AuctionItems';

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
  components: { Pagination, AuctionItems },
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
