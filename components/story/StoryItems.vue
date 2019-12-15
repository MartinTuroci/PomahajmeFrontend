<template>
  <div>
    <section class="mt-5 story-grid">
      <div class="center-block" v-for="(story, i) in stories" :key="i">
        <StoryItem
          :story="story"
          :isAuthenticated="isAuthenticated"
          @deleteStory="deleteFunction(story.id)"
        ></StoryItem>
      </div>
    </section>
  </div>
</template>

<script>
import StoryItem from '@/components/story/StoryItem';

export default {
  props: {
    stories: {
      type: Array,
      required: true,
    },
    isAuthenticated: {
      type: Boolean,
      required: true,
    },
    deleteFunction: {
      type: Function,
      required: true,
    },
  },
  components: { StoryItem },
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
