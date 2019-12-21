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
  methods: {
    async login() {
      const {
        data: { access_token },
      } = await AuthService.login(this.credentials);

      await this.$store.dispatch('auth/login', access_token);
      this.$router.push({ path: '/admin' });
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
