import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      count: 0,
      isShowModal: false,
      words: [],
    };
  },
  getters: {},
  mutations: {
    setCount(state, value) {
      state.count = value;
    },
    setShowModal(state, value) {
      state.isShowModal = value;
    },
    setM(state, item) {
      state.words = [...state.words, item];
    },
  },
  actions: {
    changeCount({ commit }, value) {
      commit("setCount", value);
    },
    changeShowModal({ commit }, value) {
      commit("setShowModal", value);
    },
  },
  modules: {},
});
// component - dispatch(action) - commit(mutation) - change state
