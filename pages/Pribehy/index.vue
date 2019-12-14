<template>
  <section class="m-3">
    <div class="mt-5">
      <h1>Príbehy</h1>
      <hr />
    </div>
    <section class="mt-5 story-grid">
      <div class="center-block" v-for="(story, i) in stories" :key="i">
        <story-item
          :story="story"
          :isAuthenticated="isAuthenticated"
          @deleteAuctionItem="deleteAuctionItem(story.id)"
        ></story-item>
      </div>
    </section>
    <Pagination :lastPage="lastPage" @pageChanged="loadNewPage"></Pagination>
  </section>
</template>

<script>
import StoryService from '@/services/storyService';
import { mapGetters } from 'vuex';
import Pagination from '@/components/Pagination';
import StoryItem from '@/components/story/StoryItem';

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
  components: { Pagination, StoryItem },
  computed: {
    ...mapGetters({ isAuthenticated: 'auth/isAuthenticated' }),
  },
  methods: {
    async deleteStory(id) {
      await StoryService.deleteStory(id);
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

<style lang="scss" scoped>
.story-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 50px 50px;
  justify-items: center;
}
</style>
