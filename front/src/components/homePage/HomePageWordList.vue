<script>
import { defineComponent } from "vue";
import HomePageWordItem from "@/components/homePage/HomePageWordItem.vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "HomePageWordList",
  components: { HomePageWordItem },
  methods: {
    editWordItem(item) {
      this.$emit("editWordItem", item);
    },
    ...mapActions({
      deleteWord: "deleteWord",
      fillFormWithCardData: "fillFormWithCardData",
      fetchWords: "fetchWords",
    }),
  },
  computed: {
    ...mapState({
      words: (state) => state.word.words,
    }),
  },
  mounted() {
    console.log("create");
    this.fetchWords();
  },
  unmounted() {
    console.log("destroy");
  },
});
</script>

<template>
  <h1>List</h1>
  <HomePageWordItem
    v-for="item in words"
    :key="item.id"
    :itemWord="item"
    @deleteWordItem="deleteWord($event)"
    @editWordItem="fillFormWithCardData($event)"
  />
</template>

<style scoped></style>
