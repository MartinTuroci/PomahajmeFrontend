<template>
  <div>
    <section v-if="successMsg || errMsg" class="msg">
      <p>{{ successMsg || errMsg }}</p>
      <a @click="addNext($event)">Pridať ďalší príspevok</a>
    </section>
    <form v-else class="create-tip">
      <h2>Pridať príspevok</h2>
      <input type="text" v-model="tip.title" placeholder="Nadpis" />
      <input type="text" v-model="tip.author" placeholder="Autor" />
      <input type="text" v-model="tip.email" placeholder="Email" />
      <vueditor ref="editor" />
      <button type="submit" class="create-tip__save" :disabled="isSubmitDisabled" @click="storeTip($event)">
        Pridať
      </button>
    </form>
  </div>
</template>

<script>
import TipService from '@/services/tip.service';

export default {
  data() {
    return {
      tip: {
        title: '',
        author: '',
        email: '',
      },
      successMsg: '',
      errMsg: '',
    };
  },
  computed: {
    isSubmitDisabled() {
      return Object.values(this.tip).some(v => !v);
    },
  },
  methods: {
    async storeTip(e) {
      e.preventDefault();

      const largeText = this.$refs.editor.getContent();
      if (!largeText) {
        this.errMsg = 'Ľutujeme, no nie je možné pridať príspevok bez textu.';
        return;
      }

      try {
        await TipService.storeTip({ ...this.tip, largeText });
        this.successMsg =
          'Váš príspevok bol úspešne pridaný. Bude publikovaný hneď ako ho náš tím skontroluje. Ďakujeme :)';
      } catch (error) {
        this.errMsg = 'Ľutujeme, no vyskytla pri pridávaní sa vyskytla chyba. Skúste to neskôr prosím.';
      } finally {
        this.tip = {};
      }
    },
    addNext(e) {
      e.preventDefault();
      this.errMsg = '';
      this.successMsg = '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables';

.vueditor {
  min-height: 300px;
}

.msg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  a {
    color: $blue;
  }
}
.create-tip {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  & > * {
    margin: 10px 0;
    width: 100%;
  }

  &__save {
    max-width: 150px;
  }
}
</style>
