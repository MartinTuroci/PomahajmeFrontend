<template>
  <section class="m-3">
    <div class="mt-5">
      <h1>Príbehy</h1>
      <hr />
    </div>
    <section class="story-grid mt-5">
      <div v-for="(story, index) in stories" :key="index" class="story-item scale">
        <nuxt-link :to="'/pribehy/' + story.id">
          <div class="img-container">
            <img :src="`${imagesUrl}/${story.id}/${story.serializedImageLocations[0]}`" />
          </div>
          <h2 class="p-2">{{ story.title }}</h2>
        </nuxt-link>
        <i v-if="isAuthenticated" class="fas fa-trash scale" @click="deleteStory(story.id, index)"></i>
      </div>
    </section>
    <Pagination :lastPage="lastPage" @pageChanged="loadNewPage"></Pagination>
  </section>
</template>

<script>
import StoryService from '@/services/storyService';
import { mapGetters } from 'vuex';
import URLS from '@/utils/urls';
import Pagination from '@/components/Pagination';

export default {
  data() {
    return {
      lastPage: 1,
      stories: [],
      storyService: new StoryService(),
      imagesUrl: URLS.STORY.IMAGES_STORAGE,
    };
  },
  created() {
    this.loadNewPage(1);
  },
  components: { Pagination },
  computed: {
    ...mapGetters({ isAuthenticated: 'auth/isAuthenticated' }),
  },
  methods: {
    async deleteStory(id, index) {
      const deleteRes = await this.storyService.deleteStory(id);

      if (deleteRes.status === 200) {
        this.stories.splice(index, 1);
      }
    },
    goToDetail(id) {
      const name = this.$route.path.includes('admin') ? 'StoryDetailAdmin' : 'StoryDetail';
      this.$router.push({ name, params: { id } });
    },
    async loadNewPage(page) {
      const storiesRes = await this.storyService.getList(page, 16);
      this.stories = storiesRes.data.data;
      this.lastPage = storiesRes.data.meta.last_page;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.story-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));
  grid-gap: 50px 50px;
  justify-items: center;
}
.story-grid i {
  position: absolute;
  bottom: -20px;
}
.story-item {
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  border-radius: 25px;
  -webkit-box-shadow: 0px 7px 17px 4px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 0px 7px 17px 4px rgba(0, 0, 0, 0.61);
  box-shadow: 0px 7px 17px 4px rgba(0, 0, 0, 0.61);
}
.story-item img {
  display: block;
  width: 100%;
  height: auto;
}
.story-item div:first-child {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fa-trash {
  color: $pink;
  margin-top: 10px;
}
.img-container {
  height: 300px;
  border-radius: 25px 25px 0 0;
  overflow: hidden;
}
</style>
