<template>
  <section class="p-5">
    <base-header heading="Príbehy"></base-header>
    <story-items
      :stories="stories"
      :isAuthenticated="$store.getters['auth/isAuthenticated']"
      :deleteFunction="deleteStory"
      :updateFunction="openUpdateStoryDialog"
    ></story-items>
    <pagination :lastPage="lastPage" @pageChanged="loadNewPage"></pagination>
    <base-dialog
      v-if="storyToUpdate"
      title="Upraviť príbeh"
      @submit="updateStory"
      @cancel="closeUpdateStoryDialog"
    >
      <input type="text" v-model="storyToUpdate.title" placeholder="Nadpis" />
      <textarea v-model="storyToUpdate.largeText" placeholder="Popis" id cols="30" rows="10"></textarea>
    </base-dialog>
  </section>
</template>

<script>
import StoryService from '@/services/storyService';
import Pagination from '@/components/Pagination';
import BaseDialog from '@/components/BaseDialog';
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
  data() {
    return {
      storyToUpdate: null,
    };
  },
  components: { Pagination, StoryItems, BaseDialog },
  methods: {
    openUpdateStoryDialog(story) {
      this.storyToUpdate = { ...story };
    },
    closeUpdateStoryDialog() {
      this.storyToUpdate = null;
    },
    async deleteStory(id) {
      await StoryService.deleteStory(id);
      await this.loadNewPage(this.page);
    },
    async updateStory() {
      // TODO: Refactor to do the joining on server side.
      const story = { ...this.storyToUpdate };
      story.serializedImageLocations = this.storyToUpdate.serializedImageLocations.join('|');

      await StoryService.updateStory(story);
      await this.loadNewPage(this.page);
      this.storyToUpdate = null;
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
