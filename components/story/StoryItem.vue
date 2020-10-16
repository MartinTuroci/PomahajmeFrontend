<template functional>
  <div class="story-item text-center scale">
    <nuxt-link :to="`/pribehy/${props.story.id}`">
      <div class="img-container flex-center">
        <img
          class="w-100"
          :src="
            `${parent.$URL.STORY.IMAGES_STORAGE}/${props.story.id}/${props.story.serializedImageLocations[0]}`
          "
        />
      </div>
      <div class="title-wrapper">
        <h2 class="text-black">{{ props.story.title }}</h2>
      </div>
    </nuxt-link>
    <section class="toolbar disp-flex flex-space-evenly">
      <i
        v-if="props.isAuthenticated"
        class="p-1 danger fas fa-trash scale"
        @click="listeners['deleteStory'](props.story.id)"
      ></i>
      <i v-if="props.isAuthenticated" class="p-1 text-blue fas fa-pen scale" @click="listeners['updateStory'](props.story)"></i>
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
};
</script>

<style lang="scss" scoped>
.toolbar {
  i {
    font-size: 25px;
  }
}
.story-item {
  cursor: pointer;
  border-radius: 25px;
  -webkit-box-shadow: 0px 7px 17px 4px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 0px 7px 17px 4px rgba(0, 0, 0, 0.61);
  box-shadow: 0px 7px 17px 4px rgba(0, 0, 0, 0.61);

  display: flex;
  flex-direction: column;
}
.title-wrapper {
  min-height: 120px;
  h2 {
    word-break: break-word;
  }
}
.img-container {
  display: flex;
  flex-direction: column;
  height: 300px;
  overflow: hidden;
  border-radius: 25px 25px 0 0;

  img {
    height: auto;
  }
}
</style>
