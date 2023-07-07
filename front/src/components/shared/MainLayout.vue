<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
});
</script>

<template>
  <div class="main-layout">
    <slot name="header"></slot>

    <slot name="main"></slot>

    <slot name="footer"></slot>
  </div>
</template>

<style scoped>
.main-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
