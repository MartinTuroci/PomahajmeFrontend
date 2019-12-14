<template>
  <nav class="nav w-100" :class="hasScrolled ? 'background-filled' : 'background-transparent'">
    <input ref="toggle" type="checkbox" id="toggle" />
    <label for="toggle">
      <div class="hamburger">
        <div></div>
      </div>
    </label>
    <div class="menu">
      <nuxt-link to="/">
        <span @click="hideMobileSideNav">Úvod</span>
      </nuxt-link>
      <nuxt-link to="/o-nas">
        <span @click="hideMobileSideNav">O nás</span>
      </nuxt-link>
      <nuxt-link to="/pribehy">
        <span @click="hideMobileSideNav">Príbehy</span>
      </nuxt-link>
      <nuxt-link to="/spolupraca">
        <span @click="hideMobileSideNav">Spolupráca</span>
      </nuxt-link>
      <nuxt-link to="/inzercia">
        <span @click="hideMobileSideNav">Inzercia</span>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      hasScrolled: this.$nuxt.$route.path !== `/`,
    };
  },
  watch: {
    $route() {
      this.hasScrolled = this.$nuxt.$route.path !== `/`;
    },
  },
  methods: {
    handleScroll(event) {
      this.hasScrolled = window.scrollY || this.$nuxt.$route.path !== `/`;
    },
    hideMobileSideNav() {
      this.$refs.toggle.checked = false;
    },
  },
  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/_variables';
a {
  color: $white;
}
.background-filled {
  background-color: $blue;
  transition: all 1s;
}
.background-transparent {
  background-color: transparent;
  transition: all 1s;
}
.nav {
  position: fixed;
  top: 0;
  text-align: right;
  height: $nav-height;
  line-height: 70px;
  z-index: 2;
}
.menu {
  margin: 0 30px 0 0;
}
.menu a {
  clear: right;
  text-decoration: none;
  color: white;
  margin: 0 10px;
  line-height: 70px;
  transition: all 1s;
}
label {
  width: 100px;
  font-size: 26px;
  display: none;
  float: right;
}

#toggle {
  display: none;
}
.hamburger {
  position: relative;
  top: 20px;
  padding: 1rem;
}
.hamburger > div {
  background-color: $white;
  position: relative;
  height: 4px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}
.hamburger > div::before,
.hamburger > div::after {
  content: '';
  position: absolute;
  z-index: 1;
  top: -10px;
  width: 100%;
  height: 4px;
  background: inherit;
  transition: all 1s;
}
.hamburger > div::after {
  top: 10px;
}
@media only screen and (max-width: 500px) {
  label {
    display: block;
    cursor: pointer;
    float: right;
  }
  label:focus {
    display: none;
    opacity: 0;
  }
  label:checked {
    display: none;
    opacity: 0;
  }
  .menu {
    position: fixed;
    top: 70px;
    left: 0;
    bottom: 0;
    text-align: left;
    width: 0;
    background: $blue;
    transition: width 1s;
  }
  .menu a {
    display: block;
    opacity: 0;
    transition: all 1s;
  }
  #toggle:checked ~ .menu a {
    display: block;
    opacity: 1;
  }
  #toggle:checked ~ .menu {
    width: 70%;
    opacity: 0.9;
  }
  #toggle:checked + label .hamburger div::before {
    display: none;
  }
  #toggle:checked + label .hamburger div::after {
    top: 0;
    width: 40px;
    transform: rotate(90deg);
  }
  #toggle:checked + label .hamburger div {
    top: 0;
    width: 40px;
    transform: rotate(45deg);
  }
}
</style>
