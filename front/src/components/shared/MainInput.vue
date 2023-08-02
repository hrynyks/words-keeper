<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainInput",
  props: {
    text: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelText", e.target.value);
    },
  },
});
</script>

<template>
  <input
    class="input"
    :placeholder="label"
    :value="text"
    :type="type"
    @input="updateInput"
  />
</template>

<style scoped>
.input {
  position: initial;
  width: 292px;
  outline: none;
  color: #111111;
  padding: 12px 16px;
  height: 59px;
  background: #f3f3f3;
  border: none;
  border-bottom: 2px solid #303f9f;
  border-radius: 6px;
}
</style>
