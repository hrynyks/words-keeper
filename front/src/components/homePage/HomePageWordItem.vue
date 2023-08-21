<script>
import { defineComponent } from "vue";
import MainButton from "@/components/shared/MainButton.vue";

export default defineComponent({
  name: "HomePageWordItem",

  components: { MainButton },

  props: {
    itemWord: {
      type: Object,
      required: true,
    },
  },

  methods: {
    onDeleteWordItem(id) {
      this.$emit("deleteWordItem", id);
    },
    onEditWordItem(item) {
      this.$emit("editWordItem", item);
    },
  },

  emits: ["deleteWordItem", "editWordItem"],
});
</script>

<template>
  <v-card class="mx-auto" min-width="400" max-width="344" variant="outlined">
    <v-card-item>
      <div>
        <div class="text-overline mb-1">
          {{ itemWord.word }}
        </div>
        <div class="text-h6 mb-1">
          {{ itemWord.translate }}
        </div>
      </div>
      <MainButton btn-text="Edit word" @onClick="onEditWordItem(itemWord)" />
      <MainButton btn-text="Delete" @onClick="onDeleteWordItem(itemWord.id)" />
    </v-card-item>
  </v-card>
</template>
