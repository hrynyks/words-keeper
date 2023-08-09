<script>
import { defineComponent } from "vue";
import HomePageWordItem from "@/components/homePage/HomePageWordItem.vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "HomePageWordList",
  components: { HomePageWordItem },
  props: {
    wordList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    editWordItem(item) {
      this.$emit("editWordItem", item);
    },
    ...mapActions({
      deleteWord: "deleteWord",
    }),
  },
  emits: ["editWordItem"],
});
</script>

<template>
  <h1>List</h1>
  <HomePageWordItem
    v-for="item in wordList"
    :key="item.id"
    :itemWord="item"
    @deleteWordItem="deleteWord($event)"
    @editWordItem="editWordItem($event)"
  />
</template>

<style scoped></style>
