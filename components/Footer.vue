<template functional>
  <footer class="footer">
    <h3 class="text-center p-2 m-0">Nájdete nás aj na sociálnych sieťach</h3>
    <section class="disp-flex flex-center font-size-2">
      <a href="https://www.facebook.com/pomahajme.sk/" target="_blank">
        <i class="fab fa-facebook-square"></i>
      </a>
    </section>
    <section class="disp-flex flex-space-evenly">
      <div>
        <h2 class="p-2 text-center">Kontakty</h2>
        <p><i class="fas fa-id-card"></i> Tomáš Berka zakladateľ a predseda o.z.</p>
        <p><i class="fas fa-envelope"></i> info@pomahajme.sk</p>
        <p><i class="fas fa-phone"></i> 0949 01 22 02</p>
        <b>Transparentný účet:</b>
        <p>
          <a href="https://ib.fio.sk/ib/transparent?a=2201942423" target="_blank">
            <i class="fas fa-piggy-bank"></i> SK41 8330 0000 0022 0194 2423
          </a>
        </p>
      </div>
      <div>
        <h2 class="p-2 text-center">Reklamní partneri</h2>
        <div class="partners">
          <a v-for="(p, i) in $options.methods.getPartners()" :key="i" :href="p.url" target="_blank">
            <img :src="require(`@/assets/images/${p.logo}`)" :alt="p.label" />
            <p>{{ p.label }}</p>
          </a>
        </div>
      </div>
      <div>
        <h2 class="p-2 text-center">Sponzori</h2>
        <div class="partners">
          <a v-for="(s, i) in $options.methods.getSponsors()" :key="i" :href="s.url" target="_blank">
            <img :src="require(`@/assets/images/${s.logo}`)" :alt="s.label" />
            <p>{{ s.label }}</p>
          </a>
        </div>
      </div>
    </section>
    <section class="text-center p-2">2020 © pomahajme.sk / Všetky práva vyhradené.</section>
  </footer>
</template>

<script>
export default {
  methods: {
    getSponsors() {
      return [
        { label: 'Nidum - Nový level bývania', url: 'https://www.mynidum.sk/', logo: 'nidum.svg' },
        { label: 'Pajko', url: 'https://pajko.sk/', logo: 'pajko.png' },
        { label: 'Insempre', url: 'https://insempre.sk/', logo: 'insempre.png' },
      ];
    },
    getPartners() {
      return [
        { label: 'DeDelfínoterapia SK', url: 'https://delfinoterapiask.eu/', logo: 'delfinoterapia.png' },
        { label: 'RDM Garáž', url: 'https://eshop.rdmgaraz.sk/', logo: 'rdm.png' },
        { label: 'Maco s.r.o.', url: 'https://www.macosro.sk/', logo: 'maco.png' },
        { label: 'PK Auto', url: 'http://pkauto.sk/', logo: 'pkauto.svg' },
      ];
    },
  },
};
</script>

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
  img {
    max-height: 50px;
    width: auto;
  }
  a {
    padding: 1rem;
  }
}
</style>
