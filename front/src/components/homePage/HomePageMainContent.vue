<script>
import { defineComponent } from "vue";
import MainWordForm from "@/components/shared/MainWordForm.vue";
import HomePageWordList from "@/components/homePage/HomePageWordList.vue";
import MainModal from "@/components/shared/MainModal.vue";
import { mapActions, mapState } from "vuex";
export default defineComponent({
  name: "HomePageMainContent",
  components: { MainModal, MainWordForm, HomePageWordList },
  data() {
    return {
      words: [],
    };
  },
  methods: {
    pushNewWord(item) {
      this.words.push(item);
      this.changeShowModal(false);
    },
    deleteWord(id) {
      this.words = this.words.filter((item) => item.id !== id);
    },
    editWordItem(item) {
      this.changeShowModal(true);
      this.$nextTick(() => {
        this.$refs.wordForm.updateInputs(item);
      });
    },
    updateCurrentWord(item) {
      this.words = this.words.map((el) => (el.id === item.id ? item : el));
      this.changeShowModal(false);
    },
    ...mapActions({
      changeShowModal: "changeShowModal",
    }),
  },
  computed: {
    ...mapState({
      isShowModal: (state) => state.isShowModal,
    }),
  },
});
</script>

<template>
  <main class="main-layout__main">
    <HomePageWordList
      :wordList="words"
      @deleteWordItem="deleteWord($event)"
      @editWordItem="editWordItem($event)"
    />
    <MainModal v-if="isShowModal" @closeModal="changeShowModal($event)">
      <MainWordForm
        ref="wordForm"
        @createNewWord="pushNewWord"
        @editWord="updateCurrentWord"
      />
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
