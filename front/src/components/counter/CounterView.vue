<script>
import { mapActions, mapState } from "vuex";
import MainLayout from "@/components/shared/MainLayout.vue";
import MainFooter from "@/components/shared/MainFooter.vue";
import MainHeader from "@/components/shared/MainHeader.vue";

export default {
  name: "CounterView",
  components: { MainHeader, MainFooter, MainLayout },
  methods: {
    ...mapActions({
      changeCount: "changeCount",
    }),
    addCounter() {
      this.changeCount(this.count + 1);
      console.log(this.count);
    },
    delCounter() {
      this.changeCount(this.count - 1);
    },
  },
  computed: {
    ...mapState({
      count: (state) => state.count,
    }),
  },
};
</script>

<template>
  <MainLayout>
    <template v-slot:header>
      <MainHeader />
    </template>

    <template v-slot:main>
      <h1>counter</h1>
      <h1>{{ count }}</h1>
      <div class="btns">
        <button @click="addCounter">+</button>
        <button @click="delCounter">-</button>
      </div>
    </template>

    <template v-slot:footer>
      <MainFooter />
    </template>
  </MainLayout>
</template>

<style scoped>
.btns {
  display: flex;
  justify-content: center;
}
</style>
