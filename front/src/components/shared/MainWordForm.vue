<script>
import MainInput from "@/components/shared/MainInput.vue";
import MainButton from "@/components/shared/MainButton.vue";
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "MainWordForm",
  components: { MainButton, MainInput },
  methods: {
    formSubmit() {
      if (!this.wordItem.word || !this.wordItem.translate) return;

      const payload = {
        id: this.wordItem.id ? this.wordItem.id : new Date().getTime(),
        word: this.wordItem.word,
        translate: this.wordItem.translate,
      };
      this.selectEmitEvent(payload);
    },
    selectEmitEvent(payload) {
      if (this.wordItem.id) {
        this.updateCurrentWord(payload);
      } else {
        this.pushNewWord(payload);
      }
    },
    ...mapActions({
      pushNewWord: "pushNewWord",
      changeWord: "changeWord",
      changeTranslate: "changeTranslate",
      changeId: "changeId",
      updateCurrentWord: "updateCurrentWord",
    }),
  },
  computed: {
    ...mapState({
      wordItem: (state) => state.word.wordItem,
    }),
    btnText() {
      return this.wordItem.id ? "Edit new word" : "Add new word";
    },
  },
});
</script>

<template>
  <form class="word-form" @submit.prevent="formSubmit">
    <MainInput
      label="Add word"
      :text="wordItem.word"
      @update:modelText="(text) => changeWord(text)"
    />
    <MainInput
      label="Add translate"
      :text="wordItem.translate"
      @update:modelText="(text) => changeTranslate(text)"
    />
    <MainButton type="submit" :btnText="btnText"></MainButton>
  </form>
</template>

<style scoped>
.word-form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
</style>
