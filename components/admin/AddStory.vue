<template>
  <div class="disp-flex flex-space-evenly h-100 add-story-container">
    <h2>Pridať príbeh</h2>
    <input type="text" v-model="story.title" placeholder="Nadpis" />
    <textarea v-model="story.largeText" placeholder="Popis" id cols="30" rows="10"></textarea>
    <FileUploader ref="fileUploader" class="file-uploader" @filesChanged="filesChanged"></FileUploader>
    <button class="save-btn" @click="storeStory">Uložiť</button>
  </div>
</template>

<script>
import FileUploader from '@/components/FileUploader';
import StoryService from '@/services/storyService';
import Story from '@/models/Story';
import { wrapHtmlText } from '@/utils/helpers';

export default {
  data() {
    return {
      story: new Story(),
    };
  },
  components: { FileUploader },
  methods: {
    filesChanged(files) {
      this.story.images = files;
      // TODO: Refactor to do the joining on server side.
      this.story.serializedImageLocations = files.map(file => file.name).join('|');
    },
    async storeStory() {
      this.story.largeText = wrapHtmlText(this.story.largeText);
      const {
        data: {
          data: { id },
        },
      } = await StoryService.storeStory(this.story);
      await StoryService.uploadImages(this.story.images, id);
      this.story = new Story();
      this.$refs.fileUploader.clear();

      // TODO: add custom snackbar to both error and success case
    },
  },
};
</script>

<style lang="scss" scoped>
.file-uploader {
  width: 80%;
}
.add-story-container {
  flex-direction: column;
  text-align: center;
}
.add-story-container * {
  width: 80%;
}
.save-btn {
  width: 150px;
}
</style>
