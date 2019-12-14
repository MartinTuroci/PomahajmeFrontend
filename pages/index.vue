<template>
  <div class="container">
    <div class="landing-img" alt></div>
    <div class="quote-container">
      <div class="quote">
        <p>„Pomáhajme radi a hrdo.“</p>
      </div>
      <button class="m-3 font-size-2" @click="smoothScroll">Chcem vedieť viac</button>
    </div>
    <section ref="ourValues" class="w-100 text-center">
      <div class="disp-flex flex-center m-5">
        <img src="@/assets/images/logo.jpg" alt="Pomahajme.sk" />
      </div>
      <h1>Naše hodnoty</h1>
      <div class="disp-flex flex-space-evenly text-center m-5">
        <article class="card mb-5 pb-5">
          <i class="fas fa-user-friends font-size-5 mt-5 mb-5"></i>
          <h2>Ľudia</h2>
          <p>Pretože ľudskosť je našou podstatou.</p>
        </article>
        <article class="card mb-5 pb-5">
          <i class="fas fa-hands-helping font-size-5 mt-5 mb-5"></i>
          <h2>Pomoc</h2>
          <p>Pretože pomáhať môže ktokoľvek.</p>
        </article>
        <article class="card mb-5 pb-5">
          <i class="fas fa-child font-size-5 mt-5 mb-5"></i>
          <h2>Detičky</h2>
          <p>Pretože deti sú naša budúcnosť.</p>
        </article>
      </div>
      <h1 class="mb-5">Spoločne vytvorme pre naše deti lepšiu budúcnosť</h1>
      <!-- <article class="text-center p-5">
        <h1 class="text-center">O nás</h1>Ahojte priatelia,
        sme zatiaľ facebooková komunita ľudí ktorá chce pomáhať tým ktorý to najviac
        potrebujú. Chceme pomáhať našim najmenším, teda detičkám ktoré to
        potrebujú a ktorých rodičia finančne nezvládajú rôzne liečby, rehabilitácie
        a pod.
        Sme tu preto lebo chceme a budeme pomáhať, chceme každému ukázať že
        medzi nami sú aj ľudia ktorý potrebujú pomoc, ľudia ktorým štát ,,nevie,
        nechce´´ pomôcť a preto ak sa chceš pridať k nám tak si prezri naše výzvy
        a vyber si komu pomôžeš práve ty. Ak chceš pomôcť nám ako organizácii pri
        rozvoji stránky alebo inak, napíš nám na FB alebo na E-mail budeme vďačný.
        Sme toho názoru že aj jediné Euríčko pomôže a dokonca môže zachrániť alebo
        zmeniť niekomu život, lebo keď sa spojí napríklad 1000 ľudí pre každého je to
        len jedno Euro, ale do kopy to môže byť obrovská čiastka ktorá určite pomôže.
        Ak si o nás nikdy nepočul alebo nepočula tak nás nájdeš aj na FB:
      </article>-->
    </section>
    <section ref="howToStart" class="how-to-start w-100">
      <h1 class="text-center p-5">Ako začať?</h1>
      <article class="disp-flex flex-space-evenly pb-2">
        <img src="@/assets/images/color-hands-resized-compressed.jpg" alt="zazrak" />
        <div>
          <h2>1. Nájsť príbeh</h2>
          <p>Nájdite si príbeh, ktorý Vás osloví.</p>
        </div>
      </article>
      <article class="disp-flex flex-space-evenly pb-2">
        <div>
          <h2>2. Stať sa hrdinom</h2>
          <p>Nezáleží na tom, či je pomoc finančná. Aj malým gestom je možné urobiť veľké zázraky.</p>
        </div>
        <img src="@/assets/images/hero-resized.jpg" alt="zazrak" />
      </article>
      <div class="w-100 text-center">
        <button class="m-3 font-size-2">
          <nuxt-link to="/pribehy">Začať pomáhať</nuxt-link>
        </button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    smoothScroll(e) {
      Math.easeInOutQuad = function(t, b, c, d) {
        t /= d / 2;
        if (t < 1) {
          return (c / 2) * t * t + b;
        }
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const requestAnimFrame = (function() {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          (callback => window.setTimeout(callback, 1000 / 60))
        );
      })();

      const to = this.$refs.howToStart.getBoundingClientRect().top;
      const duration = 900;
      const move = amount => {
        document.documentElement.scrollTop = amount;
        document.body.parentNode.scrollTop = amount;
        document.body.scrollTop = amount;
      };
      const position = () =>
        document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
      let start = position(),
        change = to - start,
        currentTime = 0,
        increment = 20;
      const animateScroll = () => {
        // increment the time
        currentTime += increment;
        // find the value with the quadratic in-out easing function
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        // move the document.body
        move(val);
        // do the animation unless its over
        if (currentTime < duration) {
          requestAnimFrame(animateScroll);
        }
      };
      animateScroll();
    },
  },
};
</script>
<style scoped lang="scss">
@import '@/assets/sass/_variables';

.card {
  flex-basis: 32%;
  border: 1px solid grey;
  border-radius: 25px;
  -webkit-box-shadow: 0px 13px 15px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 13px 15px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 13px 15px -3px rgba(0, 0, 0, 0.75);
}
.landing-img {
  background: url('~assets/images/landing-compressed.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -webkit-moz-size: cover;
  -webkit-o-size: cover;
  background-size: cover;
  opacity: 0.8;
  z-index: -1;
  height: 100vh;
  width: 100%;
}
.quote-container {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  height: 100vh;
  width: 100%;
}
.quote {
  font-size: 29px;
  text-align: center;
  margin-right: 15%;
  margin-left: 15%;
  padding: 20px;
  border-radius: 25px;
  color: white;
  background: rgba(2, 204, 228, 0.8); /* #02cce4 */
}
.how-to-start {
  background-color: $pink;
  color: white;
  min-height: 100vh;
}
.how-to-start article > img {
  flex-basis: 50%;
  @media only screen and (max-width: 500px) {
    flex-basis: 0;
  }
}
.how-to-start article > div {
  flex-basis: 25%;
  @media only screen and (max-width: 500px) {
    flex-basis: 0;
    text-align: center;
  }
}
.how-to-start article:nth-child(odd) {
  @media only screen and (max-width: 500px) {
    flex-direction: column-reverse;
  }
}
article img {
  width: 40%;
  border-radius: 25px;
  @media only screen and (max-width: 500px) {
    width: 80%;
  }
}
</style>
