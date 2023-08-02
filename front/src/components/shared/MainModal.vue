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
  <div @click.stop="closeModal" class="confirm">
    <div @click.stop class="confirm__content">
      <button @click="closeModal" class="confirm__close-btn">
        <svg class="confirm__button-icon">
          <use href="../../assets/svg/sprites.svg#close-icon"></use>
        </svg>
      </button>
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
  max-width: 600px;
  width: 100%;
  margin: auto;
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgb(0 0 0 / 15%), 0 8px 16px rgb(0 0 0 / 15%);
}
.confirm__close-btn {
  position: absolute;
  right: 5px;
  top: 5px;
  &:hover {
    .confirm__button-icon {
      fill: red;
    }
  }
}
.confirm__button-icon {
  width: 30px;
  height: 30px;
}
</style>
