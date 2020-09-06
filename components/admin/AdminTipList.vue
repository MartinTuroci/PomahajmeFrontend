<template>
  <section class="p-5">
    <base-header heading="Rubrika" />
    <tips
      :tips="tips"
      :isAuthenticated="$store.getters['auth/isAuthenticated']"
      :approveFunction="approveTip"
      :deleteFunction="deleteTip"
    />
    <pagination v-if="lastPage !== -1" :lastPage="lastPage" @pageChanged="loadNewPage" />
  </section>
</template>

<script>
import Tipservice from '@/services/tip.service';
import Pagination from '@/components/Pagination';
import Tips from '@/components/tip/Tips';

export default {
  async mounted() {
    const { data } = await Tipservice.getUnapprovedList(1, 16);
    this.tips = data.data;
    this.lastPage = data.meta.last_page;
  },
  data() {
    return {
      tips: [],
      lastPage: -1,
    };
  },
  components: { Pagination, Tips },
  methods: {
    async deleteTip(id) {
      await Tipservice.deleteTip(id);
      await this.loadNewPage();
    },
    async approveTip(id) {
      await Tipservice.approveTip(id);
      await this.loadNewPage();
    },
    async loadNewPage() {
      const {
        data: { data },
        data: {
          meta: { last_page },
        },
      } = await Tipservice.getUnapprovedList(this.page, 16);
      this.tips = data;
      this.lastPage = last_page;
    },
  },
};
</script>
