<script>
import { defineComponent } from "vue";
import MainWordForm from "@/components/shared/MainWordForm.vue";
import HomePageWordList from "@/components/homePage/HomePageWordList.vue";
import MainModal from "@/components/shared/MainModal.vue";
import { mapActions, mapState } from "vuex";
export default defineComponent({
  name: "HomePageMainContent",
  components: { MainModal, MainWordForm, HomePageWordList },
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
});
</script>

<template>
  <main class="main-layout__main">
    <HomePageWordList />
    <MainModal v-if="isShowModal" @closeModal="changeShowModal($event)">
      <MainWordForm />
    </MainModal>
  </main>
</template>

<style scoped>
.main-layout__main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
}
</style>
