<template functional>
  <div class="container">
    <i class="fas fa-sad-tear font-size-5"></i>
    <h1>Ooops, stránka sa nenašla.</h1>
    <nuxt-link to="/">
      <span class="text-blue text-underline font-size-2">Prejsť na hlavnú stránku.</span>
    </nuxt-link>
  </div>
</template>
<style lang="scss" scoped>
.container {
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
