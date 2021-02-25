<template functional>
  <footer class="footer">
    <h3 class="text-center p-2 m-0">Nájdete nás aj na sociálnych sieťach:</h3>
    <section class="disp-flex flex-center font-size-2">
      <a href="https://www.facebook.com/pomahajme.sk/" target="_blank">
        <i class="fab fa-facebook-square"></i>
      </a>
    </section>
    <section class="disp-flex flex-space-evenly">
      <div>
        <h3 class="p-2 text-center">Kontakty:</h3>
        <p><i class="fas fa-envelope"></i> info@pomahajme.sk</p>
        <p><i class="fas fa-phone"></i> 0949 01 22 02</p>
        <p><i class="fas fa-piggy-bank"></i> SK41 8330 0000 0022 0194 2423</p>
      </div>
      <div>
        <h3 class="p-2 text-center">Sponzori:</h3>
        <a href="https://delfinoterapiask.eu/">
          <img src="@/assets/images/delfinoterapia.png" alt="delfinoterapia" />
          <p>Delfínoterapia SK</p>
        </a>
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_variables';

.footer {
  background-color: $blue;
  color: $white;
  min-height: $footer-height;
  a {
    color: $white;
  }
}
</style>
