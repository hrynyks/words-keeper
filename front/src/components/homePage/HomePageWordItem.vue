<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePageWordItem",
  props: {
    itemWord: {
      type: Object,
      required: true,
    },
  },
});
</script>

<template>
  <v-card class="mx-auto" min-width="200" max-width="344" variant="outlined">
    <v-card-item>
      <div>
        <div class="text-overline mb-1">
          {{ itemWord.word }}
        </div>
        <div class="text-h6 mb-1">
          {{ itemWord.translate }}
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>
