<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "CounterView",
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
  <h1>counter</h1>
  <h1>{{ count }}</h1>
  <div class="btns">
    <button @click="addCounter">+</button>
    <button @click="delCounter">-</button>
  </div>
</template>

<style scoped>
.btns {
  display: flex;
  justify-content: center;
}
</style>
