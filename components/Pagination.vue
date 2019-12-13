<template>
  <div class="pagination-container p-2">
    <i v-show="page > 1" class="fas fa-angle-double-left" @click="goToPrevPage"></i>
    <input type="number" v-model="page" @change="pageChanged" min="1" :max="lastPage" />
    <span>/</span>
    <span>{{lastPage}}</span>
    <i v-show="page < lastPage" class="fas fa-angle-double-right" @click="goToNextPage"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1
    };
  },
  props: {
    lastPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToPrevPage() {
      this.page--;
      this.$emit("pageChanged", this.page);
    },
    goToNextPage() {
      this.page++;
      this.$emit("pageChanged", this.page);
    },
    pageChanged(e) {
      const newVal = e.target.value;
      this.page =
        newVal > 0 && parseInt(newVal) <= parseInt(this.lastPage) ? newVal : 1;
      this.$emit("pageChanged", this.page);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination-container * {
  color: $blue;
  padding: 1rem;
}
.pagination-container input {
  width: 25px;
}
.pagination-container i {
  &:hover {
    cursor: pointer;
  }
}
</style>
