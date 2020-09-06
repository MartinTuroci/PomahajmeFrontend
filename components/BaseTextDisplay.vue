<template>
  <div class="text-display mt-3">
    <h1 class="text-center">{{ title }}</h1>
    <article class="mt-3" v-html="text"></article>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables';

.text-display {
  max-width: 1200px;
  box-sizing: border-box;
  padding: 2rem;
  text-align: justify;
  line-height: $line-height-base;
  word-wrap: break-word;
  margin: 0 auto;
}
</style>
