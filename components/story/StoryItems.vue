<template>
  <div class="mt-5 story-grid">
    <story-item
      v-for="(story, i) in stories"
      :key="i"
      :story="story"
      :isAuthenticated="isAuthenticated"
      @deleteStory="deleteFunction"
      @updateStory="updateFunction"
    ></story-item>
  </div>
</template>

<script>
import StoryItem from '@/components/story/StoryItem';

export default {
  components: { StoryItem },
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
    updateFunction: {
      type: Function,
      required: true,
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
