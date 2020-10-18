<template>
  <div class="disp-flex flex-space-evenly h-100 add-AuctionItem-container">
    <h2>Pridať inzerát</h2>
    <input type="text" v-model="AuctionItem.title" placeholder="Nadpis" />
    <textarea name="text" v-model="AuctionItem.largeText" placeholder="Popis" cols="30" rows="10"></textarea>
    <FileUploader ref="fileUploader" class="file-uploader" @filesChanged="filesChanged"></FileUploader>
    <button class="save-btn" @click="storeAuctionItem">Uložiť</button>
  </div>
</template>

<script>
import FileUploader from '@/components/FileUploader';
import AuctionItemService from '@/services/auctionItemService';
import AuctionItem from '@/models/AuctionItem';
import { wrapHtmlText } from '@/utils/helpers';

export default {
  data() {
    return {
      AuctionItem: new AuctionItem(),
    };
  },
  components: { FileUploader },
  methods: {
    filesChanged(files) {
      this.AuctionItem.images = files;
      // TODO: Refactor to do the joining on server side.
      this.AuctionItem.serializedImageLocations = files.map(file => file.name).join('|');
    },
    async storeAuctionItem() {
      this.AuctionItem.largeText = wrapHtmlText(this.AuctionItem.largeText);
      const {
        data: {
          data: { id },
        },
      } = await AuctionItemService.storeAuctionItem(this.AuctionItem);
      await AuctionItemService.uploadImages(this.AuctionItem.images, id);
      this.AuctionItem = new AuctionItem();
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
.add-AuctionItem-container {
  flex-direction: column;
  text-align: center;
}
.add-AuctionItem-container * {
  width: 80%;
}
.save-btn {
  width: 150px;
}
</style>
