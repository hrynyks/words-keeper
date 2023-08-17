export const WORD_MUTATIONS = {
  mutations: {
    setAddNewWord(state, item) {
      state.words = [...state.words, item];
    },
    setDeleteWord(state, id) {
      state.words = state.words.filter((item) => item.id !== id);
    },
    setUpdateWord(state, item) {
      state.words = state.words.map((el) => (el.id === item.id ? item : el));
    },
    setChangeWordInputs(state, item) {
      state.wordItem = {
        ...state.wordItem,
        ...item,
      };
    },
  },
};
