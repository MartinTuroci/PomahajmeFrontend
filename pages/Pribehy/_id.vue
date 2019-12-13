<template>
  <section class="story-detail m-3" v-if="story">
    <img :src="`${imagesUrl}/${story.id}/${story.serializedImageLocations[0]}`" />
    <h1 class="mt-3">{{story.title}}</h1>
    <article v-html="story.largeText" class="mt-3"></article>
    <h2 class="mt-3">Ďalšie obrázky</h2>
    <section class="mt-3 other-images">
      <div v-for="(imageUrl, index) in story.serializedImageLocations" :key="index">
        <img :src="`${imagesUrl}/${story.id}/${imageUrl}`" />
      </div>
    </section>
  </section>
</template>

<script>
import StoryService from '@/services/storyService';
import URLS from '@/utils/urls';

export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  data() {
    return {
      story: null,
      storyService: new StoryService(),
      imagesUrl: URLS.STORY.IMAGES_STORAGE,
    };
  },
  async created() {
    const getStoryRes = await this.storyService.getStory(this.$route.params.id);
    this.story = getStoryRes.data;
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.story-detail img {
  display: block;
  cursor: pointer;
  max-width: 100%;
  max-height: 80vh;
  margin: 0 auto;
}
.story-detail h1 {
  text-align: center;
}
.story-detail {
  text-align: justify;
  word-wrap: break-word;
}
.story-detail article {
  line-height: $line-height-base;
}
.other-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px 20px;

  img {
    width: 100%;
  }
}
</style>
