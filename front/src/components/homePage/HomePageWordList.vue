<script>
import { defineComponent } from "vue";
import HomePageWordItem from "@/components/homePage/HomePageWordItem.vue";

export default defineComponent({
  name: "HomePageWordList",
  components: { HomePageWordItem },
  props: {
    wordList: {
      type: Array,
      required: true,
    },
  },
});
</script>

<template>
  <h1>List</h1>
  <HomePageWordItem v-for="item in wordList" :key="item.id" :itemWord="item" />
</template>

<style scoped></style>
