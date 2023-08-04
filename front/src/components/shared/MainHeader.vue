<script>
import { defineComponent } from "vue";
import MainNavigation from "@/components/shared/MainNavigation.vue";

export default defineComponent({
  name: "MainHeader",
  components: { MainNavigation },
});
</script>

<template>
  <header class="main-layout__header">
    <MainNavigation />
  </header>
</template>

<style scoped>
.main-layout__header {
  background-color: #a7f3e1;
}
</style>
