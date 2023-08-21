export const UI_ACTIONS = {
  actions: {
    changeCount({ commit }, value) {
      commit("setCount", value);
    },
    changeShowModal({ commit }, value) {
      commit("setShowModal", value);
    },
  },
};
