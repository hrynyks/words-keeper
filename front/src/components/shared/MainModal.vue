<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainModal",
  methods: {
    closeModal() {
      this.$emit("closeModal", false);
    },
  },
});
</script>

<template>
  <div @click="closeModal" class="confirm">
    <div class="confirm__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.confirm {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999;
}

.confirm__content {
  height: 170px;
  max-width: 600px;
  width: 100%;
  margin: auto;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgb(0 0 0 / 15%), 0 8px 16px rgb(0 0 0 / 15%);
}
</style>
