<template>
  <section v-if="tip">
    <base-text-display :title="tip.title" :text="tip.largeText" />
  </section>
</template>

<script>
import TipService from '@/services/tip.service';
import BaseTextDisplay from '@/components/BaseTextDisplay';

export default {
  components: {
    BaseTextDisplay,
  },
  validate({ params: { id } }) {
    return /^\d+$/.test(id);
  },
  head() {
    return {
      title: `Tip č. ${this.tip.id}`,
      meta: [{ hid: 'og:title', property: 'og:title', content: `${this.tip.title}` }],
    };
  },
  async asyncData({ params, payload }) {
    if (payload) return { tip: payload };
    const { data } = await TipService.getTip(params.id);
    return { tip: data };
  },
};
</script>
