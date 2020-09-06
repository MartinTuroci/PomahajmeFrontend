<template functional>
  <li class="p-1">
    <span class="title">
      <h5>
        <i>{{ props.tip.author }}</i>
      </h5>
      <p class="pl-1">({{ props.tip.createdAt | dateFormat }})</p>
    </span>
    <nuxt-link :to="`/rubrika/${props.tip.id}`">
      <h2>{{ props.tip.title }}</h2>
    </nuxt-link>
    <i
      v-if="props.isAuthenticated"
      class="p-1 danger fas fa-trash scale"
      @click="listeners['deleteTip'](props.tip.id)"
    ></i>
    <i
      v-if="props.isAuthenticated && !props.tip.isApproved"
      class="p-1 success fas fa-check scale"
      @click="listeners['approveTip'](props.tip)"
    ></i>
  </li>
</template>

<script>
export default {
  props: {
    tip: {
      type: Object,
      required: true,
    },
    isAuthenticated: {
      type: Boolean,
      required: true,
    },
  },
  filters: {
    dateFormat: function(val) {
      return new Date(val).toLocaleString('sk-Sk');
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
}

.fas {
  position: relative;
  float: right;
  bottom: 70px;
  font-size: 25px;
  cursor: pointer;
}
</style>
