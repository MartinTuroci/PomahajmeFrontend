<template functional>
  <div class="story scale">
    <a class="story__card" :href="`/pribehy/${props.story.id}`">
      <img
        class="w-100 story__img"
        :src="`https://pomahajme.sk/${parent.$URL.STORY.IMAGES_STORAGE}/${props.story.id}/${props.story.serializedImageLocations[0]}`"
      />
      <section class="p-1 story__text">
        <h2 class="text-black pb-1">{{ props.story.title }}</h2>
        <p class="text-white story__desc">{{ props.story.largeText.substr(0, 100) | removeBreak }}...</p>
      </section>
    </a>
    <section class="toolbar disp-flex flex-space-evenly">
      <i
        v-if="props.isAuthenticated"
        class="p-1 danger fas fa-trash scale"
        @click="listeners.deleteStory(props.story.id)"
      ></i>
      <i
        v-if="props.isAuthenticated"
        class="p-1 text-blue fas fa-pen scale"
        @click="listeners.updateStory(props.story)"
      ></i>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
      required: true,
    },
    isAuthenticated: {
      type: Boolean,
      required: true,
    },
  },
  filters: {
    // HACK: Cannot do it within template due to Vue bug.
    removeBreak: (val) => val.replace(/<br\/>/g, ' '),
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables';

.toolbar {
  i {
    font-size: 25px;
  }
}
.story {
  cursor: pointer;
  border-radius: 25px;
  -webkit-box-shadow: 0px 7px 17px 4px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 0px 7px 17px 4px rgba(0, 0, 0, 0.61);
  box-shadow: 0px 7px 17px 4px rgba(0, 0, 0, 0.61);

  display: flex;
  flex-direction: column;

  &__text {
    background: $pink;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    // background: linear-gradient(135deg, $pink 0%, $blue 93%);
    flex-grow: 1;
  }
  &__card {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &:hover {
      text-decoration: none;
    }
  }
  &__img {
    height: 300px;
    object-fit: cover;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
  &__desc {
    text-overflow: ellipsis;
    line-clamp: 4;
  }
}
</style>
