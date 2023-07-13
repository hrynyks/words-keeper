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
  <v-responsive class="mx-auto" max-width="344">
    <v-text-field
      hide-details="auto"
      :label="label"
      :value="text"
      :type="type"
      @input="updateInput"
    ></v-text-field>
  </v-responsive>
</template>

<style scoped></style>
