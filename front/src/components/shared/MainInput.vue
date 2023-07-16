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
  <v-text-field
    class="input"
    hide-details="auto"
    :label="label"
    :value="text"
    :type="type"
    @input="updateInput"
  ></v-text-field>
</template>

<style scoped>
.input {
  width: 100%;
}
</style>
