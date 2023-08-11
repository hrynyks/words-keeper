export const WORD_ACTIONS = {
  actions: {
    pushNewWord({ commit, dispatch }, item) {
      commit("setAddNewWord", item);
      dispatch("changeShowModal", false);
      dispatch("clearInputs");
    },
    deleteWord({ commit }, id) {
      commit("setDeleteWord", id);
    },
    changeWord({ commit }, item) {
      commit("setWord", item);
    },
    changeTranslate({ commit }, item) {
      commit("setTranslate", item);
    },
    changeId({ commit }, item) {
      commit("setId", item);
    },
    clearInputs({ commit }) {
      commit("setWord", "");
      commit("setTranslate", "");
      commit("setId", "");
    },
  },
};
