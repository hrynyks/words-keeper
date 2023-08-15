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
    updateCurrentWord({ commit, dispatch }, item) {
      commit("setUpdateWord", item);
      dispatch("changeShowModal", false);
      dispatch("clearInputs");
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

    fillFormWithCardData({ dispatch }, item) {
      dispatch("changeWord", item.word);
      dispatch("changeTranslate", item.translate);
      dispatch("changeId", item.id);
      dispatch("changeShowModal", true);
    },

    clearInputs({ commit }) {
      commit("setWord", "");
      commit("setTranslate", "");
      commit("setId", "");
    },
  },
};
