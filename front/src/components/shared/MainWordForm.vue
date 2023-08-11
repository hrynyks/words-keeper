<script>
import MainInput from "@/components/shared/MainInput.vue";
import MainButton from "@/components/shared/MainButton.vue";
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "MainWordForm",
  components: { MainButton, MainInput },
  data() {
    return {
      // id: "",
      // word: "",
      // translate: "",
    };
  },
  methods: {
    formSubmit() {
      if (!this.word || !this.translate) return;

      const payload = {
        id: this.id ? this.id : new Date().getTime(),
        word: this.word,
        translate: this.translate,
      };
      this.selectEmitEvent(payload);
    },
    updateInputs(item) {
      this.id = item.id;
      this.word = item.word;
      this.translate = item.translate;
    },
    selectEmitEvent(payload) {
      if (this.id) {
        this.$emit("editWord", payload);
      } else {
        this.pushNewWord(payload);
      }
    },
    ...mapActions({
      pushNewWord: "pushNewWord",
      changeWord: "changeWord",
      changeTranslate: "changeTranslate",
      changeId: "changeId",
    }),
  },
  computed: {
    ...mapState({
      word: (state) => state.word.word,
      translate: (state) => state.word.translate,
      id: (state) => state.word.id,
    }),
    btnText() {
      return this.id ? "Edit new word" : "Add new word";
    },
  },
  emits: ["editWord"],
});
</script>

<template>
  <form class="word-form" @submit.prevent="formSubmit">
    <MainInput
      label="Add word"
      :text="word"
      @update:modelText="(text) => changeWord(text)"
    />
    <MainInput
      label="Add translate"
      :text="translate"
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
