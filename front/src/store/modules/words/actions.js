import axios from "axios";

export const WORD_ACTIONS = {
  actions: {
    async fetchWords() {
      await axios
        .get("http://localhost:3000/words")
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("finally");
        });
    },
    pushNewWord({ commit, dispatch }, item) {
      commit("setAddNewWord", item);
      dispatch("changeShowModal", false);
    },
    deleteWord({ commit }, id) {
      commit("setDeleteWord", id);
    },
    updateCurrentWord({ commit, dispatch }, item) {
      commit("setUpdateWord", item);
      dispatch("changeShowModal", false);
    },
    fillFormWithCardData({ dispatch }, item) {
      dispatch("changeWordInputs", item);
      dispatch("changeShowModal", true);
    },
    clearInputs({ dispatch }) {
      dispatch("changeWordInputs", {
        id: "",
        word: "",
        translate: "",
      });
    },
    changeWordInputs({ commit }, value) {
      commit("setChangeWordInputs", value);
    },
  },
};
