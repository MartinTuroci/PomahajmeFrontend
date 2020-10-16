<template>
  <section class="p-5">
    <base-header heading="Príbehy"></base-header>
    <story-items
      :stories="stories"
      :isAuthenticated="$store.getters['auth/isAuthenticated']"
      :deleteFunction="deleteStory"
      :updateFunction="updateStory"
    ></story-items>
    <pagination :lastPage="lastPage" @pageChanged="loadNewPage"></pagination>
  </section>
</template>

<script>
import StoryService from '@/services/storyService';
import Pagination from '@/components/Pagination';
import StoryItems from '@/components/story/StoryItems';

export default {
  async asyncData(context) {
    const {
      data: { data },
      data: {
        meta: { last_page },
      },
    } = await StoryService.getList(1, 16);
    return {
      stories: data,
      lastPage: last_page,
    };
  },
  components: { Pagination, StoryItems },
  methods: {
    async deleteStory(id) {
      await StoryService.deleteStory(id);
      await this.loadNewPage(this.page);
    },
    async updateStory(id) {
      await StoryService.updateStory(id);
      await this.loadNewPage(this.page);
    },
    async loadNewPage(page) {
      const {
        data: { data },
        data: {
          meta: { last_page },
        },
      } = await StoryService.getList(page, 16);
      this.stories = data;
      this.lastPage = last_page;
    },
  },
};
</script>
