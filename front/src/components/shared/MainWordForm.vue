<script>
import MainInput from "@/components/shared/MainInput.vue";
import MainButton from "@/components/shared/MainButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainWordForm",
  components: { MainButton, MainInput },
  data() {
    return {
      word: "",
      translate: "",
    };
  },
  methods: {
    formSubmit() {
      if (!this.word || !this.translate) return;

      const payload = {
        id: new Date().getTime(),
        word: this.word,
        translate: this.translate,
      };
      this.$emit("createNewWord", payload);
      this.clearInputs();
    },
    clearInputs() {
      this.word = "";
      this.translate = "";
    },
  },
});
</script>

<template>
  <form class="word-form" @submit.prevent="formSubmit">
    <MainInput
      label="Add word"
      :text="word"
      @update:modelText="(text) => (word = text)"
    />
    <MainInput
      label="Add translate"
      :text="translate"
      @update:modelText="(text) => (translate = text)"
    />
    <MainButton type="submit" btnText="Add to dictionary"></MainButton>
  </form>
</template>

<style scoped>
.word-form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
