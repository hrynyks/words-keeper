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
    setAddNewWord(state, item) {
      state.words = [...state.words, item];
    },
    setDeleteWord(state, id) {
      state.words = state.words.filter((item) => item.id !== id);
    },
  },
  actions: {
    changeCount({ commit }, value) {
      commit("setCount", value);
    },
    changeShowModal({ commit }, value) {
      commit("setShowModal", value);
    },
    pushNewWord({ commit, dispatch }, item) {
      commit("setAddNewWord", item);
      dispatch("changeShowModal", false);
    },
    deleteWord({ commit }, id) {
      commit("setDeleteWord", id);
    },
  },
  modules: {},
});
// component - dispatch(action) - commit(mutation) - change state
