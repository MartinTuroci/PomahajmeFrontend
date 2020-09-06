<template>
  <section class="story-detail m-3" v-if="story">
    <img :src="`${$URL.STORY.IMAGES_STORAGE}/${story.id}/${story.serializedImageLocations[0]}`" />
    <base-text-display :title="story.title" :text="story.largeText" />
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
import BaseTextDisplay from '@/components/BaseTextDisplay';

export default {
  components: {
    BaseTextDisplay,
  },
  validate({ params: { id } }) {
    return /^\d+$/.test(id);
  },
  head() {
    return {
      title: `Príbeh č. ${this.story.id}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `${this.story.title}` },
        { hid: 'title', property: 'title', content: `${this.story.title}` },
        { hid: 'description', property: 'description', content: `${this.story.largeText}` },
        { hid: 'og:description', property: 'og:description', content: `${this.story.largeText}` },
        { hid: 'og:url', property: 'og:url', content: `http://pomahajme.sk/pribehy/${this.story.id}` },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `http://pomahajme.sk/images/${this.story.id}/${this.story.serializedImageLocations[0]}`,
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
.story-detail img {
  display: block;
  max-width: 100%;
  max-height: 80vh;
  margin: 0 auto;
}
.other-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px 20px;
}
</style>
