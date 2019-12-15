<template>
  <div class="w-100">
    <div class="container disp-flex flex-center">
      <div class="login-box text-center">
        <h2 class="text-white">Prihlásenie</h2>
        <input type="text" v-model="credentials.name" placeholder="Meno" />
        <input type="password" v-model="credentials.password" placeholder="Heslo" />
        <button @click="login">Prihlásiť sa</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AuthService from '@/services/authService';

export default {
  data() {
    return {
      credentials: {
        name: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapGetters({ isAuthenticated: 'auth/isAuthenticated' }),
  },
  methods: {
    async login() {
      const {
        data: { access_token },
      } = await AuthService.login(this.credentials);
      //   this.updateLocalStorage(access_token);
      this.$router.push({ path: '/admin' });
    },
    updateLocalStorage(token, expiresIn) {
      localStorage.removeItem('user-token');
      localStorage.setItem('user-token', token);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables';

.container {
  min-height: 80vh;
}
div .login-box * {
  margin: 20px 0 20px 0;
}
div .login-box {
  background: $blue;
  padding: 8%;
  border-radius: 25px;
}
</style>
