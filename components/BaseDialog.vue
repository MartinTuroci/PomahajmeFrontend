<template>
  <div class="dialog p-2">
    <h2 class="text-center">{{ title }}</h2>
    <section class="dialog_content pt-2 pb-2">
      <slot />
    </section>
    <footer class="dialog__footer">
      <button @click="$emit('cancel')">Späť</button>
      <button @click="$emit('submit')">Potvrdiť</button>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables';

.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  z-index: 5;
  min-width: 300px;
  transform: translate(-50%, -50%);
  background: $body-bg;
  border: 1px solid $blue;
  border-radius: 10px;
}
.dialog_content {
  max-height: 400px;
  & > * {
    width: 100%;
  }
}
.dialog__footer {
  display: flex;
  justify-content: flex-end;
  button {
    margin-right: 15px;
  }
}
</style>
