<script>
import { defineComponent } from "vue";
import MainNavigation from "@/components/shared/MainNavigation.vue";
import WordFormModal from "@/components/shared/modals/WordFormModal.vue";

export default defineComponent({
  name: "MainHeader",
  components: { WordFormModal, MainNavigation },
});
</script>

<template>
  <header class="main-layout__header">
    <MainNavigation />
  </header>
  <WordFormModal />
</template>

<style scoped>
.main-layout__header {
  background-color: #a7f3e1;
}
</style>
