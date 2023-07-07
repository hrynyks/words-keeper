<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainButton",
  props: {
    type: {
      type: String,
      required: false,
      default: "button",
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
});
</script>

<template>
  <v-btn :type="type" @click="onClick">
    <slot></slot>
  </v-btn>
</template>
