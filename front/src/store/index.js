import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      count: 0,
    };
  },
  getters: {},
  mutations: {
    setCount(state, value) {
      state.count = value;
    },
  },
  actions: {
    changeCount({ commit }, value) {
      commit("setCount", value);
    },
  },
  modules: {},
});
// component - dispatch(action) - commit(mutation) - change state
