<template>
  <div
    class="uploader"
    @dragenter="onDragEnter"
    @dragleave="onDragLeave"
    @dragover.prevent
    @drop="onDrop"
    :class="{dragging: isDragging}"
  >
    <div v-if="!images.length">
      <i class="fa fa-cloud-upload-alt font-size-5"></i>
      <p>Potiahnite sem súbory</p>
      <div>alebo</div>
      <div class="file-input">
        <label for="file">Zvoľte súbor</label>
        <input type="file" id="file" @change="fileChange" multiple />
      </div>
    </div>

    <div v-else class="images-preview">
      <div class="image-wrapper" v-for="(image, index) in images" :key="index">
        <i class="fa fa-times-circle x-btn" @click="removeFile(index)"></i>
        <img :src="image" v-if="image" />
        <svg
          v-else
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="file"
          class="svg-inline--fa fa-file fa-w-10 mb-1"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
          />
        </svg>
        <div class="details" :class="{'not-an-image': !image}">
          <span class="name">{{ files[index].name }}</span>
          <span class="size">{{ (files[index].size / 1000000).toFixed(2)}} MB</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isDragging: false,
    counter: 0,
    files: [],
    images: [],
  }),
  methods: {
    onDragEnter(e) {
      e.preventDefault();
      this.counter++;
      this.isDragging = true;
    },
    onDragLeave(e) {
      e.preventDefault();
      this.counter--;
      this.isDragging = this.counter > 0;
    },
    onDrop(e) {
      e.preventDefault();
      e.stopPropagation();

      this.isDragging = false;
      [...e.dataTransfer.files].forEach(file => this.addImage(file));
      this.$emit('filesChanged', this.files);
    },
    removeFile(index) {
      this.files.splice(index, 1);
      this.images.splice(index, 1);
      this.$emit('filesChanged', this.files);
    },
    fileChange(e) {
      e.preventDefault();
      e.stopPropagation();

      [...e.target.files].forEach(file => this.addImage(file));
      this.$emit('filesChanged', this.files);
    },
    addImage(file) {
      this.files.push(file);
      if (!file.type.match('image.*')) {
        this.images.push(null);
        return;
      }
      // TODO: fix bug
      const reader = new FileReader();
      reader.onload = e => this.images.push(e.target.result);
      reader.readAsDataURL(file);
    },
    clear() {
      this.images = [];
      this.files = [];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables';

.uploader {
  background: $blue;
  color: $white;
  padding: 40px 15px;
  text-align: center;
  border-radius: 25px;
  border: dashed 3px $white;
  position: relative;
  font-size: 20px;

  &.dragging {
    background: $white;
    color: $blue;
    border: 3px dashed $blue;

    .file-input label {
      background: $blue;
      color: $white;
    }
  }
}
.file-input {
  position: relative;
  margin: auto;
  width: 200px;
  height: 68px;

  label,
  input {
    background: $white;
    color: $blue;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0 10px 0;
    border-radius: 25px;
    margin-top: 7px;
    cursor: pointer;
  }
  input {
    opacity: 0;
    z-index: -1;
  }
}
.images-preview {
  display: flex;
  flex-wrap: wrap;

  .image-wrapper {
    display: flex;
    width: 160px;
    margin: 10px;
    height: 150px;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    border-radius: 25px;
    img {
      max-height: 105px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: $white;
    color: $black;
    padding: 3px 6px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
  .name {
    overflow: hidden;
    height: 25px;
  }
  .not-an-image {
    position: relative;
    top: 10px;
  }
  .x-btn {
    position: absolute;
    top: -10px;
    right: -10px;
    cursor: pointer;
  }
}
</style>