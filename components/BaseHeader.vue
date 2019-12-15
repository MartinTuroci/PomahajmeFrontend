<template functional>
  <div>
    <h1>{{ props.heading }}</h1>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
};
</script>