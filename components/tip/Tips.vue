<template>
  <section v-if="!tips || !tips.length">
    <p class="p-5">Žiadne rubriky neboli pridané.</p>
  </section>
  <ul v-else class="mt-5 tip-grid">
    <tip
      v-for="tip in tips"
      :key="tip.id"
      :tip="tip"
      :isAuthenticated="isAuthenticated"
      @approveTip="approveFunction"
      @deleteTip="deleteFunction"
    />
  </ul>
</template>

<script>
import Tip from '@/components/tip/Tip';

export default {
  components: { Tip },
  props: {
    tips: {
      type: Array,
      required: true,
    },
    isAuthenticated: {
      type: Boolean,
      required: true,
    },
    approveFunction: {
      type: Function,
      required: true,
    },
    deleteFunction: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.tip-grid {
  list-style: none;
}
</style>
