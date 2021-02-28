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
        <h2 class="p-2 text-center">Kontakty:</h2>
        <p><i class="fas fa-envelope"></i> info@pomahajme.sk</p>
        <p><i class="fas fa-phone"></i> 0949 01 22 02</p>
        <b>Transparentný účet:</b>
        <p><i class="fas fa-piggy-bank"></i> SK41 8330 0000 0022 0194 2423</p>
      </div>
      <div>
        <h2 class="p-2 text-center">Partneri:</h2>
        <div class="partners">
          <a href="https://delfinoterapiask.eu/" target="_blank">
            <img src="@/assets/images/delfinoterapia.png" alt="delfinoterapia" />
            <p>Delfínoterapia SK</p>
          </a>
          <a href="https://eshop.rdmgaraz.sk/" target="_blank">
            <img src="@/assets/images/rdm.png" alt="RDM Garáž" />
            <p>RDM Garáž</p>
          </a>
        </div>
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

.partners {
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  // a {
  //   flex-basis: 200px;
  // }
  img {
    max-height: 50px;
    width: auto;
  }
}
</style>
