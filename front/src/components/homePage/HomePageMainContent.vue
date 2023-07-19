<script>
import { defineComponent } from "vue";
import MainWordForm from "@/components/shared/MainWordForm.vue";
import HomePageWordList from "@/components/homePage/HomePageWordList.vue";
import MainModal from "@/components/shared/MainModal.vue";
import MainButton from "@/components/shared/MainButton.vue";
export default defineComponent({
  name: "HomePageMainContent",
  components: { MainButton, MainModal, MainWordForm, HomePageWordList },
  data() {
    return {
      words: [],
      isShowModal: false,
    };
  },
  methods: {
    pushNewWord(item) {
      this.words.push(item);
      console.log(this.words);
    },
    deleteWord(id) {
      this.words = this.words.filter((item) => item.id !== id);
    },
    switchModal(isShowModal) {
      this.isShowModal = isShowModal;
    },
  },
});
</script>

<template>
  <main class="main-layout__main">
    <MainButton btn-text="Add word" @onClick="switchModal(true)" />
    <HomePageWordList :wordList="words" @deleteWordItem="deleteWord($event)" />
    <MainModal v-if="isShowModal" @closeModal="switchModal($event)">
      <MainWordForm @createNewWord="pushNewWord" />
    </MainModal>
  </main>
</template>

<style scoped>
.main-layout__main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
}
</style>
