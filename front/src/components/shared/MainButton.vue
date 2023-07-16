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
    btnText: {
      type: String,
      required: true,
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
    {{ btnText }}
  </v-btn>
</template>
