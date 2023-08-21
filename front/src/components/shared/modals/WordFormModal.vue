<script>
import MainModal from "@/components/shared/MainModal.vue";
import MainWordForm from "@/components/shared/MainWordForm.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "WordFormModal",
  components: { MainWordForm, MainModal },
  methods: {
    ...mapActions({
      changeShowModal: "changeShowModal",
    }),
  },
  computed: {
    ...mapState({
      isShowModal: (state) => state.ui.isShowModal,
    }),
  },
};
</script>

<template>
  <MainModal v-if="isShowModal" @closeModal="changeShowModal($event)">
    <MainWordForm />
  </MainModal>
</template>

<style scoped></style>
