<template functional>
  <footer class="footer">
    <h3 class="text-center p-2 m-0">Nájdete nás aj na sociálnych sieťach:</h3>
    <section class="disp-flex flex-center font-size-2">
      <a href="https://www.facebook.com/pomahajme.sk/" target="_blank">
        <i class="fab fa-facebook-square"></i>
      </a>
    </section>
    <section class="disp-flex flex-space-evenly text-center">
      <div>
        <h3 class="p-2">Kontakty:</h3>
        <p><i class="fas fa-envelope"></i> info@pomahajme.sk</p>
        <p><i class="fas fa-phone"></i> 0949 01 22 02</p>
      </div>
      <div>
        <h3 class="p-2">Sponzori:</h3>
      </div>
    </section>
  </footer>
</template>

<style lang="scss">
@import '@/assets/sass/_variables';

a {
  color: $white;
}
.footer {
  background-color: $blue;
  color: $white;
  min-height: $footer-height;
}
</style>
