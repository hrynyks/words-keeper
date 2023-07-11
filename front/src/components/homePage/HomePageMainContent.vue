<script>
import { defineComponent } from "vue";
import MainWordForm from "@/components/shared/MainWordForm.vue";
import HomePageWordList from "@/components/homePage/HomePageWordList.vue";
export default defineComponent({
  name: "HomePageMainContent",
  components: { MainWordForm, HomePageWordList },
  data() {
    return {
      words: [],
    };
  },
  methods: {
    pushNewWord(item) {
      this.words.push(item);
      console.log(this.words);
    },
  },
});
</script>

<template>
  <main class="main-layout__main">
    <MainWordForm @createNewWord="pushNewWord" />
    <HomePageWordList :wordList="words" />
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
