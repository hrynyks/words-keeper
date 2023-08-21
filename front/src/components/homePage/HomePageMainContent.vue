<script>
import { defineComponent } from "vue";
import HomePageWordList from "@/components/homePage/HomePageWordList.vue";
export default defineComponent({
  name: "HomePageMainContent",
  components: { HomePageWordList },
});
</script>

<template>
  <main class="main-layout__main">
    <HomePageWordList />
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
