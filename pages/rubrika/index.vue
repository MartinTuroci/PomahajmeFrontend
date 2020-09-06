<template>
  <section class="p-5">
    <base-header heading="Rubrika" />
    <tips
      :tips="tips"
      :isAuthenticated="$store.getters['auth/isAuthenticated']"
      :deleteFunction="deleteTip"
    />
    <pagination :lastPage="lastPage" @pageChanged="loadNewPage" />
    <create-tip />
  </section>
</template>

<script>
import Tipservice from '@/services/tip.service';
import Pagination from '@/components/Pagination';
import Tips from '@/components/tip/Tips';
import CreateTip from '@/components/tip/CreateTip';

export default {
  async asyncData(context) {
    const res = await Tipservice.getList(1, 16);
    return {
      tips: res.data.data,
      lastPage: res.data.meta.last_page,
    };
  },
  components: { CreateTip, Pagination, Tips },
  methods: {
    async deleteTip(id) {
      await Tipservice.deleteTip(id);
      await this.loadNewPage(this.page);
    },
    async loadNewPage(page) {
      const {
        data: { data },
        data: {
          meta: { last_page },
        },
      } = await Tipservice.getList(page, 16);
      this.tips = data;
      this.lastPage = last_page;
    },
  },
};
</script>
