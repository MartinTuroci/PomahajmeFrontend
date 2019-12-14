<template>
  <section class="story-detail m-3" v-if="story">
    <img :src="`${$URL.STORY.IMAGES_STORAGE}/${story.id}/${story.serializedImageLocations[0]}`" />
    <h1 class="mt-3 text-center">{{ story.title }}</h1>
    <article v-html="story.largeText" class="mt-3"></article>
    <h2 class="mt-3">Ďalšie obrázky</h2>
    <section class="mt-3 other-images">
      <div v-for="(imageUrl, index) in story.serializedImageLocations" :key="index">
        <img class="w-100" :src="`${$URL.STORY.IMAGES_STORAGE}/${story.id}/${imageUrl}`" />
      </div>
    </section>
  </section>
</template>

<script>
import StoryService from '@/services/storyService';

export default {
  validate({ params: { id } }) {
    return /^\d+$/.test(id);
  },
  head() {
    return {
      title: `Príbeh ${this.story.id}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `${this.story.title}` },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.$URL.STORY.IMAGES_STORAGE}/${this.story.id}/${this.story.serializedImageLocations[0]}`,
        },
      ],
    };
  },
  async asyncData({ params: { id } }) {
    const { data } = await StoryService.getStory(id);
    return { story: data };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.story-detail img {
  display: block;
  max-width: 100%;
  max-height: 80vh;
  margin: 0 auto;
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
}
</style>
